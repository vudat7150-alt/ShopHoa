import { useRef, type PointerEvent } from "react";

/** The mat stays intact while the image plane rises above its inner border. */
export function FlowerFrame({ image, name, compact = false }: { image: string; name: string; compact?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  function move(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--ry", `${((event.clientX - rect.left) / rect.width - .5) * 18}deg`);
    node.style.setProperty("--rx", `${-((event.clientY - rect.top) / rect.height - .5) * 14}deg`);
  }
  function reset() {
    ref.current?.style.setProperty("--ry", "0deg");
    ref.current?.style.setProperty("--rx", "0deg");
  }
  return <div className={`flower-frame-scene ${compact ? "flower-frame-compact" : ""}`}>
    <figure ref={ref} onPointerMove={move} onPointerLeave={reset} className="herbarium-frame dictionary-spotlight flower-frame">
      <div className="dictionary-photo flower-frame-photo"><img key={image} src={image} alt={name} width={512} height={512} loading="lazy" /></div>
      <figcaption>Hương Ly · Sổ hoa phố cũ</figcaption>
    </figure>
  </div>;
}