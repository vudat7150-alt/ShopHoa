import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SiteFooter } from "@/components/shop/SiteFooter";
import { categories, streets } from "@/lib/data";

export const Route = createFileRoute("/lienhe")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Liên hệ — Đặt hoa tại tiệm Hương Ly, Hà Nội" },
      { name: "description", content: "Liên hệ tiệm hoa Hương Ly: 17 phố Ngũ Nhạc, Vĩnh Hưng, Hoàng Mai, Hà Nội. Mở cửa 7h–21h mỗi ngày, giao trong ngày nội thành." },
      { property: "og:title", content: "Liên hệ tiệm hoa Hương Ly" },
      { property: "og:description", content: "Ghé tiệm, gọi điện hoặc gửi lời nhắn — Hương Ly gói hoa cho bạn mỗi sáng." },
    ],
  }),
  component: LienHe,
});

function LienHe() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState<string>(categories[0]!);
  const [msg, setMsg] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Đã gửi lời nhắn!", { description: "Hương Ly sẽ gọi lại cho bạn trong giờ mở cửa. Cảm ơn bạn!" });
    setName("");
    setPhone("");
    setMsg("");
    setTopic(categories[0]!);
  };

  return (
    <>
      <section className="grain bg-cream text-cream-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] opacity-70">Số 05 · Liên hệ</p>
          <h1 className="mt-3 text-6xl md:text-7xl">Ghé tiệm, hoặc nhắn trước</h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed opacity-80">
            Hoa cắt mỗi sáng — đặt trước 15 giờ để nhận hoa trong ngày nội thành.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Thông tin tiệm */}
          <div>
            <div className="overflow-hidden rounded-lg">
              <img src={streets[0]!.src} alt="Tiệm hoa Hương Ly" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="mt-8 space-y-3 text-[15px] leading-relaxed">
              <p><span className="text-xs uppercase tracking-[0.25em] text-accent">Địa chỉ: </span>17 phố Ngũ Nhạc, Vĩnh Hưng, Hoàng Mai, Hà Nội</p>
              <p><span className="text-xs uppercase tracking-[0.25em] text-accent">Đặt hoa: </span>09xx xxx xxx</p>
              <p><span className="text-xs uppercase tracking-[0.25em] text-accent">Email: </span>lienhe@huongly.vn</p>
              <p><span className="text-xs uppercase tracking-[0.25em] text-accent">Giờ mở cửa: </span>7h00 – 21h00, mỗi ngày</p>
              <p className="text-sm text-muted-foreground">Đổi hoa nếu héo trong 24 giờ · Giao trong ngày nội thành</p>
            </div>
          </div>

          {/* Form gửi lời nhắn */}
          <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-4xl">Gửi lời nhắn cho tiệm</h2>
            <p className="mt-2 text-sm text-muted-foreground">Điền vài dòng — Hương Ly sẽ gọi lại để chốt hoa và giờ giao.</p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="lh-ten" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Họ tên</label>
                <input id="lh-ten" required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 h-11 w-full rounded-sm border border-input bg-transparent px-3" />
              </div>
              <div>
                <label htmlFor="lh-dt" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Số điện thoại</label>
                <input id="lh-dt" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 h-11 w-full rounded-sm border border-input bg-transparent px-3" />
              </div>
              <div>
                <label htmlFor="lh-chu-de" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Bạn quan tâm đến</label>
                <select id="lh-chu-de" value={topic} onChange={(e) => setTopic(e.target.value)} className="mt-1 h-11 w-full rounded-sm border border-input bg-transparent px-3">
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div>
                <label htmlFor="lh-loi-nhan" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Lời nhắn</label>
                <textarea id="lh-loi-nhan" rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Ví dụ: bó hồng cho mẹ, giao sáng thứ bảy…" className="mt-1 w-full rounded-sm border border-input bg-transparent px-3 py-2" />
              </div>
            </div>
            <button type="submit" className="mt-6 h-12 w-full rounded-sm bg-primary text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
              Gửi lời nhắn
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
