import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/shop/SiteFooter";
import { PetalFall } from "@/components/shop/PetalFall";
import { NamThangLuuDau } from "@/components/shop/NamThangLuuDau";
import { streets } from "@/lib/data";
import thuTay from "@/assets/thu-tay-chu-tiem.png";

export const Route = createFileRoute("/cauchuyen")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Câu chuyện — Hương Ly, tiệm hoa Hà Nội" },
      { name: "description", content: "Câu chuyện tiệm hoa Hương Ly: những con phố Hà Nội báo mùa bằng hoa, hành trình 2003–2026 của cửa tiệm số 17, hoa Đà Lạt, Mê Linh và Tây Tựu, giấy kraft và dây gai kiểu phố cổ." },
      { property: "og:title", content: "Câu chuyện Hương Ly" },
      { property: "og:description", content: "Nơi hoa thì thầm — câu chuyện của một tiệm hoa nhỏ giữa Hà Nội, từ 2003 đến hôm nay." },
    ],
  }),
  component: CauChuyen,
});

// Nhật ảnh — khung ảnh phóng sự, tỉ lệ khác nhau xếp so le như một quyển album
const gallery = [
  { src: streets[0]!.src, title: "Tiệm hoa cửa xanh", caption: "Phố cổ, chiều muộn", ratio: "aspect-[3/4]" },
  { src: streets[1]!.src, title: "Xe đạp chở mùa xuân", caption: "Hà Nội, 1992", ratio: "aspect-[4/5]" },
  { src: streets[2]!.src, title: "Chợ hoa Hàng Lược", caption: "Sương sớm, 1988", ratio: "aspect-[1/1]" },
  { src: streets[3]!.src, title: "Gánh cúc hoạ mi", caption: "Cuối thu, phố Phan Đình Phùng", ratio: "aspect-[3/4]" },
  { src: streets[4]!.src, title: "Đèn lồng sau mưa", caption: "Đêm phố cũ", ratio: "aspect-[4/3]" },
];

