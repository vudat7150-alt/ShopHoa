import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/shop/SupportPage";
import { supportHead } from "@/lib/support-content";

export const Route = createFileRoute("/ho-tro/dat-truoc")({
  head: () => supportHead("dat-truoc"),
  component: Page,
});

function Page() {
  return <SupportPage id="dat-truoc" />;
}
