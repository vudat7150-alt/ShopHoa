import { useEffect, useState } from "react";
import { SEASONAL_THEMES, seasonCountdown, type Season } from "@/lib/home-themes";

export function SeasonalCountdown({ season, active }: { season: Season; active: boolean }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      if (timer) clearInterval(timer);
      if (!document.hidden && active) {
        setNow(new Date());
        timer = setInterval(() => setNow(new Date()), 1000);
      }
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => { if (timer) clearInterval(timer); document.removeEventListener("visibilitychange", sync); };
  }, [active]);
  const countdown = now ? seasonCountdown(season, now) : null;
  const pad = (n: number) => String(n).padStart(2, "0");
  return <p className="garden-countdown" role="timer" aria-live="off">
    <span>Mùa hoa {SEASONAL_THEMES[season].name} khép lại sau:</span>
    <span className="garden-countdown-digits">{countdown ? `${countdown.days} ngày · ${pad(countdown.hours)}:${pad(countdown.minutes)}:${pad(countdown.seconds)}` : "…"}</span>
  </p>;
}