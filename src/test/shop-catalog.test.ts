import { describe, expect, it } from "vitest";
import { flowerGuide, speciesForGuide } from "@/lib/data";
import { SHOP_CATEGORIES, SHOP_FILTERS, shopProducts, inPriceTier, filterShopProducts, FRESH_PRICES, productWithVariant, relatedFlowerProducts, shopFilterOptions } from "@/lib/shop-catalog";

describe("Shop catalogue rules", () => {
  it("has the five requested categories in order", () => {
    expect(SHOP_CATEGORIES.map(c => c.slug)).toEqual(["hoa-canh-le", "hoa-bo-nghe-thuat", "lang-hoa-ke-chuc-mung", "hoa-kho-hoai-niem", "nen-sap-thom-phu-kien"]);
  });
  it("limits pop-out to bouquets and congratulatory arrangements", () => {
    expect(SHOP_CATEGORIES.filter(c => c.popout).map(c => c.slug)).toEqual(["hoa-bo-nghe-thuat", "lang-hoa-ke-chuc-mung"]);
  });
  it("retains the other groups and expands single stems", () => {
    for (const c of SHOP_CATEGORIES) { const count = shopProducts.filter(p => p.shop === c.slug).length; expect(count).toBeGreaterThanOrEqual(12); if (c.slug !== "hoa-canh-le") expect(count).toBeLessThanOrEqual(15); }
    expect(shopProducts.filter(p => p.shop === "nen-sap-thom-phu-kien")).toHaveLength(15);
    expect(new Set(shopProducts.map(p => p.id)).size).toBe(shopProducts.length);
  });
  it("single stems are individual cành lẻ, not bouquet inventory", () => {
    const stems = shopProducts.filter(p => p.shop === "hoa-canh-le");
    expect(stems).toHaveLength(22);
    expect(stems.every(p => p.category === "Hoa cành lẻ")).toBe(true);
    expect(stems.find(p => p.id === "hong-do-chuc")?.price).toBe(25000);
  });
  it("honors fresh flower price boundaries", () => {
    expect(inPriceTier(99999, FRESH_PRICES[0])).toBe(true);
    expect(inPriceTier(100000, FRESH_PRICES[0])).toBe(false);
    expect(inPriceTier(100000, FRESH_PRICES[1])).toBe(true);
    expect(inPriceTier(200000, FRESH_PRICES[1])).toBe(true);
    expect(inPriceTier(300000, FRESH_PRICES[2])).toBe(true);
    expect(inPriceTier(300000, FRESH_PRICES[3])).toBe(false);
    expect(inPriceTier(300001, FRESH_PRICES[3])).toBe(true);
  });
  it("honors arrangement price boundaries", () => {
    const tiers = SHOP_FILTERS["lang-hoa-ke-chuc-mung"].prices;
    expect(inPriceTier(149999, tiers[0])).toBe(false);
    expect(inPriceTier(150000, tiers[0])).toBe(true);
    expect(inPriceTier(300000, tiers[0])).toBe(true);
    expect(inPriceTier(500000, tiers[1])).toBe(true);
    expect(inPriceTier(599999, tiers[2])).toBe(false);
    expect(inPriceTier(600000, tiers[2])).toBe(true);
  });
  it("honors dried flower price boundaries", () => {
    const tiers = SHOP_FILTERS["hoa-kho-hoai-niem"].prices;
    expect(inPriceTier(150000, tiers[0])).toBe(false);
    expect(inPriceTier(150000, tiers[1])).toBe(true);
    expect(inPriceTier(300000, tiers[1])).toBe(true);
    expect(inPriceTier(300000, tiers[2])).toBe(false);
    expect(inPriceTier(300001, tiers[2])).toBe(true);
  });
  it("honors accessory price boundaries", () => {
    const tiers = SHOP_FILTERS["nen-sap-thom-phu-kien"].prices;
    expect(inPriceTier(100000, tiers[0])).toBe(false);
    expect(inPriceTier(100000, tiers[1])).toBe(true);
    expect(inPriceTier(250000, tiers[1])).toBe(true);
    expect(inPriceTier(250000, tiers[2])).toBe(false);
    expect(inPriceTier(250001, tiers[2])).toBe(true);
  });
  it("combines attributes with OR within groups and AND across groups", () => {
    const items = shopProducts.filter(p => p.shop === "hoa-canh-le");
    expect(filterShopProducts(items, { flower: ["Hoa hồng"], color: ["Đỏ", "Hồng"] }, FRESH_PRICES[0]).map(p => p.id)).toEqual(["hong-do-chuc", "canh-hong-phan"]);
    expect(filterShopProducts(items, { flower: ["Hoa hồng"], color: ["Xanh"] })).toHaveLength(0);
  });
});
describe("Expanded stems and lily selection", () => {
  it.each([
    ["canh-cuc-vang", 15000], ["canh-don-do", 18000], ["canh-don-vang", 18000], ["canh-don-hong", 18000],
    ["canh-ly-vang", 45000], ["canh-ly-do", 50000], ["canh-ly-kep", 65000], ["canh-loa-ken", 25000],
    ["canh-sen-hong", 30000], ["canh-sen-trang", 30000],
  ])("prices %s at %i", (id, price) => {
    expect(shopProducts.find(p => p.id === id)?.price).toBe(price);
  });
  it.each([["canh-ly-trang", 65000, 80000], ["canh-ly-vang", 45000, 60000], ["canh-ly-do", 50000, 65000], ["canh-ly-kep", 65000, 85000]])("keeps %s variants distinct with correct prices", (id, base, selected) => {
    const p = shopProducts.find(p => p.id === id);
    if (!p) throw new Error("Missing lily");
    const three = productWithVariant(p, "3-tai"), five = productWithVariant(p, "5-tai");
    expect(three.price).toBe(base); expect(five.price).toBe(selected);
    expect(three.id).toBe(`${id}::3-tai`); expect(five.id).toBe(`${id}::5-tai`);
    expect(productWithVariant(p).price).toBe(base);
  });
  it("covers every single-stem species in the dictionary", () => {
    const guideSpecies = flowerGuide.map(f => speciesForGuide(f.name));
    for (const p of shopProducts.filter(p => p.shop === "hoa-canh-le")) for (const sp of p.species) expect(guideSpecies).toContain(sp);
  });
  it("returns real matching stems, bouquets and arrangements", () => {
    expect(relatedFlowerProducts("Hoa hồng").map(p => p.id)).toEqual(["hong-do-chuc", "canh-hong-phan", "canh-hong-kem", "bo-hong-do", "bo-hong-kem-dau", "cuoi-hong-trang", "gio-go-pastel", "hop-mica", "ke-do-dai-cat", "xe-hoa-trai-tim", "xe-hoa-ruy-bang"]);
    expect(relatedFlowerProducts("Hoa ly").map(p => p.id)).toEqual(["canh-ly-trang", "canh-ly-vang", "canh-ly-do", "canh-ly-kep", "bo-ly-kep", "lang-ly-chuc-suc-khoe", "binh-thuy-tinh"]);
    expect(relatedFlowerProducts("Hoa sen").map(p => p.id)).toEqual(["canh-sen-hong", "canh-sen-trang"]);
  });
  it("excludes supporting roses from Cát Tường and other focal bouquets", () => {
    expect(relatedFlowerProducts("Hoa hồng").map(p => p.id)).not.toContain("bo-cat-tuong");
    expect(relatedFlowerProducts("Hoa cát tường").map(p => p.id)).toContain("bo-cat-tuong");
    expect(relatedFlowerProducts("Hoa cúc").map(p => p.id)).not.toContain("bo-huong-duong");
  });
  it.each(["hoa-canh-le", "hoa-bo-nghe-thuat"] as const)("exposes new species filters for %s", slug => {
    const options = shopFilterOptions(shopProducts.filter(p => p.shop === slug), "flower", slug);
    expect(options).toEqual(expect.arrayContaining(["Hoa lay ơn", "Hoa loa kèn", "Hoa sen"]));
  });
});
