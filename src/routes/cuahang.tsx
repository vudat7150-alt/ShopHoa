import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SCENT_GROUPS } from "@/lib/home-themes";
export const Route = createFileRoute("/cuahang")({
 validateSearch: (search: Record<string, unknown>): { loai?: string; huong?: string } => {
  const loai = typeof search["loai"] === "string" ? search["loai"] : undefined;
  const huong = SCENT_GROUPS.some(g => g.id === search["huong"]) ? String(search["huong"]) : undefined;
  return { ...(loai ? { loai } : {}), ...(huong ? { huong } : {}) };
 },
 component: () => <Outlet />,
});
