import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Leaf, RotateCcw, Send, Truck } from "lucide-react";
import { streets } from "@/lib/data";
import { BrandLockup } from "@/components/shop/BrandLogo";
import { paymentBadges, shippingBadges } from "@/components/shop/payment-logos";

const shopColumns = [
  {
    title: "Sản phẩm",
    links: [
      { label: "Hoa bó", to: "/cuahang" },
      { label: "Lẵng & giỏ hoa", to: "/cuahang" },
      { label: "Hoa cưới & xe hoa", to: "/cuahang" },
      { label: "Hoa phụ liệu", to: "/cuahang" },
      { label: "Từ điển hoa", to: "/ynghiahoa" },
      { label: "Tin hoa", to: "/tinhoa" },
    ],
  },
  {
    title: "Chính sách và hỗ trợ",
    links: [
      { label: "Chính sách giao nhận", to: "/chinh-sach/giao-nhan" },
      { label: "Đổi hoa nếu héo trong 24 giờ", to: "/chinh-sach/doi-hoa" },
      { label: "Đặt hoa trước theo dịp", to: "/ho-tro/dat-truoc" },
      { label: "Hướng dẫn chọn hoa", to: "/ho-tro/chon-hoa" },
      { label: "Hướng dẫn chăm hoa", to: "/ho-tro/cham-hoa" },
      { label: "Chính sách thanh toán", to: "/chinh-sach/thanh-toan" },
      { label: "Chính sách bảo mật", to: "/chinh-sach/bao-mat" },
      { label: "Giải quyết khiếu nại", to: "/ho-tro/khieu-nai" },
    ],
  },
];

/* Hai hàng từ khóa gọn gàng thay cho dải loài hoa dài loạt */
const speciesKeywords = [
  { label: "Hoa hồng", loai: "Hoa hồng" },
  { label: "Hoa ly", loai: "Hoa ly" },
  { label: "Cẩm tú cầu", loai: "Hoa cẩm tú cầu" },
  { label: "Hoa cúc", loai: "Hoa cúc" },
  { label: "Hoa rơn", loai: "Hoa đồng tiền" },
  { label: "Hướng dương", loai: "Hoa hướng dương" },
  { label: "Tulip", loai: "Tulip" },
  { label: "Hoa baby", loai: "Hoa baby" },
];
const occasionKeywords = ["Sinh nhật", "8/3", "20/10", "20/11", "Valentine", "Chúc mừng, khai trương", "Hoa cưới"];

const serviceRow = [
  { icon: Leaf, title: "Hoa tươi mỗi sáng", text: "Cắt gốc lại trước khi giao" },
  { icon: Truck, title: "Giao trong ngày", text: "Nội thảnh, gọi báo trước" },
  { icon: RotateCcw, title: "Đổi hoa dễ dàng", text: "Nếu héo trong 24 giờ" },
  { icon: Clock, title: "Hỗ trợ 7h00 đến 21h00", text: "Mỗi ngày, kể cả lễ" },
];

/** Gạch chân hiện tức thì khi hover — không transition, không độ trễ;
    chữ và gạch chân cùng bật màu kem đồng thời, cách baseline một khoảng */
const linkUnderline =
  "relative text-sm text-muted-foreground hover:text-cream " +
  "after:absolute after:left-0 after:top-full after:mt-1.5 after:hidden after:h-px after:w-full " +
  "after:bg-cream/90 hover:after:block";

