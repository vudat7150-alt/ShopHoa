import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { QuickView } from "./QuickView";
import { SiteFooter } from "./SiteFooter";
import { ShopProductCard } from "./ShopProductCard";
import { SHOP_CATEGORIES, SHOP_FILTERS, filterShopProducts, shopProducts, shopFilterOptions, flowerFilterLabel, type ShopSlug, type ShopProduct } from "@/lib/shop-catalog";
import { useCart } from "@/lib/cart";

export function ShopCategoryPage({ slug }: { slug: ShopSlug }) {
  const category = SHOP_CATEGORIES.find(c => c.slug === slug);
  const config = SHOP_FILTERS[slug];
  const items = shopProducts.filter(p => p.shop === slug);
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [price, setPrice] = useState<number | undefined>();
  const [quick, setQuick] = useState<ShopProduct | null>(null);
  const { add } = useCart();
  const list = filterShopProducts(items, selected, price === undefined ? undefined : config.prices[price]);
  const filtered = price !== undefined || Object.values(selected).some(v => v.length);
  function toggle(key: string, value: string) {
    setSelected(prev => { const values = prev[key] ?? []; return { ...prev, [key]: values.includes(value) ? values.filter(v => v !== value) : [...values, value] }; });
  }
  return <><main className="shop-surface">
    <div className="shop-inner">
      <nav className="shop-breadcrumb" aria-label="Đường dẫn"><Link to="/">Trang chủ</Link><span>/</span><Link to="/cuahang">Cửa hàng</Link><span>/</span><span aria-current="page">{category?.name}</span></nav>
      <header className="shop-category-intro"><p className="shop-eyebrow">Hương Ly · Tuyển chọn từ phố</p><h1>{category?.name}</h1><p>{category?.intro}</p></header>
      <div className="shop-category-layout">
        <aside className="shop-filters" aria-label="Bộ lọc sản phẩm">
          <div className="flex items-center justify-between"><h2>Bộ lọc</h2>{filtered && <Button variant="link" onClick={() => { setSelected({}); setPrice(undefined); }}>Làm mới</Button>}</div>
          {config.groups.map(group => <fieldset key={group.key}><legend>{group.title}</legend>
            {shopFilterOptions(items, group.key, slug).map(value => <label key={value} className="shop-check"><input type="checkbox" checked={selected[group.key]?.includes(value) ?? false} onChange={() => toggle(group.key, value)} /><span>{flowerFilterLabel(value)}</span><small>{items.filter(p => p.attrs[group.key]?.includes(value)).length}</small></label>)}
          </fieldset>)}
          <fieldset><legend>Khoảng giá</legend><label className="shop-check"><input type="radio" name="price" checked={price === undefined} onChange={() => setPrice(undefined)} /><span>Tất cả mức giá</span></label>{config.prices.map((tier, i) => <label key={tier.label} className="shop-check"><input type="radio" name="price" checked={price === i} onChange={() => setPrice(i)} /><span>{tier.label}</span></label>)}</fieldset>
        </aside>
        <div className="min-w-0"><p className="shop-result-count" aria-live="polite">{list.length} sản phẩm{filtered ? " khớp bộ lọc" : ""}</p>
          {list.length ? <div className="shop-grid">{list.map(p => <ShopProductCard key={p.id} product={p} onOpen={() => setQuick(p)} onAdd={() => add(p)} />)}</div> : <div className="shop-empty"><p>Chưa có sản phẩm phù hợp lựa chọn này.</p><Button variant="link" onClick={() => { setSelected({}); setPrice(undefined); }}>Xóa bộ lọc</Button><Button variant="link" asChild><Link to="/lienhe">Nhắn tiệm đặt riêng</Link></Button></div>}
        </div>
      </div>
    </div>
  </main><SiteFooter /><QuickView product={quick} onClose={() => setQuick(null)} /></>;
}