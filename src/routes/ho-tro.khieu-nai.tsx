import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/shop/SupportPage";
import { supportHead } from "@/lib/support-content";

export const Route = createFileRoute("/ho-tro/khieu-nai")({
  head: () => supportHead("khieu-nai"),
  component: Page,
});

function Page() {
  return <SupportPage id="khieu-nai" />;
}
