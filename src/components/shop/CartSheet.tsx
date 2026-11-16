import { Link } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { formatVnd } from "@/lib/data";

export function CartSheet() {
  const { lines, open, setOpen, setQty, subtotal } = useCart();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col border-border bg-popover sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-3xl font-medium">Giỏ hoa của bạn</SheetTitle>
        </SheetHeader>
        <div className="flex-1 space-y-4 overflow-y-auto py-4">
          {lines.length === 0 && <p className="text-muted-foreground">Giỏ còn trống — chọn một bó hoa nhé.</p>}
          {lines.map(({ product, qty }) => (
            <div key={product.id} className="flex gap-4 border-b border-border pb-4">
              <div className="h-20 w-20 shrink-0 rounded-md bg-muted p-1">
                <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
              </div>
              <div className="flex-1">
                <p className="font-display text-lg leading-tight">{product.name}</p>
                <p className="text-sm text-primary">{formatVnd(product.price)}</p>
                <div className="mt-2 flex items-center gap-3">
                  <button aria-label="Bớt" onClick={() => setQty(product.id, qty - 1)} className="grid h-7 w-7 place-items-center rounded-full border border-border"><Minus className="h-3 w-3" /></button>
                  <span className="w-5 text-center text-sm">{qty}</span>
                  <button aria-label="Thêm" onClick={() => setQty(product.id, qty + 1)} className="grid h-7 w-7 place-items-center rounded-full border border-border"><Plus className="h-3 w-3" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4">
          <div className="flex justify-between text-sm"><span>Tạm tính</span><span className="text-primary">{formatVnd(subtotal)}</span></div>
          <Link
            to="/thanh-toan"
            onClick={() => setOpen(false)}
            className={`mt-4 block rounded-sm bg-primary py-3 text-center text-sm font-medium text-primary-foreground ${lines.length ? "" : "pointer-events-none opacity-50"}`}
          >
            Đặt hoa
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
