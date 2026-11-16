import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { streets } from "@/lib/data";

// Băng chuyền ảnh phố hoa xưa; nền cả khu vực đổi theo ảnh đang chọn, làm mờ mơ màng
export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) setActive((a) => (a + 1) % streets.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = track.current?.children[active] as HTMLElement | undefined;
    if (el && track.current) track.current.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
  }, [active]);

  const go = (d: number) => setActive((a) => (a + d + streets.length) % streets.length);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Nền mờ */}
      {streets.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full scale-125 object-cover blur-3xl transition-opacity duration-1000"
          style={{ opacity: i === active ? 0.9 : 0 }}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/50 to-background/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1fr_1.15fr] lg:pt-24">
        <div className="animate-fade-up">
          <p className="font-script text-2xl text-accent">Hương Ly · Hoa tươi Hà Nội</p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            Hoa tươi từ vườn, gói tay cho <em className="text-secondary">người mình thương</em>
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Mỗi sáng chúng tôi chọn hoa mới về, tỉa cành, gói giấy và gửi đến tay bạn. Chọn một bó hoa, thêm thiệp viết tay, phần còn lại để Hương Ly lo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cua-hang" className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">Chọn hoa ngay</a>
            <a href="tel:0900000000" className="rounded-sm border border-foreground/40 px-6 py-3 text-sm transition hover:bg-foreground/10">Gọi cửa hàng</a>
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            <span className="text-foreground">{streets[active]!.title}</span> — {streets[active]!.caption}
          </p>
        </div>

        <div className="min-w-0" onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
          <div ref={track} className="relative flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">
            {streets.map((s, i) => (
              <button
                key={s.src}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`relative shrink-0 snap-start overflow-hidden rounded-t-full border transition-all duration-700 ${
                  i === active ? "w-64 border-primary md:w-72" : "w-36 border-border opacity-60 md:w-44"
                } aspect-[3/4.4]`}
              >
                <img src={s.src} alt={s.title} className="h-full w-full object-cover" width={1024} height={1280} loading={i === 0 ? "eager" : "lazy"} />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 text-left font-display text-lg">
                  {i === active ? s.title : ""}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <button aria-label="Ảnh trước" onClick={() => go(-1)} className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-foreground/10"><ChevronLeft className="h-4 w-4" /></button>
            <button aria-label="Ảnh sau" onClick={() => go(1)} className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-foreground/10"><ChevronRight className="h-4 w-4" /></button>
            <div className="ml-2 flex gap-2">
              {streets.map((s, i) => (
                <span key={s.src} className={`h-px transition-all ${i === active ? "w-10 bg-primary" : "w-5 bg-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
