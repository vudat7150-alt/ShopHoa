import { Link } from "@tanstack/react-router";
import { ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SHOP_CATEGORIES } from "@/lib/shop-catalog";
import { useCart } from "@/lib/cart";
import { BrandLockup } from "@/components/shop/BrandLogo";

const navItems = [
  { label: "Câu chuyện", to: "/cauchuyen" },
  { label: "Cửa hàng", to: "/cuahang" },
  { label: "Ý nghĩa hoa", to: "/ynghiahoa" },
  { label: "Tin hoa", to: "/tinhoa" },
  { label: "Liên hệ", to: "/lienhe" },
] as const;

export function SiteHeader() {
  const { count, setOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="bg-primary/90 py-1.5 text-center text-xs text-primary-foreground">
        Hoa cắt mỗi sáng. Đặt trước 15 giờ, giao trong ngày nội thành.
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 sm:px-6">
        <Link to="/" aria-label="Hương Ly — Trang chủ" className="shrink-0">
          <BrandLockup tone="dark" />
        </Link>
        <nav className="hidden gap-7 text-sm md:flex">
          {navItems.map((item) => (
            item.to === "/cuahang" ? <div key={item.to} className="shop-nav-group">
              <Link to="/cuahang" className="flex items-center gap-1 transition hover:text-primary" activeProps={{ className: "text-primary" }}>Cửa hàng <ChevronDown size={13} /></Link>
              <div className="shop-nav-menu" aria-label="Danh mục cửa hàng">{SHOP_CATEGORIES.map(c => <Link key={c.slug} to="/cuahang/$category" params={{ category: c.slug }}>{c.name}</Link>)}</div>
            </div> : <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2"><Button variant="ghost" size="icon" className="md:hidden" aria-label={mobileOpen ? "Đóng danh mục" : "Mở danh mục"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button>
        <Button variant="outline" aria-label="Giỏ hoa" onClick={() => setOpen(true)} className="relative flex items-center gap-2 rounded-full border border-border px-2 py-2 text-sm hover:bg-foreground/10 sm:px-3">
          <ShoppingBag className="h-4 w-4" /> <span className="hidden sm:inline">Giỏ hoa</span>
          <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-xs text-accent-foreground">{count}</span>
        </Button></div>
      </div>
      {mobileOpen && <nav className="shop-mobile-menu md:hidden" aria-label="Điều hướng điện thoại">{navItems.map(item => <div key={item.to}><Link to={item.to} onClick={() => setMobileOpen(false)}>{item.label}</Link>{item.to === "/cuahang" && <div>{SHOP_CATEGORIES.map(c => <Link key={c.slug} to="/cuahang/$category" params={{ category: c.slug }} onClick={() => setMobileOpen(false)}>{c.name}</Link>)}</div>}</div>)}</nav>}
    </header>
  );
}
