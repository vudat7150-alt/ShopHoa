import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { formatVnd } from "@/lib/data";
import { SHOP_CATEGORIES, type ShopProduct } from "@/lib/shop-catalog";

export function ShopProductCard({ product, onOpen, onAdd }: { product: ShopProduct; onOpen: () => void; onAdd: () => void }) {
  const category = SHOP_CATEGORIES.find(c => c.slug === product.shop);
  return <article className={`shop-product ${category?.popout ? "shop-product-pop" : "shop-product-flat"}`}>
    <Button variant="ghost" className="shop-product-photo" onClick={onOpen} aria-label={`Xem ${product.name}`}>
      <img src={product.thumb ?? product.image} alt={product.name} width={384} height={384} loading="lazy" />
    </Button>
    <div className="shop-product-info">
      <p className="shop-product-label">{category?.label}</p>
      <h3><Button variant="link" className="shop-product-name" onClick={onOpen}>{product.name}</Button></h3>
      <p className="shop-product-price">{formatVnd(product.price)}</p>
      <Button variant="boutique" className="w-full" onClick={product.variants?.length ? onOpen : onAdd} aria-label={product.variants?.length ? `Chọn loại ${product.name}` : `Thêm ${product.name} vào giỏ`}><Plus size={15} />{product.variants?.length ? "Chọn loại" : "Thêm vào giỏ"}</Button>
    </div>
  </article>;
}