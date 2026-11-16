import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatVnd, type Product } from "@/lib/data";
import { SEASONAL_THEMES, seasonalProducts, type Season } from "@/lib/home-themes";
import { SeasonalCountdown } from "./SeasonalCountdown";
import spring from "@/assets/tree-spring.webp";
import summer from "@/assets/tree-summer.webp";
import autumn from "@/assets/tree-autumn.webp";
import winter from "@/assets/tree-winter.webp";

// One complete tree per season, each rooted at the right edge.
const trees: Record<Season, string> = { xuan: spring, ha: summer, thu: autumn, dong: winter };
const seasons = Object.keys(SEASONAL_THEMES) as Season[];
// A few leaves drift from the canopy and fade before reaching the products.
const leaves = [
  { right: 70, x: -60, d: 9, w: 0 }, { right: 150, x: -90, d: 11, w: 3.2 }, { right: 110, x: 40, d: 10, w: 6.5 },
  { right: 210, x: -50, d: 12, w: 1.8 }, { right: 40, x: -110, d: 10.5, w: 8 },
];

export function SeasonalShowcase({ onOpen }: { onOpen: (product: Product) => void }) {
  const [season, setSeason] = useState<Season>("thu");
  const [active, setActive] = useState(false);
  const section = useRef<HTMLElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const { add } = useCart();
  useEffect(() => {
    let intersects = false;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setActive(intersects && !document.hidden && !motion.matches);
    const observer = new IntersectionObserver(([entry]) => { intersects = entry?.isIntersecting ?? false; sync(); }, { threshold: 0.1 });
    if (section.current) observer.observe(section.current);
    document.addEventListener("visibilitychange", sync); motion.addEventListener("change", sync);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", sync); motion.removeEventListener("change", sync); };
  }, []);
  function select(value: Season) { setSeason(value); rail.current?.scrollTo({ left: 0, behavior: "instant" }); }
  return <section ref={section} id="cua-hang" className="garden-section">
    <div className="garden-lead-in">
      <span className="garden-guide" aria-hidden="true" />
      <p className="garden-lead-eyebrow">NHỊP THỞ BỐN MÙA KINH KỲ</p>
      <p className="garden-lead-copy">Mỗi thức hoa đều mang trong mình một mùa nhớ. Dưới tán cây góc phố cũ, Hương Ly gói ghém những sắc hương được thương mến nhất gửi trao tận tay người...</p>
    </div>
    <div data-season={season} className={`seasonal-case garden-case ${active ? "is-live" : ""}`}>
      <div className="garden-tree" aria-hidden="true">
        {seasons.map(key => <div key={key} className={`garden-season-tree ${key === season ? "is-selected" : ""}`}>
          <img src={trees[key]} alt="" width={1024} height={1024} loading="lazy" />
        </div>)}
      </div>
      {leaves.map((leaf, i) => <span key={i} aria-hidden="true" className="garden-leaf" style={{ right: leaf.right, "--x": `${leaf.x}px`, "--d": `${leaf.d}s`, "--w": `${leaf.w}s` } as CSSProperties} />)}
      <header className="garden-header">
        <p className="garden-eyebrow">Số 01 · Những mùa thương</p>
        <h2>Được yêu nhất<br /><em>theo mùa phố cũ</em></h2>
        <SeasonalCountdown season={season} active={active} />
        <Button asChild variant="link" className="garden-shop"><Link to="/cuahang">Ghé cửa hàng <ArrowRight size={15} /></Link></Button>
      </header>
      <div role="tablist" aria-label="Chọn mùa hoa" className="garden-bookmarks">
        {seasons.map(key => <Button key={key} id={`season-tab-${key}`} role="tab" aria-label={SEASONAL_THEMES[key].label} aria-selected={key === season} aria-controls="season-products" variant="ghost" className={`garden-bookmark ${key === season ? "is-selected" : ""}`} onClick={() => select(key)}>{SEASONAL_THEMES[key].name}</Button>)}
      </div>
      <div className="garden-collection">
        <div className="garden-toolbar">
          <div role="group" aria-label="Dòng sản phẩm" className="garden-categories">
            <Button variant="ghost" aria-pressed="true" className="garden-category is-selected">Hoa</Button>
            <Button variant="ghost" disabled title="Nến & sáp thơm — sắp có" className="garden-category">Nến & sáp thơm <span>Sắp có</span></Button>
          </div>
          <div className="garden-arrows">
            <Button variant="ghost" size="icon" title="Sản phẩm trước" aria-label="Sản phẩm trước" onClick={() => rail.current?.scrollBy({ left: -280, behavior: "smooth" })}><ArrowLeft size={17} /></Button>
            <Button variant="ghost" size="icon" title="Sản phẩm tiếp theo" aria-label="Sản phẩm tiếp theo" onClick={() => rail.current?.scrollBy({ left: 280, behavior: "smooth" })}><ArrowRight size={17} /></Button>
          </div>
        </div>
        <div ref={rail} id="season-products" role="tabpanel" aria-labelledby={`season-tab-${season}`} className="garden-products">
          {seasonalProducts(season).map(product => <article key={`${season}-${product.id}`} className="garden-product">
            <Button variant="ghost" onClick={() => onOpen(product)} aria-label={`Xem ${product.name}`} className="garden-product-image">
              <img src={product.image} alt={product.name} loading="lazy" width={1024} height={1024} />
              <span className="garden-bestseller" aria-hidden="true">Được yêu thích</span>
            </Button>
            <h3>{product.name}</h3>
            <p className="garden-product-note">Gói tay tại tiệm Hương Ly</p>
            <div className="garden-buy"><p>{formatVnd(product.price)}</p><Button variant="outline" size="icon" title={`Thêm ${product.name} vào giỏ`} aria-label={`Thêm ${product.name} vào giỏ`} onClick={() => add(product)}><Plus size={17} /></Button></div>
          </article>)}
        </div>
      </div>
    </div>
  </section>;
}