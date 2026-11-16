import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { HeroCarousel } from "@/components/shop/HeroCarousel";
import { NewArrivals } from "@/components/shop/NewArrivals";
import { SeasonalShowcase, ScentSelection, HandcraftStudio, OccasionReminder } from "@/components/shop/HomeShowcase";
import { QuickView } from "@/components/shop/QuickView";
import { SiteFooter } from "@/components/shop/SiteFooter";
import { FlowerFrame } from "@/components/shop/FlowerFrame";
import { DeliveryMoments } from "@/components/shop/DeliveryMoments";
import { flowerColorNotes } from "@/lib/flower-notes";
import { flowerGuide, posts, speciesForGuide, type Product } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Hương Ly — Hoa tươi cắt mỗi sáng, Hà Nội" },
      { name: "description", content: "Tiệm hoa Hương Ly: hoa bó, lẵng hoa, hoa cưới, hoa cành lẻ gói tay mỗi sáng. Giao trong ngày nội thành Hà Nội." },
      { property: "og:title", content: "Hương Ly — Hoa tươi cắt mỗi sáng" },
      { property: "og:description", content: "Hoa tươi từ vườn, gói tay cho người mình thương. Giao trong ngày tại Hà Nội." },
    ],
  }),
  component: Index,
});

function Index() {
  const [quick, setQuick] = useState<Product | null>(null);


  return (
    <>
      <HeroCarousel />
      <SeasonalShowcase onOpen={setQuick} />
      <NewArrivals onOpen={setQuick} />
      <ScentSelection />
      <HandcraftStudio />
      <OccasionReminder />

      {/* Câu chuyện — lời mở đầu, đọc trọn ở /cauchuyen */}
      <section className="grain bg-cream text-cream-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] opacity-70">Số 06 · Câu chuyện</p>
            <h2 className="mt-4 text-5xl leading-tight md:text-6xl">Nơi hoa <span className="font-script">thì thầm</span></h2>
            <Link to="/cauchuyen" className="mt-6 inline-block text-sm underline underline-offset-4 opacity-80 hover:opacity-100">
              Đọc câu chuyện trọn vẹn →
            </Link>
          </div>
          <div className="md:col-span-8 md:columns-2 gap-10 text-[15px] leading-relaxed">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8]">
              Hà Nội có những con phố mà mùa được báo bằng hoa. Tháng mười là hoạ mi, tháng ba là loa kèn, và sáng nào cũng có chiếc xe đạp chở cả một khu vườn đi qua cửa nhà ai đó.
            </p>
            <p className="mt-4">
              Hương Ly sinh ra từ những buổi sáng như thế — không bán hoa như một món hàng, mà gói lại một lời muốn nói.
            </p>
            <blockquote className="mt-6 break-inside-avoid border-l-2 border-current pl-4 font-display text-2xl italic">"Mỗi bông hoa mang trong mình một câu chuyện."</blockquote>
          </div>
        </div>
      </section>

      {/* Ý nghĩa loài hoa — chọn lọc, từ điển đầy đủ ở /ynghiahoa */}
      <section className="home-dictionary border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-[minmax(0,1fr)] items-end gap-6 sm:flex sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Số 07 · Từ điển hoa</p>
              <h2 className="mt-3 text-5xl">Ý nghĩa & cách chăm</h2>
            </div>
            <Link to="/ynghiahoa" className="text-sm underline underline-offset-4 hover:text-primary">
              Xem từ điển hoa đầy đủ ({flowerGuide.length} loài) →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {flowerGuide.slice(0, 4).map((f) => {
              const buySp = speciesForGuide(f.name);
              const note = buySp ? flowerColorNotes[buySp]?.[0] : undefined;
              const flowerName = f.name.toLowerCase().replace(/^hoa\s+/, "");
              return (
                <article key={f.name} className="home-flower-entry min-w-0">
                  <FlowerFrame compact image={note?.image ?? f.image} name={`Bó ${note?.label ?? f.name}`} />
                  <h3 className="mt-5 text-3xl">{f.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{note?.meaning ?? f.meaning}</p>
                  {buySp && (
                    <Link to="/cuahang" search={{ loai: buySp }} className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-primary">
                      Xem các bó hoa {flowerName} →
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tin hoa — tin mới nhất, nhật ký đầy đủ ở /tinhoa */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Số 08 · Nhật ký phố hoa</p>
            <h2 className="mt-3 text-5xl">Tin hoa & xu hướng</h2>
          </div>
          <Link to="/tinhoa" className="text-sm underline underline-offset-4 hover:text-primary">
            Xem tất cả tin hoa →
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <article key={p.title} className={`group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <div className={`overflow-hidden rounded-lg ${i === 0 ? "aspect-[16/11]" : "aspect-[16/10]"}`}>
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-accent">{p.tag} · {p.date}</p>
              <h3 className={`mt-2 ${i === 0 ? "text-4xl" : "text-2xl"}`}>{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <DeliveryMoments />
      <SiteFooter />
      <QuickView product={quick} onClose={() => setQuick(null)} />
    </>
  );
}
