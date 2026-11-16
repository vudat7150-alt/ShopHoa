import { describe, expect, it } from "vitest";
import { flowerColorNotes } from "@/lib/flower-notes";
import { shopProducts } from "@/lib/shop-catalog";

describe("Dictionary color bouquets", () => {
  it("has an illustrated meaning for every single-stem species", () => {
    const species = new Set(shopProducts.filter(p => p.shop === "hoa-canh-le").flatMap(p => p.species));
    for (const name of species) {
      const notes = flowerColorNotes[name];
      expect(notes?.length).toBeGreaterThan(0);
      for (const note of notes ?? []) {
        expect(note.image).toMatch(/dictionary-.*\.webp/);
        expect(note.meaning.length).toBeGreaterThan(30);
      }
    }
  });
  it.each([
    ["Hoa hồng", ["Hồng Đỏ", "Hồng Phấn", "Hồng Kem"]],
    ["Hoa sen", ["Sen Hồng", "Sen Trắng"]],
    ["Hoa lay ơn", ["Dơn Đỏ", "Dơn Vàng", "Dơn Hồng"]],
    ["Hoa ly", ["Ly Trắng", "Ly Vàng", "Ly Đỏ", "Ly Kép"]],
  ] as const)("resolves distinct images and meanings for %s varieties", (species, labels) => {
    const notes = flowerColorNotes[species] ?? [];
    expect(notes.map(n => n.label)).toEqual(labels);
    expect(new Set(notes.map(n => n.image)).size).toBe(labels.length);
    expect(new Set(notes.map(n => n.meaning)).size).toBe(labels.length);
  });
});