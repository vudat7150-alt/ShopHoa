import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/shop/SiteFooter";
import { FlowerFrame } from "@/components/shop/FlowerFrame";
import { ShopProductCard } from "@/components/shop/ShopProductCard";
import { QuickView } from "@/components/shop/QuickView";
import { Button } from "@/components/ui/button";
import { flowerGuide, speciesForGuide } from "@/lib/data";
import { flowerColorNotes } from "@/lib/flower-notes";
import { relatedFlowerProducts, type ShopProduct } from "@/lib/shop-catalog";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/ynghiahoa")({
  head: () => ({ meta: [
    { title: "Ý nghĩa hoa — Từ điển hoa của Hương Ly" },
    { name: "description", content: "Ý nghĩa từng sắc hoa, cách chăm hoa và những cành, bó, lẵng hoa tương ứng trong cửa hàng Hương Ly, Hà Nội." },
    { property: "og:title", content: "Từ điển hoa — Lời thương của Hương Ly" },
    { property: "og:description", content: "Khám phá hoa dơn, loa kèn, sen và những sắc hoa thân quen; chọn hoa từ danh mục Hương Ly." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: YNghiaHoa,
});

function YNghiaHoa() {
  const [sel, setSel] = useState(0);
  const [color, setColor] = useState(0);
  const [quick, setQuick] = useState<ShopProduct | null>(null);
  const detailRef = useRef<HTMLElement>(null);
  const { add } = useCart();
  const f = flowerGuide[sel] ?? flowerGuide[0];
  if (!f) return null;
  const species = speciesForGuide(f.name);
  const related = relatedFlowerProducts(species);
  const notes = species ? flowerColorNotes[species] ?? [] : [];
  const note = notes[color] ?? notes[0];
  const flowerName = f.name.toLowerCase().replace(/^hoa\s+/, "");
  function selectFlower(index: number, scroll = false) {
    setSel(index); setColor(0);
    if (scroll) detailRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  }
  return <><main className="shop-surface dictionary-page">
    <header className="mx-auto max-w-7xl px-6 py-16">
      <p className="shop-eyebrow">Số 03 · Từ điển hoa</p>
      <h1 className="mt-3 text-5xl md:text-7xl">Ý nghĩa & cách chăm</h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed opacity-80">Mỗi loài hoa, một lời thương. Những sắc hoa thân quen và câu chuyện nhỏ của chúng.</p>
    </header>
    <div className="dictionary-showcase">
    <nav className="border-y border-border" aria-label="Chọn loài hoa"><div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 py-6">
      {flowerGuide.map((g, i) => <Button key={g.name} variant={i === sel ? "default" : "outline"} className="dictionary-species" aria-pressed={i === sel} onClick={() => selectFlower(i)}>{g.name}</Button>)}
    </div></nav>
    <section ref={detailRef} className="dictionary-detail mx-auto max-w-7xl px-6 py-12 md:py-16" aria-label="Chi tiết loài hoa">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <FlowerFrame image={note?.image ?? f.image} name={`Bó ${note?.label ?? f.name}`} />
        <div>
          <p className="shop-eyebrow">Loài {sel + 1} / {flowerGuide.length}</p><h2 className="mt-2 text-5xl md:text-6xl">{f.name}</h2>
          {notes.length > 0 && <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Sắc hoa">{notes.map((n, i) => <Button key={n.label} variant={color === i ? "default" : "outline"} className="dictionary-species" aria-pressed={color === i} onClick={() => setColor(i)}>{n.label}</Button>)}</div>}
          <h3 className="shop-eyebrow mt-7">Ý nghĩa</h3><p className="mt-2 min-h-20 text-[15px] leading-relaxed" aria-live="polite">{note?.meaning ?? f.meaning}</p>
          <h3 className="shop-eyebrow mt-6">Cách chăm</h3><p className="mt-2 text-[15px] leading-relaxed">{f.care}</p>
          {species && <Button variant="outline" asChild className="mt-7 h-auto whitespace-normal py-3"><Link to="/cuahang" search={{ loai: species }}>Xem các bó hoa {flowerName} <ArrowRight size={16} /></Link></Button>}
        </div>
      </div>
    </section>
    </div>
      <section className="dictionary-recommendations mx-auto max-w-7xl px-6 py-12 md:py-16" aria-label="Hoa cùng loài tại cửa hàng"><div className="shop-row-heading"><div><p className="shop-eyebrow">Cành, bó & lẵng hoa</p><h2 className="mt-2 text-3xl">{f.name} tại tiệm</h2></div><p className="text-xs">{related.length} lựa chọn</p></div>
        {related.length > 0 ? <div className="shop-rail" tabIndex={0} role="region" aria-label={`Sản phẩm ${f.name}`}>
          {related.map(p => <ShopProductCard key={p.id} product={p} onOpen={() => setQuick(p)} onAdd={() => add(p)} />)}
        </div> : <p className="py-6 text-sm">Chưa có loài hoa này trong danh mục. <Link to="/lienhe" className="underline">Nhắn tiệm đặt riêng</Link>.</p>}
      </section>
    <section className="border-t border-border"><div className="mx-auto max-w-7xl px-6 py-12"><h2 className="text-4xl">Toàn bộ từ điển</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {flowerGuide.map((g, i) => <Button variant="ghost" key={g.name} className="dictionary-entry group" aria-pressed={i === sel} onClick={() => selectFlower(i, true)}>
        <div className="herbarium-frame h-40 p-3"><img src={flowerColorNotes[speciesForGuide(g.name) ?? "Lá & phụ kiện"]?.[0]?.image ?? g.image} alt={g.name} width={256} height={256} loading="lazy" className="h-full w-full object-contain" /></div><h3>{g.name}</h3><p className="line-clamp-2">{g.meaning}</p>
      </Button>)}
    </div></div></section>
  </main><SiteFooter /><QuickView product={quick} onClose={() => setQuick(null)} /></>;
}
