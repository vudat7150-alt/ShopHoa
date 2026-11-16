import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/lib/cart";
import { formatVnd, type Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SHOP_CATEGORIES, productWithVariant } from "@/lib/shop-catalog";

// Hộp xem nhanh kiểu sàn thương mại: album nhiều ảnh — thẻ 3D cho ảnh bìa,
// ảnh toàn cảnh (xe hoa, cấu trúc trang trí) chỉ mở trong album này
export function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const [variantId, setVariantId] = useState<string>();

  // Đổi sản phẩm → quay về ảnh đầu tiên của album
  useEffect(() => { setActive(0); setVariantId(undefined); setQty(1); }, [product?.id]);
  const chosen = product ? productWithVariant(product, variantId) : null;

  const gallery = product?.gallery?.length ? product.gallery : product ? [product.image] : [];
  const mainImage = gallery[Math.min(active, gallery.length - 1)] ?? product?.image;
  const flatPhoto = !!product?.thumb; // xe hoa: ảnh toàn cảnh phủ khung thay vì bó hoa "bật" ra
  const shopCategory = product && "shop" in product ? SHOP_CATEGORIES.find(c => c.slug === product.shop) : undefined;
  const flat = shopCategory ? !shopCategory.popout : false;

  return (
    <Dialog open={!!product} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className={`max-w-3xl border-border bg-popover max-h-[90dvh] overflow-y-auto ${shopCategory ? "shop-surface" : ""}`}>
        {product && (
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className={flat ? "pt-4" : "tilt-scene pt-10"}>
                <div className={flat ? "shop-detail-photo relative aspect-[3/4] overflow-hidden rounded-sm" : "tilt-card aspect-[3/4]"}>
                  {!flat && <div className="tilt-bg grain" />}
                  <img
                    src={mainImage}
                    alt={product.name}
                    width={1024}
                    height={1024}
                    className={flat ? "h-full w-full object-contain" : flatPhoto ? "tilt-photo" : "tilt-pop"}
                  />
                </div>
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 flex gap-2" role="listbox" aria-label="Ảnh sản phẩm">
                  {gallery.map((src, i) => (
                    <Button variant="ghost"
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Xem ảnh ${i + 1}`}
                      className={`h-16 w-16 shrink-0 overflow-hidden rounded-sm border transition ${i === active ? "border-primary ring-1 ring-primary" : "border-border opacity-70 hover:opacity-100"}`}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </Button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{shopCategory?.name ?? product.category}</p>
              <DialogTitle className="mt-2 font-display text-4xl font-medium">{product.name}</DialogTitle>
              <p className="mt-2 text-xl text-primary" aria-live="polite">{formatVnd(chosen?.price ?? product.price)}</p>
              <p className="mt-4 text-muted-foreground">{product.desc}</p>
              {product.variants?.length && <fieldset className="mt-5"><legend className="mb-2 text-sm">Số tai trên cành</legend><div className="flex flex-wrap gap-2">{product.variants.map((variant, i) => <Button key={variant.id} variant="outline" aria-pressed={(variantId ?? product.variants?.[0]?.id) === variant.id} className="variant-choice" onClick={() => setVariantId(variant.id)}>{variant.label}<span className="text-xs">{i === 0 ? "Giá gốc" : `+${formatVnd(variant.surcharge)}`}</span></Button>)}</div></fieldset>}
              <div className="mt-6 flex items-center gap-3">
                <input type="number" min={1} value={qty} onChange={(e) => setQty(Math.max(1, +e.target.value))} className="h-11 w-20 rounded-sm border border-input bg-transparent px-3" aria-label="Số lượng" />
                <Button variant="boutique" onClick={() => { if (!chosen) return; add(chosen, qty); onClose(); setQty(1); }} className="h-11 flex-1 rounded-sm text-sm font-medium">
                  Thêm vào giỏ
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{flat ? "Nhắn tiệm để xác nhận màu sắc, kích thước và tình trạng hàng." : "Kèm thiệp viết tay miễn phí · Đổi hoa nếu héo trong 24 giờ"}</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
