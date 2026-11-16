import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/shop/SupportPage";
import { supportHead } from "@/lib/support-content";

export const Route = createFileRoute("/chinh-sach/dieu-khoan")({
  head: () => supportHead("dieu-khoan"),
  component: Page,
});

function Page() {
  return <SupportPage id="dieu-khoan" />;
}
