import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./data";

export type CartLine = { product: Product; qty: number };

type CartCtx = {
  lines: CartLine[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartCtx>(() => {
    const add = (p: Product, qty = 1) => {
      setLines((ls) => {
        const f = ls.find((l) => l.product.id === p.id);
        return f
          ? ls.map((l) => (l.product.id === p.id ? { ...l, qty: l.qty + qty } : l))
          : [...ls, { product: p, qty }];
      });
      setOpen(true);
    };
    const setQty = (id: string, qty: number) =>
      setLines((ls) => (qty <= 0 ? ls.filter((l) => l.product.id !== id) : ls.map((l) => (l.product.id === id ? { ...l, qty } : l))));
    return {
      lines, open, setOpen, add, setQty,
      clear: () => setLines([]),
      count: lines.reduce((a, l) => a + l.qty, 0),
      subtotal: lines.reduce((a, l) => a + l.qty * l.product.price, 0),
    };
  }, [lines, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart phải nằm trong CartProvider");
  return c;
}
