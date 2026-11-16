import { describe, expect, it } from "vitest";
import { products } from "@/lib/data";
import { matchesScent, seasonalProducts, seasonCountdown, NEW_ARRIVAL_PRODUCTS } from "@/lib/home-themes";
import { reminderSchema } from "@/lib/reminder-schema";

describe("Homepage selection rules", () => {
  it("offers 8–10 existing bouquets in the fresh-arrival rail", () => {
    expect(NEW_ARRIVAL_PRODUCTS.length).toBeGreaterThanOrEqual(8);
    expect(NEW_ARRIVAL_PRODUCTS.length).toBeLessThanOrEqual(10);
    expect(NEW_ARRIVAL_PRODUCTS.every(product => product.category === "Hoa bó" && products.includes(product))).toBe(true);
  });
  it.each(["xuan", "ha", "thu", "dong"] as const)("provides 4–8 bouquets for %s", season => {
    const list = seasonalProducts(season);
    expect(list.length).toBeGreaterThanOrEqual(4);
    expect(list.length).toBeLessThanOrEqual(8);
    expect(list.every(p => p.category === "Hoa bó")).toBe(true);
  });
  it("strong scent includes rose and double lily bouquets", () => {
    const ids = products.filter(p => matchesScent(p, "ngat")).map(p => p.id);
    expect(ids).toContain("bo-hong-do"); expect(ids).toContain("bo-ly-kep"); expect(ids).not.toContain("bo-tu-cau");
  });
  it("light scent includes chrysanthemum and lisianthus", () => {
    const ids = products.filter(p => matchesScent(p, "diu")).map(p => p.id);
    expect(ids).toContain("bo-mua-thu"); expect(ids).toContain("bo-cat-tuong"); expect(ids).not.toContain("bo-ly-kep");
  });
  it("pure scent includes tulip, sunflower and hydrangea", () => {
    const ids = products.filter(p => matchesScent(p, "tinh-khiet")).map(p => p.id);
    expect(ids).toEqual(["bo-huong-duong", "bo-tulip-toi-gian", "bo-tu-cau"]);
  });
  it("nostalgic selection uses kraft bouquets", () => {
    expect(products.filter(p => matchesScent(p, "hoai-niem")).map(p => p.id)).toEqual(["bo-hong-do", "bo-hong-kem-dau", "bo-mua-thu"]);
  });
  it("counts to autumn end in Hanoi time, rather than a fabricated countdown", () => {
    expect(seasonCountdown("thu", new Date("2026-11-11T16:46:00Z"))).toEqual({ days: 19, hours: 0, minutes: 14, seconds: 0 });
  });
  it("ticks by one second and carries correctly across a minute", () => {
    expect(seasonCountdown("thu", new Date("2026-11-30T16:58:59Z"))).toEqual({ days: 0, hours: 0, minutes: 1, seconds: 1 });
    expect(seasonCountdown("thu", new Date("2026-11-30T16:59:00Z"))).toEqual({ days: 0, hours: 0, minutes: 1, seconds: 0 });
    expect(seasonCountdown("thu", new Date("2026-11-30T16:59:01Z"))).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 59 });
  });
  it("counts winter through the following March in Hanoi", () => {
    expect(seasonCountdown("dong", new Date("2026-12-01T17:00:00Z"))).toEqual({ days: 89, hours: 0, minutes: 0, seconds: 0 });
  });
  it("accepts an email reminder without an account", () => {
    expect(reminderSchema.safeParse({ email: "test@example.com", occasion: "sinh-nhat", date: "2026-12-01" }).success).toBe(true);
    expect(reminderSchema.safeParse({ email: "invalid", occasion: "sinh-nhat", date: "2026-12-01" }).success).toBe(false);
    expect(reminderSchema.safeParse({ email: "test@example.com", occasion: "sinh-nhat", date: "2026-02-30" }).success).toBe(false);
  });
});