import { useEffect, useRef } from "react";

/**
 * Hiệu ứng cánh hoa sưa / lá vàng cơm nguội rơi nghiêng — phủ toàn trang.
 *
 * • Canvas đè cố định (fixed) toàn khung nhìn, không bắt sự kiện chuột.
 * • Tối đa 10 hạt cùng lúc: phần lớn là "hạt ma" phía xa (mờ, thoắt ẩn thoắt hiện),
 *   1–2 hạt nổi bật phía gần (rõ, to hơn) lơ lửng trên cả cột chữ.
 * • Vùng 30–70% chiều cao khung nhìn là "mix sâu": xa nhỏ mờ, gần to rõ.
 * • Vùng 70–100%: hạt chậm dần và tan dần trước khi chạm đáy — và toàn bộ
 *   hiệu ứng còn mờ hẳn đi khi phần "thư tay" (data-petal-end) vào khung nhìn,
 *   để không có cánh hoa nào bay vào khung thư tay hay footer.
 */

type Role = "focus" | "ghost" | "breeze";
type Kind = "sua" | "la";

interface Particle {
  role: Role;
  kind: Kind;
  x: number;
  y: number;
  vy: number;
  drift: number;
  swayAmp: number;
  swayFreq: number;
  phase: number;
  rot: number;
  rotSpeed: number;
  size: number;
  age: number;
  alpha: number;
}

const BUDGET = 10;
const FOCUS_MAX = 2;

function makeParticle(vw: number, vh: number, role?: Role): Particle {
  const particleRole = role ?? (Math.random() < 0.62 ? "ghost" : "breeze");
  const kind: Kind = Math.random() < 0.58 ? "sua" : "la";
  const sizeBase = kind === "sua" ? 7 : 9;
  return {
    role: particleRole,
    kind,
    x: Math.random() * vw,
    y: -20 - Math.random() * Math.min(40, vh * 0.05),
    vy: 26 + Math.random() * 26,
    drift: 8 + Math.random() * 16,
    swayAmp: 14 + Math.random() * 22,
    swayFreq: 0.4 + Math.random() * 0.6,
    phase: Math.random() * Math.PI * 2,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 1.4,
    size: sizeBase * (0.7 + Math.random() * 0.6) * (particleRole === "focus" ? 1.5 : 1),
    age: 0,
    alpha: 0,
  };
}

/** Cánh hoa sưa trắng mảnh — hình bầu dục mỏng, hơi cong. */
function drawSua(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.62, -s * 0.55, s * 0.5, s * 0.6, 0, s);
  ctx.bezierCurveTo(-s * 0.5, s * 0.6, -s * 0.62, -s * 0.55, 0, -s);
  ctx.closePath();
  ctx.fillStyle = "rgba(252, 249, 238, 0.92)";
  ctx.fill();
  ctx.strokeStyle = "rgba(214, 205, 182, 0.5)";
  ctx.lineWidth = Math.max(0.4, s * 0.06);
  ctx.stroke();
}

/** Lá vàng cơm nguội — giọt nước màu gold, gân lá mảnh. */
function drawLa(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.bezierCurveTo(s * 0.8, -s * 0.4, s * 0.55, s * 0.7, 0, s);
  ctx.bezierCurveTo(-s * 0.55, s * 0.7, -s * 0.8, -s * 0.4, 0, -s);
  ctx.closePath();
  ctx.fillStyle = "rgba(205, 158, 84, 0.85)";
  ctx.fill();
  ctx.strokeStyle = "rgba(146, 106, 48, 0.65)";
  ctx.lineWidth = Math.max(0.5, s * 0.09);
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.85);
  ctx.quadraticCurveTo(s * 0.1, 0, 0, s * 0.85);
  ctx.stroke();
}

