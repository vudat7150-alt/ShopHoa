import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/shop/SupportPage";
import { supportHead } from "@/lib/support-content";

export const Route = createFileRoute("/ho-tro/cham-hoa")({
  head: () => supportHead("cham-hoa"),
  component: Page,
});

function Page() {
  return <SupportPage id="cham-hoa" />;
}