function CauChuyen() {
  return (
    <>
      {/* Cánh sưa trắng & lá vàng cơm nguội rơi nghiêng — phủ suốt trang */}
      <PetalFall />
      {/* Mở đầu */}
      <section className="grain bg-cream text-cream-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-xs uppercase tracking-[0.3em] opacity-70">Số 01 · Câu chuyện</p>
          <h1 className="mt-4 text-6xl leading-tight md:text-8xl">Nơi hoa <span className="font-script">thì thầm</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">
            "Mỗi bông hoa mang trong mình một câu chuyện." — và Hương Ly là nơi những câu chuyện ấy được gói tay, buộc dây gai, rồi gửi đi khắp phố.
          </p>
        </div>
      </section>

      {/* Chương 01 — chữ bên phải, tựa bên trái */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <article className="md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Chương 01 · Mùa hoa</p>
            <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">Tháng mười<br />là hoạ mi</h2>
            <blockquote className="mt-10 border-l-2 border-accent/60 pl-6 font-display text-2xl italic leading-snug text-foreground/80">
              "Sáng nào cũng có chiếc xe đạp chở cả một khu vườn đi qua cửa nhà ai đó."
            </blockquote>
          </div>
          <div className="mt-12 md:col-span-7 md:col-start-6">
            <p className="text-lg leading-[1.95] text-muted-foreground first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-foreground">
              Tháng mười, Hà Nội chuyển mình không bằng lời tuyên bố nào cả — chỉ bằng một làn gió. Gió se se nơi đầu môi, mang theo mùi lá đã queo qua mấy trận mưa tháng chín, và rồi, như một thói quen nghìn năm, cúc hoạ mi trắng muốt lại tràn xuống các con phố. Không ai bán rao. Chỉ những gánh hoa gập ghềnh qua khúc cua, những giỏ tre treo trước cửa tiệm bách hóa, và tiếng xe đạp leng keng vọng vào những con ngõ còn ướt sương.
            </p>
            <p className="mt-6 text-[15px] leading-[1.95] text-muted-foreground">
              Hồi ấy, chợ hoa Hàng Lược mở từ lúc trời còn đen. Người ta thắp đèn dầu, ngồi chồm hổm trên nền đá, đợi xe hoa từ Gia Lâm và Từ Sơn vượt cầu sang. Sương đọng trên cánh cúc thành từng hạt li ti, ai mua hoa buổi sớm thường mang về cả một vạt sương — thứ sương mà đến trưa gọi là mơ mộng, buổi sáng gọi là thường ngày.
            </p>
            <p className="mt-6 text-[15px] leading-[1.95] text-muted-foreground">
              Chúng tôi tin rằng thành phố này đáng được nhớ theo mùa hoa, chứ không phải theo bảng giá. Tháng mười là hoạ mi. Tháng ba là loa kèn tím lan xuống Phan Đình Phùng. Tháng sáu là phượng vĩ đốt đỏ cả một góc sân trường. Hương Ly mở ra để giữ lấy cái lịch ấy — cái lịch mà không nhà xuất bản nào in, nhưng cả thành phố đều biết đọc.
            </p>
          </div>
        </article>
      </section>

      {/* Chương 02 — tựa bên phải, chữ bên trái, đệm rộng */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <article className="md:grid md:grid-cols-12 md:gap-10">
            <div className="mt-12 md:col-span-7">
              <p className="text-[15px] leading-[1.95] text-muted-foreground first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-accent">
                Người ta đến với hoa bao giờ cũng vì một điều gì đó chưa nói nổi. Có người đứng rất lâu trước quầy, chọn rồi lại bỏ, cuối cùng chỉ xin một nhánh hoạ mi. Có người gọi điện, giọng run run, nhờ gói một bó hồng đưa đến bệnh viện Bạch Mai trước sáu giờ chiều. Hoa ở đây không phải món hàng — hoa là cái cớ để con người đến gần nhau hơn một chút.
              </p>
              <p className="mt-6 text-[15px] leading-[1.95] text-muted-foreground">
                Hương Ly sinh ra từ những buổi sáng như thế. Ngày đầu tiệm chỉ có một chiếc bàn gỗ, vài cuộn giấy kraft và một thùng dây gai. Nhưng quy tắc thì không đổi từ đó đến giờ: hoa cắt sáng nào bán hoa hôm ấy, ai dặn câu gì tiệm viết câu ấy lên tấm thiệp bằng bút mực xanh, và không bao giờ hỏi "tặng ai" — vì có những lời muốn nói, người mua đã chọn cách trao đi ngấm ngầm.
              </p>
              <blockquote className="mt-10 pl-6 font-display text-3xl italic leading-snug md:pl-12">
                "Hoa là cái cớ để con người đến gần nhau hơn một chút."
              </blockquote>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:pl-6">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Chương 02 · Khởi nguồn</p>
              <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">Một lời<br /><span className="font-script text-6xl md:text-7xl">muốn nói</span></h2>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Cảm ơn. Xin lỗi. Nhớ thương. Hoặc chỉ là: "hôm nay trời đẹp quá." Bốn câu ấy đã gói thành hơn chục ngàn bó hoa kể từ năm tiệm mở cửa.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Chương 03 — chợ đầu mối Long Biên và những nhà vườn */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <article className="md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5 md:pr-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Chương 03 · Nguồn hoa</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.15] md:text-5xl md:text-6xl">
              Sương sớm đầu mối<br />
              <span className="font-script text-5xl md:text-7xl">và những nhà vườn</span>
            </h2>
            <div className="mt-10 rounded-lg border border-border/60 bg-card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Nhật ký cắt hoa</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                <li className="flex justify-between border-b border-border/40 pb-3"><span>Chợ Long Biên khép phiên</span><span className="font-display text-lg">3 giờ sáng</span></li>
                <li className="flex justify-between border-b border-border/40 pb-3"><span>Đà Lạt — Hà Nội</span><span className="font-display text-lg">1.300 cây số</span></li>
                <li className="flex justify-between border-b border-border/40 pb-3"><span>Mê Linh, Tây Tựu — phố Ngũ Nhạc</span><span className="font-display text-lg">35 cây số</span></li>
                <li className="flex justify-between"><span>Cắt gốc lại trước khi giao</span><span className="font-display text-lg">Luôn luôn</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 md:col-span-6 md:col-start-7">
            <p className="text-[15px] leading-[1.95] text-muted-foreground">
              Đêm nào ban quản lý chợ đầu mối Long Biên cũng thức cùng một thứ ánh sáng vàng vọt. Từ lúc mặt trăng còn treo trên sông Hồng, những xe giường lạnh đã rời cao nguyên — hoa từ những nhà kính Đà Lạt, nơi sương đêm đậu trên mái kính se lạnh như vết pò trên da tay — men hàng trăm cây số để kịp giờ chợ. Ở đầu kia Hà Nội, nhà vườn Mê Linh và Tây Tựu chở cúc, ly, lay ơn xuống bằng xe tải nhỏ, gốc hoa còn ướt đẫm phù sa cổ của đồng bằng sông Hồng.
            </p>
            <p className="mt-6 text-[15px] leading-[1.95] text-muted-foreground">
              Chúng tôi chọn hoa ngay tại chợ, theo đúng nghĩa đen: soi từng cành dưới bóng đèn chợ, bốc từng thùng ngay trên thùng xe. Hoa không qua tay trung gian nào — từ vườn đến chợ, từ chợ đến bàn gói của tiệm, tất cả gói gọn trong một đêm. Sáng hôm sau, khi Hà Nội vừa thức, hoa đã được cắt gốc lại lần nữa, ngâm nước sạch có hoá chất giữ tươi đúng liều.
            </p>
            <p className="mt-6 text-[15px] leading-[1.95] text-muted-foreground">
              Rồi hoa được bọc giấy kraft và buộc dây gai — đúng kiểu người phố cổ vẫn làm, thô một chút, thật một chút. Chúng tôi không thích giấy bóng lấp lánh; hoa đẹp thì không cần lấp lánh che.
            </p>
          </div>
        </article>
      </section>

      {/* Chương 04 — Số 17 phố Ngũ Nhạc */}
      <section className="grain bg-cream text-cream-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] opacity-70">Chương 04 · Hôm nay</p>
            <h2 className="mt-3 font-display text-5xl leading-tight md:text-7xl">Số 17<br />phố Ngũ Nhạc</h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-[15px] leading-[1.95] opacity-80">
              Cửa hàng duy nhất nằm ở Vĩnh Hưng, Hoàng Mai — một con phố nhỏ mà buổi sáng thơm mùi cúc. Cửa mở từ bảy giờ sáng, khi sương còn trên cánh cúc, đến chín giờ đêm, khi những bó hoa cuối cùng đã được trao tận tay.
            </p>
            <p className="mt-6 text-[15px] leading-[1.95] opacity-80">
              Ghé nhâm nhi một chén trà, xem tiệm gói hoa, rồi cứ tự nhiên kể câu chuyện của mình. Hoa ở đây luôn có sẵn một chỗ cho người đang cần nói điều gì đó.
            </p>
            <Link to="/cuahang" className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm text-primary-foreground transition hover:bg-primary/90">
              Xem hoa đang có hôm nay →
            </Link>
          </div>
        </div>
      </section>

      {/* Nhật ảnh — album so le kiểu phóng sự phim Hà Nội xưa */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Nhật ảnh · Phố hoa Hà Nội xưa</p>
          <h2 className="mt-3 max-w-2xl text-5xl leading-tight">Mùa được báo bằng hoa</h2>
          <div className="mt-14 columns-2 gap-6 md:columns-3 [&>figure]:mb-8">
            {gallery.map((g, i) => (
              <figure key={g.title} className={`group break-inside-avoid ${i % 2 === 1 ? "md:mt-12" : ""}`}>
                <div className={`overflow-hidden rounded-lg ${g.ratio}`}>
                  <img src={g.src} alt={g.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="mt-3">
                  <p className="font-display text-xl">{g.title}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{g.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Lời khép trang cũ — giữ lại như một dừng chân trước dòng thời gian */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="mx-auto max-w-3xl font-display text-4xl italic leading-snug md:text-5xl">
          "Hoa cắt mỗi sáng,<br />gói tay cho người mình thương."
        </p>
        <Link
          to="/cuahang"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm text-primary-foreground transition hover:bg-primary/90"
        >
          Xem hoa đang có hôm nay →
        </Link>
      </section>

      {/* Dòng thời gian — năm tháng lưu dấu của cửa tiệm */}
      <NamThangLuuDau />

      {/* Khép lại trang — bức thư tay của chủ tiệm, trên nền giấy kraft bạc màu */}
      <section data-petal-end className="grain relative bg-cream text-cream-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="md:grid md:grid-cols-12 md:items-center md:gap-14">
            <div className="md:col-span-5">
              <figure className="mx-auto max-w-md rotate-[-2.5deg] rounded-lg border border-border/40 bg-card p-4 shadow-[0_30px_60px_-25px_oklch(0.05_0.02_160/60%)] transition-transform duration-700 hover:rotate-0 md:max-w-none">
                <img
                  src={thuTay}
                  alt="Bức thư tay của chủ tiệm Hương Ly viết cho khách"
                  loading="lazy"
                  className="w-full rounded"
                />
                <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Thư tay · Giữ trong sổ của tiệm
                </figcaption>
              </figure>
            </div>
            <div className="mt-16 text-center md:col-span-6 md:col-start-7 md:mt-0 md:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Lời nhắn cuối · Bức thư năm xưa
              </p>
              <blockquote className="mt-8 font-display text-3xl italic leading-[1.6] md:text-4xl">
                "Mười năm...<br />
                một tiệm hoa nhỏ,<br />
                vẫn nở rộ giữa phố quen..."
              </blockquote>
              <p className="mt-8 max-w-xl text-[15px] leading-[1.95] text-muted-foreground">
                Nét mực trên trang giấy đã bạc màu theo năm tháng, nhưng câu thì thầm ấy vẫn nằm nguyên trên bàn gói của tiệm, như một lời hẹn: dù phố đổi thay, mỗi sáng vẫn có một chỗ dành cho ai đang cần trao đi điều gì đó.
              </p>
              <p className="mt-10 font-script text-4xl text-accent">— Hương Ly —</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