export function PetalFall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let raf = 0;
    let last = performance.now();
    let running = !document.hidden;
    let animating = false;
    let pageFade = 1;
    let previousScrollY = window.scrollY;
    let previousDirection = 0;
    const endEl = document.querySelector<HTMLElement>("[data-petal-end]");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
      canvas.width = Math.round(vw * dpr);
      canvas.height = Math.round(vh * dpr);
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const particles: Particle[] = [];
    const countFocus = () => particles.filter((p) => p.role === "focus").length;

    const updatePageFade = () => {
      if (!endEl) {
        pageFade = 1;
        return;
      }
      const top = endEl.getBoundingClientRect().top;
      pageFade = top < vh ? Math.max(0, top / vh) : 1;
    };

    const fillViewport = () => {
      particles.length = 0;
      for (let i = 0; i < BUDGET; i++) {
        const p = makeParticle(vw, vh, i < FOCUS_MAX ? "focus" : undefined);
        p.y = Math.random() * vh;
        p.age = 1.2;
        particles.push(p);
      }
    };

    // Rải sẵn một lượt để khung nhìn không trống lúc mới mở trang.
    fillViewport();

    const startLoop = () => {
      if (!running || animating) return;
      animating = true;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      animating = false;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY < previousScrollY ? -1 : currentY > previousScrollY ? 1 : 0;
      const enteredTopZone = currentY <= vh * 0.2 && previousScrollY > vh * 0.2;
      const turnedUp = direction === -1 && previousDirection !== -1;

      updatePageFade();
      if (turnedUp || enteredTopZone) fillViewport();

      if (pageFade <= 0.001) {
        particles.length = 0;
        ctx.clearRect(0, 0, vw, vh);
        stopLoop();
      } else {
        startLoop();
      }

      if (direction !== 0) previousDirection = direction;
      previousScrollY = currentY;
    };

    const onResize = () => {
      resize();
      updatePageFade();
      if (pageFade > 0.001) startLoop();
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running) startLoop();
      else stopLoop();
    };

    const tick = (now: number) => {
      if (!running || !animating) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const t = now / 1000;

      if (pageFade <= 0.001) {
        particles.length = 0;
        ctx.clearRect(0, 0, vw, vh);
        stopLoop();
        return;
      }

      ctx.clearRect(0, 0, vw, vh);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]!;
        p.age += dt;

        // Gió nhè nhẹ thổi ngang, chữ sway lượn sóng.
        const sway = Math.sin(t * p.swayFreq + p.phase) * p.swayAmp * 0.35;
        p.x += (p.drift + sway) * dt;
        p.rot += p.rotSpeed * dt;

        // Vùng sâu của khung nhìn (0–100% chiều cao):
        // 0–30% rơi tự nhiên, 30–70% mix xa/gần, 70–100% chậm lại và tan.
        const depth = p.y / vh;
        let speedFactor = 1;
        let zoneAlpha = 1;
        if (depth > 0.7) {
          const fade = Math.min(1, (depth - 0.7) / 0.26);
          speedFactor = 1 - fade * 0.55;
          zoneAlpha = Math.max(0, 1 - fade);
        }

        p.y += p.vy * speedFactor * dt;

        if (p.role === "ghost") {
          // Hạt ma phía xa: thoắt ẩn thoắt hiện, mờ 0.2–0.4.
          const pulse = 0.5 + 0.5 * Math.sin(t * 0.9 + p.phase * 3.1);
          p.alpha = (0.2 + pulse * 0.2) * zoneAlpha * pageFade;
        } else if (p.role === "focus") {
          p.alpha = (0.9 + 0.1 * Math.sin(t * 1.7 + p.phase)) * zoneAlpha * pageFade;
        } else {
          const grow = Math.min(1, p.age / 1.2);
          p.alpha = grow * zoneAlpha * pageFade;
        }

        if (p.alpha <= 0.005 || p.y > vh * 0.97 || p.x < -60 || p.x > vw + 60) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot + Math.sin(t * p.swayFreq + p.phase) * 0.35);
        ctx.globalAlpha = p.alpha;
        if (p.role === "ghost") {
          ctx.filter = "none";
          ctx.scale(0.8, 0.8);
        } else if (p.role === "focus") {
          ctx.filter = "none";
        }
        if (p.kind === "sua") drawSua(ctx, p.size);
        else drawLa(ctx, p.size);
        ctx.restore();
      }

      // Bổ sung nhẹ nhàng phía trên khung hình, với hai lớp gần luôn được giữ.
      while (particles.length < BUDGET) {
        const role: Role | undefined = countFocus() < FOCUS_MAX ? "focus" : undefined;
        particles.push(makeParticle(vw, vh, role));
      }

      raf = requestAnimationFrame(tick);
    };

    updatePageFade();
    startLoop();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stopLoop();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-20"
    />
  );
}
