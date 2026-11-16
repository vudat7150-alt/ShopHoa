import { describe, expect, it } from "vitest";
import { LETTER_TIMING, nextLetterPhase } from "@/lib/stationery";

describe("letter sequence", () => {
  it("completes the tuck, fold and seal choreography in one second", () => {
    expect(LETTER_TIMING.tucking).toBe(.5);
    expect(LETTER_TIMING.folding).toBe(.35);
    expect(LETTER_TIMING.sealing).toBe(.15);
    expect(LETTER_TIMING.tucking + LETTER_TIMING.folding + LETTER_TIMING.sealing).toBe(1);
  });
  it("tucks the card before folding and seals only after folding", () => {
    expect(nextLetterPhase("editing")).toBe("tucking");
    expect(nextLetterPhase("tucking")).toBe("folding");
    expect(nextLetterPhase("folding")).toBe("sealing");
    expect(nextLetterPhase("sealing")).toBe("sealed");
  });
  it("unseals before opening the flap and lifting the card", () => {
    expect(nextLetterPhase("sealed")).toBe("unsealing");
    expect(nextLetterPhase("unsealing")).toBe("unfolding");
    expect(nextLetterPhase("unfolding")).toBe("lifting");
    expect(nextLetterPhase("lifting")).toBe("editing");
  });
});