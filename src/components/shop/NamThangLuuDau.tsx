import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import y2003 from "@/assets/cua-hang-2003.png";
import y2007 from "@/assets/cua-hang-2007.png";
import y2011 from "@/assets/cua-hang-2011.png";
import y2015 from "@/assets/cua-hang-2015.png";
import y2026 from "@/assets/cua-hang-hom-nay.png";

const stops = [
  {
    year: 2003,
    src: y2003,
    title: "Cánh cửa sắt kéo đầu tiên",
    text: "Tiệm mở ngày đầu chỉ là một góc vỉa hè trước cánh cửa sắt kéo chưa sơn lại. Chưa có biển hiệu, chỉ mấy thùng phi trắng đựng cúc và ly, người đi đường tấp vào xem rồi dè dặt hỏi giá. Hoa hôm ấy bán được mấy bó, nhưng chủ tiệm về nhà ghi sổ: 'mai cắt thêm một chút nữa'.",
  },
  {
    year: 2007,
    src: y2007,
    title: "Những thùng hoa đầu giờ sáng",
    text: "Bốn năm sau, thùng phi đã xếp thành hàng ngay ngắn trước cửa. Xe hoa từ chợ về càng sớm, khách quen càng đông — người ta bắt đầu biết một tiệm hoa nhỏ ở góc phố này không bao giờ hết cúc trắng vào tháng mười. Chiếc chiếc xe đạp chở hoa ngày ấy, giờ thỉnh thoảng mới gặp.",
  },
  {
    year: 2011,
    src: y2011,
    title: "Gánh hoa giữa ngõ quen",
    text: "Tiệm đã có một dãy kệ gỗ thấp, hoa xếp theo mùa chứ không theo giá. Sáng nào cũng có tiếng chõng nhựa kéo lẹt đẹt trên nền đá, ai đó ngồi nhặt lá úng dưới gốc ly. Khách lạ đi ngang thường dừng lại chụp một tấm — bức ảnh chụp năm ấy, giờ treo ngay trên quầy.",
  },
  {
    year: 2015,
    src: y2015,
    title: "Ánh đèn vàng đầu buổi tối",
    text: "Lần đầu tiên tiệm thắp một ngọn đèn treo trước cửa, để những người tan ca muộn vẫn còn một chỗ chọn hoa. Cánh cửa sắt kéo mở nửa chừng, đèn vàng hắt xuống những thùng cúc và hoạ mi — từ xa nhìn lại, góc phố ấy như một mái ấm sáng duy nhất còn thức.",
  },
  {
    year: 2026,
    src: y2026,
    title: "Số 17 — tiệm hoa hôm nay",
    text: "Hơn hai mươi năm, tiệm vẫn ở nguyên giữa phố quen, vẫn thùng hoa trắng xếp trước cửa, vẫn bọc giấy kraft buộc dây gai. Chỉ khác một điều: giờ đây câu chuyện của tiệm được kể tiếp trên trang web này — và mỗi sáng, xe hoa vẫn về đúng giờ như lời ghi trong sổ năm 2003.",
  },
] as const;

/**
 * "NĂM THÁNG LƯU DẤU (2003 – 2026)" — trục thời gian mảnh như sợi chỉ vàng,
 * phần đã qua nhuộm vàng chạy mượt theo mốc đang chọn; ảnh tư liệu giữ đúng
 * tỉ lệ gốc, nằm gọn trong khung nhật ký như một tấm ảnh phim dán vào album.
 */
export function NamThangLuuDau() {
  const [active, setActive] = useState(4); // mở mặc định ở mốc gần nhất
  const stop = stops[active] ?? stops[0];

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">
          Hương Ly qua từng mùa hoa
        </p>
        <h2 className="mt-4 text-center font-display text-4xl font-light uppercase tracking-[0.18em] text-foreground md:text-5xl">
          Năm tháng lưu dấu
          <span className="mt-2 block text-2xl font-normal italic tracking-normal text-accent md:text-3xl">
            2003 — 2026
          </span>
        </h2>

        {/* Các đoạn nối dừng trước vòng tròn, giữ khoảng thở quanh mỗi mốc. */}
        <div className="relative mt-20 select-none px-2 md:px-10">
          <ol className="relative grid grid-cols-5 items-start">
            {stops.map((s, i) => {
              const isActive = i === active;
              const isPast = i < active;
              return (
                <li key={s.year} className="relative flex flex-col items-center">
                  {i < stops.length - 1 && (
                    <span aria-hidden="true" className="absolute left-[calc(50%+12px)] top-[5px] h-[3px] w-[calc(100%-24px)] overflow-hidden rounded-full bg-primary/25">
                      <span className={cn("block h-full bg-primary transition-[width] duration-500 ease-out motion-reduce:transition-none", i < active ? "w-full" : "w-0")} />
                    </span>
                  )}
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    aria-label={`Xem tiệm hoa năm ${s.year}`}
                    className="group relative z-10 h-auto min-h-12 flex-col gap-0 rounded-sm p-0 hover:bg-transparent focus-visible:ring-offset-4 focus-visible:ring-offset-card"
                  >
                    <span
                      className={cn(
                        "relative block size-3 shrink-0 rounded-full border-2 border-primary transition-colors duration-300 motion-reduce:transition-none",
                        isActive
                          ? "bg-primary ring-4 ring-primary/20"
                          : isPast
                            ? "bg-primary group-hover:bg-primary/80"
                            : "border-primary/60 bg-card group-hover:border-primary",
                      )}
                    />
                    <span
                      className={cn(
                        "mt-4 font-display text-2xl font-medium leading-none tracking-normal transition-colors duration-300 motion-reduce:transition-none md:text-3xl",
                        isActive ? "text-primary" : "text-foreground/80 group-hover:text-foreground",
                      )}
                    >
                      {s.year}
                    </span>
                  </Button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Khung ảnh nhật ký + ký sự đổi theo năm */}
        <div key={stop.year} className="mt-20 animate-fade-up md:grid md:grid-cols-12 md:items-center md:gap-14">
          <figure className="md:col-span-6">
            {/* Khung giấy nhật ký: viền kem mỏng, ảnh giữ nguyên tỉ lệ gốc */}
            <div className="grain rounded-lg border border-border bg-background/40 p-3 md:p-5">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={stop.src}
                  alt={`Cửa hàng Hương Ly năm ${stop.year}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover sepia-[0.28] contrast-[0.96] saturate-[0.85]"
                />
              </div>
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between px-1">
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Ảnh tư liệu · Cửa tiệm
              </span>
              <span className="font-display text-lg text-primary">{stop.year}</span>
            </figcaption>
          </figure>

          <div className="mt-12 md:col-span-5 md:col-start-8 md:mt-0">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Năm
            </p>
            <p className="mt-2 font-display text-7xl leading-none text-foreground md:text-8xl">
              {stop.year}
            </p>
            <h3 className="mt-6 font-display text-3xl italic leading-snug text-accent md:text-4xl">
              {stop.title}
            </h3>
            <p className="mt-6 text-[15px] leading-[1.95] text-muted-foreground">
              {stop.text}
            </p>
            <div className="mt-8 flex gap-2">
              {stops.map((s, i) => (
                <button
                  key={s.year}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Chuyển tới năm ${s.year}`}
                  className={cn(
                    "h-px w-10 transition-all duration-500",
                    i === active ? "bg-primary" : "bg-border hover:bg-primary/50",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