const mapsQuery = encodeURIComponent("17 phố Ngũ Nhạc, Vĩnh Hưng, Hoàng Mai, Hà Nội");
const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export function SiteFooter() {
  return (
    <footer id="lien-he" className="relative isolate overflow-hidden border-t border-border">
      <img src={streets[0]!.src} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10 blur-md" />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        {/* Ba cột chính: sản phẩm · chính sách · liên hệ */}
        <div className="grid gap-12 md:grid-cols-3">
          {shopColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-display text-xl">{col.title}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="transition hover:text-primary">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <p className="font-display text-xl">Liên hệ</p>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li>17 phố Ngũ Nhạc, Vĩnh Hưng, Hoàng Mai, Hà Nội</li>
              <li>Đặt hoa: 09xx xxx xxx</li>
              <li>Email: lienhe@huongly.vn</li>
              <li>Mở cửa 7h00 đến 21h00 mỗi ngày</li>
            </ul>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-xs overflow-hidden rounded-sm border border-input"
              aria-label="Nhận tin khuyến mãi"
            >
              <label className="sr-only" htmlFor="footer-email">Email của bạn</label>
              <input id="footer-email" type="email" placeholder="Email của bạn" className="h-10 w-full bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground/60" />
              <button type="submit" className="shrink-0 bg-primary px-4 text-sm text-primary-foreground transition hover:bg-primary/90">Đồng ý</button>
            </form>
            <div className="mt-4 flex gap-2">
              {[Facebook, Instagram, Send].map((Icon, i) => (
                <a key={i} href="#" aria-label={["Facebook", "Instagram", "Telegram"][i]} className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hai hàng từ khóa: hoa theo loài · hoa theo dịp */}
        <div className="mt-14 space-y-3 border-y border-border py-6">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <span className="shrink-0 text-sm text-foreground">Hoa theo loài</span>
            {speciesKeywords.map((s) => (
              <Link key={s.label} to="/cuahang" search={{ loai: s.loai }} className={linkUnderline}>{s.label}</Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <span className="shrink-0 text-sm text-foreground">Hoa theo dịp</span>
            {occasionKeywords.map((o) => (
              <Link key={o} to="/cuahang" className={linkUnderline}>{o}</Link>
            ))}
          </div>
        </div>

        {/* Bốn điểm hứa dịch vụ — icon viền mảnh, cùng nét với vòng tròn bao ngoài */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceRow.map((s) => (
            <div key={s.title} className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/50 text-primary">
                <s.icon className="h-5 w-5" strokeWidth={1.4} />
              </span>
              <div>
                <p className="text-sm">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Thanh toán & vận chuyển — logo thương hiệu trên thẻ trắng đồng cỡ */}
        <div className="mt-10 grid gap-8 border-y border-border py-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Thanh toán</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {paymentBadges.map((b, i) => (
                <span key={i}>{b}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Vận chuyển</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {shippingBadges.map((b, i) => (
                <span key={i}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Thương hiệu & bản đồ */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <BrandLockup tone="dark" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Cửa hàng hoa tươi của Hương Ly có hoa bó, lẵng hoa, hoa cưới, hoa xe hoa đến hoa cành lẻ.
              Hoa nhập từ vườn Đà Lạt & Mê Linh, cắt gốc lại mỗi sáng và gói tay bằng giấy kraft, dây gai kiểu người phố cổ.
            </p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm text-primary-foreground transition hover:bg-primary/90"
            >
              Chỉ đường trên Google Maps
            </a>
          </div>
          <figure>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title="Bản đồ chỉ đường tới Shop Hoa Hương Ly"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
            </div>
            <figcaption className="mt-2 rounded-b-lg border border-t-0 border-border bg-card px-4 py-3">
              <p className="font-display text-lg">Cửa hàng duy nhất tại Hà Nội</p>
              <p className="text-xs text-muted-foreground">17 phố Ngũ Nhạc, Vĩnh Hưng, Hoàng Mai, Hà Nội · Mở cửa 7h – 21h</p>
            </figcaption>
          </figure>
        </div>

        {/* Dòng bản quyền */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© 2026 Shop Hoa Hương Ly. Giữ bản quyền nội dung.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link to="/chinh-sach/dieu-khoan" className="transition hover:text-primary">Điều khoản sử dụng</Link>
            <Link to="/chinh-sach/bao-mat" className="transition hover:text-primary">Chính sách bảo mật</Link>
            <Link to="/chinh-sach/ban-hoa" className="transition hover:text-primary">Chính sách bán hoa</Link>
            <Link to="/chinh-sach/giao-nhan" className="transition hover:text-primary">Chính sách giao nhận</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
