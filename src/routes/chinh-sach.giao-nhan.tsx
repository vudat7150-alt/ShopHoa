import { createFileRoute } from "@tanstack/react-router";
import { SupportPage } from "@/components/shop/SupportPage";
import { supportHead } from "@/lib/support-content";

export const Route = createFileRoute("/chinh-sach/giao-nhan")({
  head: () => supportHead("giao-nhan"),
  component: Page,
});

function Page() {
  return <SupportPage id="giao-nhan" />;
}
