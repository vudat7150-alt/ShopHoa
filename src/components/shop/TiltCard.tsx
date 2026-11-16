import { useRef, type MouseEvent } from "react";
import { Plus } from "lucide-react";
import { formatVnd, type Product } from "@/lib/data";

// Thẻ sản phẩm 3D: nghiêng theo con trỏ, bó hoa "bật" ra khỏi khung
export function TiltCard({ product, onOpen, onAdd, note }: { product: Product; onOpen: () => void; onAdd: () => void; note?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${x * 18}deg`);
    el.style.setProperty("--rx", `${-y * 14}deg`);
  };
  const leave = () => {
    ref.current?.style.setProperty("--ry", "0deg");
    ref.current?.style.setProperty("--rx", "0deg");
  };

  return (
    <div className="tilt-scene pt-10">
      <div ref={ref} onMouseMove={move} onMouseLeave={leave} className="tilt-card aspect-[3/4] cursor-pointer" onClick={onOpen}>
        <div className="tilt-bg grain">
          {product.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-[11px] uppercase tracking-widest text-cream-foreground">
              {product.tag}
            </span>
          )}
        </div>
        <img src={product.thumb ?? product.image} alt={product.name} loading="lazy" width={1024} height={1024} className="tilt-pop" />
      </div>
      <div className="tilt-title mt-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{product.category}</p>
          <h3 className="mt-1 text-2xl leading-tight">{product.name}</h3>
          <p className="mt-1 text-primary">
            {formatVnd(product.price)}
            {note && <span className="ml-2 rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">{note}</span>}
          </p>
        </div>
        <button
          aria-label={`Thêm ${product.name} vào giỏ`}
          onClick={onAdd}
          className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition hover:bg-primary hover:text-primary-foreground"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
