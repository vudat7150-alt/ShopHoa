import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart";
import { formatVnd } from "@/lib/data";

export const Route = createFileRoute("/thanh-toan")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Thanh toán — Hương Ly Hoa tươi" },
      { name: "description", content: "Hoàn tất đơn hoa: người nhận, giờ giao, lời nhắn trên thiệp và phương thức thanh toán." },
      { property: "og:title", content: "Thanh toán — Hương Ly Hoa tươi" },
      { property: "og:description", content: "Hoàn tất đơn hoa của bạn tại Hương Ly." },
    ],
  }),
  component: Checkout,
});

const SHIP = 30000;

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input {...props} className="mt-1 h-11 w-full rounded-sm border border-input bg-transparent px-3 outline-none focus:border-primary" />
    </label>
  );
}

function Checkout() {
  const { lines, subtotal, clear } = useCart();
  const [done, setDone] = useState<string | null>(null);
  const [pay, setPay] = useState("cod");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone("HL" + Math.floor(100000 + Math.random() * 900000));
    clear();
  };

  if (done)
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <p className="font-script text-3xl text-accent">Cảm ơn bạn!</p>
        <h1 className="mt-3 text-5xl">Đơn hoa {done} đã được ghi nhận</h1>
        <p className="mt-4 text-muted-foreground">Hương Ly sẽ gọi xác nhận trong ít phút. (Đây là bản demo, chưa có thanh toán thật.)</p>
        <Link to="/" className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground">Về trang chủ</Link>
      </div>
    );

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-5xl">Thanh toán</h1>
      {lines.length === 0 ? (
        <p className="mt-6 text-muted-foreground">Giỏ hoa đang trống. <Link to="/" className="text-primary underline">Chọn hoa</Link></p>
      ) : (
        <form onSubmit={submit} className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-10">
            <fieldset className="grid gap-4 sm:grid-cols-2">
              <legend className="mb-4 font-display text-2xl">Người đặt</legend>
              <Field label="Họ tên" required />
              <Field label="Số điện thoại" type="tel" required />
            </fieldset>
            <fieldset className="grid gap-4 sm:grid-cols-2">
              <legend className="mb-4 font-display text-2xl">Người nhận & giao hoa</legend>
              <Field label="Tên người nhận" required />
              <Field label="SĐT người nhận" type="tel" required />
              <div className="sm:col-span-2"><Field label="Địa chỉ giao" required /></div>
              <Field label="Ngày giao" type="date" required />
              <label className="block text-sm">
                <span className="text-muted-foreground">Khung giờ</span>
                <select className="mt-1 h-11 w-full rounded-sm border border-input bg-popover px-3">
                  <option>8h – 11h</option><option>11h – 14h</option><option>14h – 17h</option><option>17h – 20h</option>
                </select>
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="text-muted-foreground">Lời nhắn trên thiệp viết tay</span>
                <textarea rows={3} className="mt-1 w-full rounded-sm border border-input bg-transparent p-3 font-script text-xl outline-none focus:border-primary" placeholder="Gửi người mình thương..." />
              </label>
            </fieldset>
            <fieldset>
              <legend className="mb-4 font-display text-2xl">Thanh toán</legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {([["cod", "Tiền mặt khi nhận"], ["bank", "Chuyển khoản"], ["momo", "Ví MoMo"]] as const).map(([v, l]) => (
                  <button type="button" key={v} onClick={() => setPay(v)} className={`rounded-sm border p-4 text-left text-sm ${pay === v ? "border-primary bg-primary/10" : "border-border"}`}>{l}</button>
                ))}
              </div>
            </fieldset>
          </div>
          <aside className="h-fit rounded-xl bg-cream p-6 text-cream-foreground lg:sticky lg:top-32">
            <h2 className="text-3xl">Đơn hoa</h2>
            <div className="mt-4 space-y-3">
              {lines.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center gap-3 text-sm">
                  <img src={product.image} alt="" className="h-14 w-14 object-contain" />
                  <span className="flex-1">{product.name} × {qty}</span>
                  <span>{formatVnd(product.price * qty)}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2 border-t border-current/20 pt-4 text-sm">
              <div className="flex justify-between"><span>Tạm tính</span><span>{formatVnd(subtotal)}</span></div>
              <div className="flex justify-between"><span>Phí giao nội thành</span><span>{formatVnd(SHIP)}</span></div>
              <div className="flex justify-between font-display text-2xl"><span>Tổng</span><span>{formatVnd(subtotal + SHIP)}</span></div>
            </div>
            <button className="mt-6 h-12 w-full rounded-sm bg-cream-foreground text-sm font-medium text-cream">Xác nhận đặt hoa</button>
          </aside>
        </form>
      )}
    </div>
  );
}
