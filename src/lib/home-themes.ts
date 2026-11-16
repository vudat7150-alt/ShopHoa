import { products, type Product, type Species } from "./data";

export type Season = "xuan" | "ha" | "thu" | "dong";
export const SEASONAL_THEMES: Record<Season, { label: string; name: string; months: [number, number]; ambient: "blossoms" | "sunlight" | "leaves" | "mist"; productIds: string[] }> = {
  xuan: { label: "Mùa Xuân", name: "Xuân", months: [2, 5], ambient: "blossoms", productIds: ["bo-tulip-toi-gian", "bo-cat-tuong", "bo-hong-kem-dau", "bo-baby-khong-lo"] },
  ha: { label: "Mùa Hạ", name: "Hạ", months: [5, 8], ambient: "sunlight", productIds: ["bo-huong-duong", "bo-tu-cau", "bo-cuc-tana", "bo-cat-tuong"] },
  thu: { label: "Mùa Thu", name: "Thu", months: [8, 11], ambient: "leaves", productIds: ["bo-mua-thu", "bo-hong-do", "bo-hong-kem-dau", "bo-cuc-tana"] },
  dong: { label: "Mùa Đông", name: "Đông", months: [11, 2], ambient: "mist", productIds: ["bo-ly-kep", "bo-hong-do", "bo-baby-khong-lo", "bo-tulip-toi-gian"] },
};
export const SCENT_GROUPS = [
  { id: "ngat", title: "Hương Thơm Ngát", flowers: "Hồng cổ, Ly kép, Dạ lan hương", species: ["Hoa hồng", "Hoa ly"] as Species[] },
  { id: "diu", title: "Thoang Thoảng Dịu", flowers: "Cúc họa mi, Thanh liễu, Cát tường", species: ["Hoa cúc", "Hoa thanh liễu", "Hoa cát tường"] as Species[] },
  { id: "tinh-khiet", title: "Sắc Hoa Tinh Khiết", flowers: "Tulip, Hướng dương, Cẩm tú cầu", species: ["Tulip", "Hoa hướng dương", "Hoa cẩm tú cầu"] as Species[] },
  { id: "hoai-niem", title: "Sắc Màu Hoài Niệm", flowers: "Tông trầm ấm, giấy Kraft cổ điển", species: [] as Species[] },
] as const;
// Editorial preview selection; the catalogue has no verified arrival timestamps yet.
export const NEW_ARRIVAL_PRODUCTS = products.filter(product => product.category === "Hoa bó").slice(0, 10);
export function matchesScent(product: Product, scent?: string) {
  if (!scent) return true;
  if (scent === "hoai-niem") return product.category === "Hoa bó" && /kraft|mùa thu/i.test(product.desc);
  const group = SCENT_GROUPS.find(g => g.id === scent);
  return !group || (product.category === "Hoa bó" && product.species.some(s => group.species.includes(s)));
}
export const seasonalProducts = (season: Season) => SEASONAL_THEMES[season].productIds.flatMap(id => {
  const product = products.find(p => p.id === id);
  return product ? [product] : [];
});
export function seasonCountdown(season: Season, now: Date) {
  const endMonth = SEASONAL_THEMES[season].months[1];
  let end = new Date(Date.UTC(now.getUTCFullYear(), endMonth, 1) - 7 * 3600000);
  if (end <= now) end = new Date(Date.UTC(now.getUTCFullYear() + 1, endMonth, 1) - 7 * 3600000);
  const seconds = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
  return { days: Math.floor(seconds / 86400), hours: Math.floor(seconds % 86400 / 3600), minutes: Math.floor(seconds % 3600 / 60), seconds: seconds % 60 };
}