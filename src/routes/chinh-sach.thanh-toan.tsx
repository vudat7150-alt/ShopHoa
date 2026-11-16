import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/shop/SupportPage";
import { supportHead } from "@/lib/support-content";

export const Route = createFileRoute("/chinh-sach/thanh-toan")({
  head: () => supportHead("thanh-toan"),
  component: Page,
});

function Page() {
  return <SupportPage id="thanh-toan" />;
}
