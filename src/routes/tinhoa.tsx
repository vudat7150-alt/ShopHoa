import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/shop/SiteFooter";
import { posts } from "@/lib/data";

export const Route = createFileRoute("/tinhoa")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Tin hoa — Nhật ký phố hoa của Hương Ly" },
      { name: "description", content: "Tin hoa & xu hướng từ tiệm Hương Ly: mùa cúc hoạ mi, mẹo giữ hoa tươi lâu, xu hướng bó hoa vườn dại 2026." },
      { property: "og:title", content: "Tin hoa & xu hướng — Hương Ly" },
      { property: "og:description", content: "Nhật ký phố hoa: mùa hoa Hà Nội, mẹo chăm hoa và xu hướng cắm cắm gói gói mới nhất." },
    ],
  }),
  component: TinHoa,
});

function TinHoa() {
  return (
    <>
      <section className="grain bg-cream text-cream-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] opacity-70">Số 04 · Nhật ký phố hoa</p>
          <h1 className="mt-3 text-6xl md:text-7xl">Tin hoa & xu hướng</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed opacity-80">
            Mùa hoa nào đang về trên phố, cách người bán hoa giữ hoa tươi, và những dáng bó đang được yêu thích.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {posts.map((p, i) => (
            <article key={p.title} className={`group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <div className={`overflow-hidden rounded-lg ${i === 0 ? "aspect-[16/11]" : "aspect-[16/10]"}`}>
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-accent">{p.tag} · {p.date}</p>
              <h2 className={`mt-2 font-display leading-tight ${i === 0 ? "text-5xl" : "text-3xl"}`}>{p.title}</h2>
              <p className={`mt-3 text-muted-foreground ${i === 0 ? "max-w-xl text-base leading-relaxed" : "text-sm"}`}>{p.excerpt}</p>
              <Link to="/cuahang" className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-primary">
                Xem hoa theo mùa ở cửa hàng →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <p className="text-sm text-muted-foreground">Tin mới nhất được đăng tại cửa hàng và fanpage của Hương Ly mỗi tuần.</p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
