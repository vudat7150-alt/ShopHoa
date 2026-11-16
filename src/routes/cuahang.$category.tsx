import { createFileRoute, notFound } from "@tanstack/react-router";
import { SHOP_CATEGORIES, categoryHead } from "@/lib/shop-catalog";
import { ShopCategoryPage } from "@/components/shop/ShopCategoryPage";

export const Route = createFileRoute("/cuahang/$category")({
  loader: ({ params }) => {
    const category = SHOP_CATEGORIES.find(c => c.slug === params.category);
    if (!category) throw notFound();
    return { slug: category.slug };
  },
  head: ({ loaderData }) => loaderData ? categoryHead(loaderData.slug) : { meta: [{ title: "Danh mục không tồn tại — Hương Ly" }, { name: "description", content: "Danh mục này không có tại tiệm Hương Ly." }, { property: "og:title", content: "Danh mục không tồn tại — Hương Ly" }, { property: "og:description", content: "Khám phá các nhóm hoa và quà tại Hương Ly." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] },
  component: CategoryRoute,
});
function CategoryRoute() {
  const { slug } = Route.useLoaderData();
  return <ShopCategoryPage key={slug} slug={slug} />;
}