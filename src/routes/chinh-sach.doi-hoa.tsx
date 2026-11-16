import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/shop/SupportPage";
import { supportHead } from "@/lib/support-content";

export const Route = createFileRoute("/chinh-sach/doi-hoa")({
  head: () => supportHead("doi-hoa"),
  component: Page,
});

function Page() {
  return <SupportPage id="doi-hoa" />;
}
