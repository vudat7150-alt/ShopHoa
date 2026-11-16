import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatVnd, type Product } from "@/lib/data";
import { NEW_ARRIVAL_PRODUCTS } from "@/lib/home-themes";

export function NewArrivals({ onOpen }: { onOpen: (product: Product) => void }) {
  const rail = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const { add } = useCart();

  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    const sync = () => setEdges({ start: node.scrollLeft <= 2, end: node.scrollLeft + node.clientWidth >= node.scrollWidth - 2 });
    const observer = new ResizeObserver(sync);
    observer.observe(node);
    node.addEventListener("scroll", sync, { passive: true });
    sync();
    return () => { observer.disconnect(); node.removeEventListener("scroll", sync); };
  }, []);

  function browse(direction: number) {
    const node = rail.current;
    const card = node?.firstElementChild;
    if (!node || !card) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    node.scrollBy({ left: direction * (card.getBoundingClientRect().width + 20), behavior: reduced ? "instant" : "smooth" });
  }

  return <section className="arrival-section" aria-labelledby="arrival-title">
    <div className="arrival-inner">
      <header className="arrival-header">
        <div><p className="arrival-eyebrow">Số 02 · Sắc hương mới hái sáng nay</p><h2 id="arrival-title">Góc Hoa Mới Về Phố</h2></div>
        <div className="arrival-controls">
          <Button asChild variant="link" className="arrival-all"><Link to="/cuahang">Xem tất cả hoa mới <ArrowRight size={15} /></Link></Button>
          <div className="arrival-arrows">
            <Button variant="outline" size="icon" aria-label="Hoa mới trước" title="Hoa mới trước" disabled={edges.start} onClick={() => browse(-1)}><ArrowLeft size={17} /></Button>
            <Button variant="outline" size="icon" aria-label="Hoa mới tiếp theo" title="Hoa mới tiếp theo" disabled={edges.end} onClick={() => browse(1)}><ArrowRight size={17} /></Button>
          </div>
        </div>
      </header>
      <div ref={rail} className="arrival-rail" role="region" aria-label="Hoa mới về phố" tabIndex={0}>
        {NEW_ARRIVAL_PRODUCTS.map(product => <article className="arrival-product" key={product.id}>
          <Button variant="ghost" className="arrival-photo" aria-label={`Xem hoa mới ${product.name}`} onClick={() => onOpen(product)}>
            <img src={product.thumb || product.image} alt={product.name} width={1024} height={1024} loading="lazy" />
            <span className="arrival-badge">Mới sáng nay</span>
          </Button>
          <h3>{product.name}</h3>
          <p className="arrival-note">{product.species.join(" & ")}</p>
          <p className="arrival-price">{formatVnd(product.price)}</p>
          <Button className="arrival-add" onClick={() => add(product)} aria-label={`Thêm vào giỏ ${product.name}`}><Plus size={15} />Thêm vào giỏ</Button>
        </article>)}
      </div>
    </div>
  </section>;
}