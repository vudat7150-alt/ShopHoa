/**
 * Logo HƯƠNG LY — monogram H·L lồng nhau: chữ L dùng chung nét sổ phải của H.
 * Hai nét sổ đậm vừa phải, nét ngang & chân serif mảnh (kiểu Didone cổ điển),
 * vòng tròn đôi vàng, nụ hồng phía trên, đôi lá ôm dưới chân.
 * `BrandLockup` là bộ nhận diện duy nhất dùng chung cho navbar và footer.
 */
const CREAM = "#eee9d4";
const GOLD = "#a9873f";
const FOREST = "#24402f";
const ROSE = "#c98f8a";

export function BrandLogo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const letter = tone === "dark" ? CREAM : FOREST;
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" strokeLinecap="round" role="img" aria-label="Logo Hương Ly">
      <circle cx="50" cy="50" r="47" stroke={GOLD} strokeWidth="1.6" />
      <circle cx="50" cy="50" r="43" stroke={GOLD} strokeWidth="0.6" />
      <g stroke={letter}>
        <path d="M33 29V69M55 29V69" strokeWidth="4.4" strokeLinecap="butt" />
        <path d="M33 49H55" strokeWidth="1.5" />
        <path d="M27.5 29H38.5M49.5 29H60.5M27.5 69H38.5" strokeWidth="1.5" />
        <path d="M55 69H73V61" strokeWidth="1.7" />
      </g>
      <circle cx="50" cy="18" r="2.2" fill={ROSE} />
      <path d="M50 88c-8-1-12.5-5.5-13.5-11 7 0 12.5 4.5 13.5 11zM50 88c8-1 12.5-5.5 13.5-11-7 0-12.5 4.5-13.5 11z" fill={GOLD} />
    </svg>
  );
}

/** Logo đầy đủ: biểu tượng + HƯƠNG LY + gạch vàng + "Hoa tươi Hà Nội". Cùng kích cỡ ở mọi nơi. */
export function BrandLockup({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const name = tone === "dark" ? CREAM : FOREST;
  return (
    <span className="flex items-center gap-4 leading-none">
      <BrandLogo tone={tone} className="h-14 w-14 shrink-0" />
      <span className="block">
        <span className="block font-display text-[24px] font-semibold uppercase tracking-[0.24em]" style={{ color: name }}>
          Hương Ly
        </span>
        <span
          className="mt-[7px] block border-t pt-[5px] font-display text-[15px] italic"
          style={{ color: GOLD, borderColor: GOLD }}
        >
          Hoa tươi Hà Nội
        </span>
      </span>
    </span>
  );
}
