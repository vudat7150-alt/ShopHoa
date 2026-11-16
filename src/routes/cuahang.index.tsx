import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { QuickView } from "@/components/shop/QuickView";
import { ShopRail } from "@/components/shop/ShopRail";
import { ShopProductCard } from "@/components/shop/ShopProductCard";
import { SiteFooter } from "@/components/shop/SiteFooter";
import { Button } from "@/components/ui/button";
import { SHOP_CATEGORIES, shopProducts, type ShopProduct } from "@/lib/shop-catalog";
import { matchesScent } from "@/lib/home-themes";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cuahang/")({
  head: () => ({ meta: [
    { title: "Cửa hàng — Năm góc hoa & quà của Hương Ly" },
    { name: "description", content: "Hoa cành lẻ, hoa bó nghệ thuật, lẵng chúc mừng, hoa khô và nến thơm tại Hương Ly, Hà Nội." },
    { property: "og:title", content: "Cửa hàng — Hương Ly, Hà Nội" },
    { property: "og:description", content: "Năm góc nhỏ cho hoa, hương thơm và những món quà thân quen." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ShopHub,
});
function ShopHub() {
  const { loai, huong } = Route.useSearch();
  const [quick, setQuick] = useState<ShopProduct | null>(null);
  const { add } = useCart();
  const filtered = Boolean(loai || huong);
  const list = shopProducts.filter(p => (!loai || p.species.some(s => s === loai)) && matchesScent(p, huong));
  return <><main className="shop-surface"><div className="shop-inner">
    <header className="shop-hub-intro"><p className="shop-eyebrow">Hương Ly · Hoa & quà từ phố nhỏ</p><h1>Cửa hàng</h1><p>Một cành hoa ghé nhà, một bó thương gửi phố.</p>
      <nav className="shop-category-links" aria-label="Danh mục cửa hàng">{SHOP_CATEGORIES.map(c => <Link key={c.slug} to="/cuahang/$category" params={{ category: c.slug }}>{c.name}</Link>)}</nav>
    </header>
    {filtered ? <section className="shop-category-row"><div className="shop-row-heading"><h2>{loai ?? "Hoa theo hương"}</h2><Button variant="link" asChild><Link to="/cuahang" search={{}}>Xem mọi nhóm hoa</Link></Button></div><p className="shop-result-count">{list.length} sản phẩm</p>{list.length ? <div className="shop-grid">{list.map(p => <ShopProductCard key={p.id} product={p} onOpen={() => setQuick(p)} onAdd={() => add(p)} />)}</div> : <p className="shop-empty">Chưa có hoa phù hợp; <Link to="/lienhe">nhắn tiệm đặt trước</Link>.</p>}</section> : SHOP_CATEGORIES.map(c => <ShopRail key={c.slug} category={c} onOpen={setQuick} />)}
  </div></main><SiteFooter /><QuickView product={quick} onClose={() => setQuick(null)} /></>;
}