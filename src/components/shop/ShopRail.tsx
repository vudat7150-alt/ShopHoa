import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShopProductCard } from "./ShopProductCard";
import { SHOP_CATEGORIES, shopProducts, type ShopProduct } from "@/lib/shop-catalog";
import { useCart } from "@/lib/cart";

export function ShopRail({ category, onOpen }: { category: typeof SHOP_CATEGORIES[number]; onOpen: (p: ShopProduct) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { add } = useCart();
  const [edges, setEdges] = useState({ start: true, end: false });
  const items = shopProducts.filter(p => p.shop === category.slug);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const sync = () => setEdges({ start: node.scrollLeft < 2, end: node.scrollLeft + node.clientWidth >= node.scrollWidth - 2 });
    const observer = new ResizeObserver(sync);
    observer.observe(node); node.addEventListener("scroll", sync, { passive: true }); sync();
    return () => { observer.disconnect(); node.removeEventListener("scroll", sync); };
  }, []);
  function scroll(direction: number) {
    const node = ref.current;
    if (!node) return;
    node.scrollBy({ left: direction * node.clientWidth * .8, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <section className="shop-category-row" aria-labelledby={`row-${category.slug}`}>
    <header className="shop-row-heading">
      <div><h2 id={`row-${category.slug}`}>{category.name}</h2><p>{category.intro}</p></div>
      <div className="shop-row-tools">
        <Button variant="link" asChild><Link to="/cuahang/$category" params={{ category: category.slug }}>Xem tất cả <ArrowRight /></Link></Button>
        <Button variant="outline" size="icon" className="shop-arrow" title="Sản phẩm trước" aria-label={`${category.name} trước`} disabled={edges.start} onClick={() => scroll(-1)}><ArrowLeft /></Button>
        <Button variant="outline" size="icon" className="shop-arrow" title="Sản phẩm tiếp theo" aria-label={`${category.name} tiếp theo`} disabled={edges.end} onClick={() => scroll(1)}><ArrowRight /></Button>
      </div>
    </header>
    <div ref={ref} className="shop-rail" role="region" aria-label={category.name} tabIndex={0}>
      {items.map(p => <ShopProductCard key={p.id} product={p} onOpen={() => onOpen(p)} onAdd={() => add(p)} />)}
    </div>
  </section>;
}