export const WRAPPING_MATERIALS = [
  { id: "newspaper", name: "Giấy báo xưa Hà Nội", texture: "material-newspaper" },
  { id: "kraft", name: "Giấy Kraft mộc", texture: "material-kraft" },
  { id: "silk", name: "Lụa tơ tằm", texture: "material-silk" },
] as const;

export type LetterPhase = "editing" | "tucking" | "folding" | "sealing" | "sealed" | "unsealing" | "unfolding" | "lifting";
export const LETTER_TIMING = { tucking: .5, folding: .35, sealing: .15 } as const;
export function nextLetterPhase(phase: LetterPhase): LetterPhase {
  const next: Record<LetterPhase, LetterPhase> = {
    editing: "tucking", tucking: "folding", folding: "sealing", sealing: "sealed",
    sealed: "unsealing", unsealing: "unfolding", unfolding: "lifting", lifting: "editing",
  };
  return next[phase];
}