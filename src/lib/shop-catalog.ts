import { products, type Product, type Species } from "./data";
import stems1 from "@/assets/catalog-stems-1.webp";
import stems2 from "@/assets/catalog-stems-2.webp";
import stems3 from "@/assets/catalog-stems-3.webp";
import stems4 from "@/assets/catalog-stems-4.webp";
import stems5 from "@/assets/catalog-stems-5.webp";
import stems6 from "@/assets/catalog-stems-6.webp";
import stems7 from "@/assets/catalog-stems-7.webp";
import stems8 from "@/assets/catalog-stems-8.webp";
import stems9 from "@/assets/catalog-stems-9.webp";
import stems10 from "@/assets/catalog-stems-10.webp";
import stems11 from "@/assets/catalog-stems-11.webp";
import stems12 from "@/assets/catalog-stems-12.webp";
import dried1 from "@/assets/catalog-dried-1.webp";
import dried2 from "@/assets/catalog-dried-2.webp";
import dried3 from "@/assets/catalog-dried-3.webp";
import dried4 from "@/assets/catalog-dried-4.webp";
import dried5 from "@/assets/catalog-dried-5.webp";
import dried6 from "@/assets/catalog-dried-6.webp";
import dried7 from "@/assets/catalog-dried-7.webp";
import dried8 from "@/assets/catalog-dried-8.webp";
import dried9 from "@/assets/catalog-dried-9.webp";
import dried10 from "@/assets/catalog-dried-10.webp";
import dried11 from "@/assets/catalog-dried-11.webp";
import dried12 from "@/assets/catalog-dried-12.webp";
import gifts1 from "@/assets/catalog-gifts-1.webp";
import gifts2 from "@/assets/catalog-gifts-2.webp";
import gifts3 from "@/assets/catalog-gifts-3.webp";
import gifts4 from "@/assets/catalog-gifts-4.webp";
import gifts5 from "@/assets/catalog-gifts-5.webp";
import gifts6 from "@/assets/catalog-gifts-6.webp";
import gifts7 from "@/assets/catalog-gifts-7.webp";
import gifts8 from "@/assets/catalog-gifts-8.webp";
import gifts9 from "@/assets/catalog-gifts-9.webp";
import gifts10 from "@/assets/catalog-gifts-10.webp";
import gifts11 from "@/assets/catalog-gifts-11.webp";
import gifts12 from "@/assets/catalog-gifts-12.webp";
import gifts13 from "@/assets/catalog-gifts-13.webp";
import gifts14 from "@/assets/catalog-gifts-14.webp";
import gifts15 from "@/assets/catalog-gifts-15.webp";
import yellowChrysanthemum from "@/assets/stem-chrysanthemum-yellow.webp";
import redGladiolus from "@/assets/stem-gladiolus-red.webp";
import yellowGladiolus from "@/assets/stem-gladiolus-yellow.webp";
import pinkGladiolus from "@/assets/stem-gladiolus-pink.webp";
import yellowLily from "@/assets/stem-lily-yellow.webp";
import redLily from "@/assets/stem-lily-red.webp";
import doubleLily from "@/assets/stem-lily-double.webp";
import whiteTrumpet from "@/assets/stem-trumpet-white.webp";
import pinkLotus from "@/assets/stem-lotus-pink.webp";
import whiteLotus from "@/assets/stem-lotus-white.webp";
export const SHOP_CATEGORIES = [
 { slug: "hoa-canh-le", name: "Hoa Cành Lẻ", label: "Cành lẻ", popout: false, intro: "Một cành hoa, một góc nhà bừng sáng." },
 { slug: "hoa-bo-nghe-thuat", name: "Hoa Bó Nghệ Thuật", label: "Hoa bó", popout: true, intro: "Gói ghém lời thương bằng nếp giấy và sắc hoa." },
 { slug: "lang-hoa-ke-chuc-mung", name: "Lẵng Hoa & Kệ Chúc Mừng", label: "Lẵng & kệ hoa", popout: true, intro: "Một lời chúc đủ đầy, một ngày đáng nhớ." },
 { slug: "hoa-kho-hoai-niem", name: "Hoa Khô Hoài Niệm", label: "Hoa khô", popout: false, intro: "Giữ một mùa hoa ở lại, dịu dàng cùng năm tháng." },
 { slug: "nen-sap-thom-phu-kien", name: "Nến, Sáp Thơm & Phụ Kiện", label: "Hương & phụ kiện", popout: false, intro: "Chút hương thanh, chút mộc cho góc nhỏ thân quen." },
] as const;
export type ShopSlug = typeof SHOP_CATEGORIES[number]["slug"];
export type ShopProduct = Product & { shop: ShopSlug; attrs: Record<string, string[]>; proposed?: boolean; primaryFlower?: Species | null };
export type PriceTier = { label: string; min?: number; max?: number };
export type FilterGroup = { key: string; title: string };
export const FRESH_PRICES: PriceTier[] = [{ label: "Dưới 100.000đ", max: 99999 }, { label: "100.000đ – 200.000đ", min: 100000, max: 200000 }, { label: "200.000đ – 300.000đ", min: 200000, max: 300000 }, { label: "Trên 300.000đ", min: 300001 }];
export const SHOP_FILTERS: Record<ShopSlug, { groups: FilterGroup[]; prices: PriceTier[] }> = {
 "hoa-canh-le": { groups: [{ key: "flower", title: "Loài hoa chủ đạo" }, { key: "color", title: "Tông màu sắc" }], prices: FRESH_PRICES },
 "hoa-bo-nghe-thuat": { groups: [{ key: "flower", title: "Loài hoa chủ đạo" }, { key: "color", title: "Tông màu sắc" }], prices: FRESH_PRICES },
 "lang-hoa-ke-chuc-mung": { groups: [{ key: "shape", title: "Kiểu dáng" }, { key: "occasion", title: "Dịp tặng" }], prices: [{ label: "150.000đ – 300.000đ", min: 150000, max: 300000 }, { label: "300.000đ – 500.000đ", min: 300000, max: 500000 }, { label: "Từ 600.000đ trở lên", min: 600000 }] },
 "hoa-kho-hoai-niem": { groups: [{ key: "dried", title: "Loại hoa khô" }, { key: "form", title: "Hình thức" }], prices: [{ label: "Dưới 150.000đ", max: 149999 }, { label: "150.000đ – 300.000đ", min: 150000, max: 300000 }, { label: "Trên 300.000đ", min: 300001 }] },
 "nen-sap-thom-phu-kien": { groups: [{ key: "group", title: "Phân nhóm" }, { key: "scent", title: "Tầng hương" }], prices: [{ label: "Dưới 100.000đ", max: 99999 }, { label: "100.000đ – 250.000đ", min: 100000, max: 250000 }, { label: "Trên 250.000đ", min: 250001 }] },
};
function proposed(id: string, name: string, price: number, image: string, shop: ShopSlug, attrs: Record<string, string[]>, desc: string, species: Species[] = []): ShopProduct {
 const variants = shop === "hoa-canh-le" && species.includes("Hoa ly") ? [{ id: "3-tai", label: "Loại 3 tai", surcharge: 0 }, { id: "5-tai", label: "Loại 5 tai tuyển chọn", surcharge: id === "canh-ly-kep" ? 20000 : 15000 }] : [];
 return { id, name, price, image, shop, attrs, desc, species, proposed: true, ...(variants.length ? { variants } : {}), category: shop === "hoa-canh-le" ? "Hoa cành lẻ" : shop === "hoa-kho-hoai-niem" ? "Hoa khô" : "Nến & phụ kiện" };
}

const bouquetColors: Record<string, string[]> = {
 "bo-hong-do": ["Đỏ"], "bo-cuc-tana": ["Trắng", "Kem"], "bo-huong-duong": ["Vàng"], "bo-baby-khong-lo": ["Trắng"], "bo-tulip-toi-gian": ["Trắng", "Hồng"], "bo-tu-cau": ["Xanh", "Hồng"], "bo-cat-tuong": ["Hồng", "Kem"], "bo-ly-kep": ["Trắng"], "bo-hong-kem-dau": ["Hồng", "Kem"], "bo-mua-thu": ["Trắng"], "cuoi-linh-lan": ["Trắng"], "cuoi-hong-trang": ["Trắng"], "cuoi-tulip-ru": ["Trắng", "Hồng"], "cuoi-mau-don": ["Trắng", "Hồng"], "phu-baby-mau": ["Hồng", "Xanh", "Tím"],
};
function arrangementAttributes(p: Product): Record<string, string[]> {
 if (p.id.startsWith("xe-hoa")) return { shape: ["Hoa xe cưới"], occasion: ["Cưới hỏi"] };
 if (["lang-khai-truong", "ke-do-dai-cat"].includes(p.id)) return { shape: ["Kệ hoa đứng 1–2 tầng"], occasion: ["Khai trương"] };
 if (p.id === "hop-mica") return { shape: ["Hộp hoa nghệ thuật"], occasion: ["Sinh nhật", "Tri ân"] };
 if (["chau-lan-ho-diep", "binh-thuy-tinh"].includes(p.id)) return { shape: ["Chậu & bình hoa"], occasion: ["Tri ân", "Khai trương"] };
 return { shape: ["Giỏ hoa xách tay để bàn"], occasion: ["Sinh nhật", "Tri ân"] };
}

export const shopProducts: ShopProduct[] = [
 proposed("hong-do-chuc", "Hồng Đỏ Đà Lạt · 1 Cành", 25000, stems1, "hoa-canh-le", { flower: ["Hoa hồng"], color: ["Đỏ"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa hồng"]),
 proposed("canh-hong-phan", "Hồng Phấn · 1 Cành", 25000, stems2, "hoa-canh-le", { flower: ["Hoa hồng"], color: ["Hồng"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa hồng"]),
 proposed("canh-hong-kem", "Hồng Kem · 1 Cành", 30000, stems3, "hoa-canh-le", { flower: ["Hoa hồng"], color: ["Kem"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa hồng"]),
 proposed("canh-cuc-trang", "Cúc Trắng · 1 Cành", 15000, stems4, "hoa-canh-le", { flower: ["Hoa cúc"], color: ["Trắng"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa cúc"]),
 proposed("canh-ly-trang", "Ly Trắng · 1 Cành", 65000, stems5, "hoa-canh-le", { flower: ["Hoa ly"], color: ["Trắng"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa ly"]),
 proposed("canh-tulip", "Tulip Hồng · 1 Cành", 55000, stems6, "hoa-canh-le", { flower: ["Tulip"], color: ["Hồng"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Tulip"]),
 proposed("canh-tu-cau", "Cẩm Tú Cầu Xanh · 1 Cành", 70000, stems7, "hoa-canh-le", { flower: ["Hoa cẩm tú cầu"], color: ["Xanh"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa cẩm tú cầu"]),
 proposed("canh-baby", "Baby Trắng · 1 Cành", 20000, stems8, "hoa-canh-le", { flower: ["Hoa baby"], color: ["Trắng"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa baby"]),
 proposed("canh-huong-duong", "Hướng Dương · 1 Cành", 25000, stems9, "hoa-canh-le", { flower: ["Hoa hướng dương"], color: ["Vàng"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa hướng dương"]),
 proposed("canh-dong-tien", "Đồng Tiền Cam · 1 Cành", 15000, stems10, "hoa-canh-le", { flower: ["Hoa đồng tiền"], color: ["Cam"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa đồng tiền"]),
 proposed("canh-cam-chuong", "Cẩm Chướng Hồng · 1 Cành", 18000, stems11, "hoa-canh-le", { flower: ["Hoa cẩm chướng"], color: ["Hồng"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa cẩm chướng"]),
 proposed("canh-cat-tuong", "Cát Tường Tím · 1 Cành", 30000, stems12, "hoa-canh-le", { flower: ["Hoa cát tường"], color: ["Tím"] }, "Bán theo một cành để tự cắm bình; màu sắc và độ nở tùy đợt hoa.", ["Hoa cát tường"]),
 proposed("canh-cuc-vang", "Cúc Vàng - Cành", 15000, yellowChrysanthemum, "hoa-canh-le", { flower: ["Hoa cúc"], color: ["Vàng"] }, "Một cành cúc vàng để tự cắm bình; độ nở tùy đợt hoa.", ["Hoa cúc"]),
 proposed("canh-don-do", "Hoa Dơn Đỏ (Lay Ơn) - Cành", 18000, redGladiolus, "hoa-canh-le", { flower: ["Hoa lay ơn"], color: ["Đỏ"] }, "Một cành dơn đỏ với nụ nở dần dọc thân, thích hợp cắm bình cao.", ["Hoa lay ơn"]),
 proposed("canh-don-vang", "Hoa Dơn Vàng (Lay Ơn) - Cành", 18000, yellowGladiolus, "hoa-canh-le", { flower: ["Hoa lay ơn"], color: ["Vàng"] }, "Một cành dơn vàng; màu và độ nở tùy đợt hoa.", ["Hoa lay ơn"]),
 proposed("canh-don-hong", "Hoa Dơn Hồng (Lay Ơn) - Cành", 18000, pinkGladiolus, "hoa-canh-le", { flower: ["Hoa lay ơn"], color: ["Hồng"] }, "Một cành dơn hồng, dáng dài thanh thoát để tự cắm bình.", ["Hoa lay ơn"]),
 proposed("canh-ly-vang", "Ly Vàng - Cành", 45000, yellowLily, "hoa-canh-le", { flower: ["Hoa ly"], color: ["Vàng"] }, "Một cành ly vàng; chọn loại 3 tai hoặc 5 tai trong phần chi tiết.", ["Hoa ly"]),
 proposed("canh-ly-do", "Ly Đỏ - Cành", 50000, redLily, "hoa-canh-le", { flower: ["Hoa ly"], color: ["Đỏ"] }, "Một cành ly đỏ; chọn loại 3 tai hoặc 5 tai trong phần chi tiết.", ["Hoa ly"]),
 proposed("canh-ly-kep", "Ly Kép Cao Cấp - Cành", 65000, doubleLily, "hoa-canh-le", { flower: ["Hoa ly"], color: ["Trắng"] }, "Một cành ly kép nhiều lớp cánh; chọn số tai phù hợp khi đặt.", ["Hoa ly"]),
 proposed("canh-loa-ken", "Hoa Loa Kèn Trắng - Cành", 25000, whiteTrumpet, "hoa-canh-le", { flower: ["Hoa loa kèn"], color: ["Trắng"] }, "Một cành loa kèn trắng thanh mảnh, hoa hình kèn đặc trưng.", ["Hoa loa kèn"]),
 proposed("canh-sen-hong", "Hoa Sen Hồng - Cành", 30000, pinkLotus, "hoa-canh-le", { flower: ["Hoa sen"], color: ["Hồng"] }, "Một cành sen hồng theo mùa; nhắn tiệm xác nhận độ nở trước khi đặt.", ["Hoa sen"]),
 proposed("canh-sen-trang", "Hoa Sen Trắng - Cành", 30000, whiteLotus, "hoa-canh-le", { flower: ["Hoa sen"], color: ["Trắng"] }, "Một cành sen trắng theo mùa; nhắn tiệm xác nhận độ nở trước khi đặt.", ["Hoa sen"]),
 ...products.filter(p => p.category === "Hoa bó" && p.id !== "hong-do-chuc" || p.id.startsWith("cuoi-") || p.id === "phu-baby-mau").map((p): ShopProduct => ({ ...p, shop: "hoa-bo-nghe-thuat", attrs: { flower: p.species, color: bouquetColors[p.id] ?? ["Phối màu"] } })),
 ...products.filter(p => p.category === "Lẵng & giỏ hoa" || p.id.startsWith("xe-hoa-")).map((p): ShopProduct => ({ ...p, shop: "lang-hoa-ke-chuc-mung", attrs: arrangementAttributes(p) })),
 proposed("kho-1", "Baby Khô Mini", 95000, dried1, "hoa-kho-hoai-niem", { dried: ["Baby"], form: ["Bó mini"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-2", "Cúc Bất Tử Nắng Xưa", 130000, dried2, "hoa-kho-hoai-niem", { dried: ["Cúc bất tử"], form: ["Bó mini"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-3", "Lavender Khô Đà Lạt", 160000, dried3, "hoa-kho-hoai-niem", { dried: ["Lavender"], form: ["Bó nghệ thuật"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-4", "Cẩm Tú Cầu Khô", 220000, dried4, "hoa-kho-hoai-niem", { dried: ["Cẩm tú cầu"], form: ["Bó nghệ thuật"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-5", "Hồng Ướp Trong Vòm Kính", 390000, dried5, "hoa-kho-hoai-niem", { dried: ["Hoa hồng ướp"], form: ["Bình cắm sẵn"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-6", "Hoa Sao Tím", 120000, dried6, "hoa-kho-hoai-niem", { dried: ["Hoa sao"], form: ["Bó mini"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-7", "Hoa Sao Trắng", 120000, dried7, "hoa-kho-hoai-niem", { dried: ["Hoa sao"], form: ["Bó mini"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-8", "Đuôi Thỏ Mộc", 110000, dried8, "hoa-kho-hoai-niem", { dried: ["Đuôi thỏ"], form: ["Bó mini"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-9", "Cỏ Lau Trong Bình Gốm", 320000, dried9, "hoa-kho-hoai-niem", { dried: ["Cỏ lau"], form: ["Bình cắm sẵn"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-10", "Bông Gòn Phố Nhỏ", 145000, dried10, "hoa-kho-hoai-niem", { dried: ["Bông gòn"], form: ["Bó nghệ thuật"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-11", "Quả Thông Trang Trí", 85000, dried11, "hoa-kho-hoai-niem", { dried: ["Quả thông"], form: ["Hộp trang trí"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("kho-12", "Bạch Đàn Sấy Trong Bình", 340000, dried12, "hoa-kho-hoai-niem", { dried: ["Bạch đàn"], form: ["Bình cắm sẵn"] }, "Hoa và vật liệu khô trang trí; giữ nơi khô thoáng, tránh nắng trực tiếp và không tưới nước."),
 proposed("phu-kien-1", "Nến Hũ Hổ Phách · Nhài", 185000, gifts1, "nen-sap-thom-phu-kien", {"group": ["Nến thơm hũ"], "scent": ["Hoa cỏ thanh khiết"]}, "Hũ 120 g, hương nhài dịu."),
 proposed("phu-kien-2", "Nến Hũ Hổ Phách · Trà Trắng", 185000, gifts2, "nen-sap-thom-phu-kien", {"group": ["Nến thơm hũ"], "scent": ["Trà & Thảo mộc"]}, "Hũ 120 g, hương trà trắng thanh."),
 proposed("phu-kien-3", "Nến Hũ Hổ Phách · Gỗ Trầm", 220000, gifts3, "nen-sap-thom-phu-kien", {"group": ["Nến thơm hũ"], "scent": ["Gỗ trầm ấm áp"]}, "Hũ 120 g, hương gỗ trầm ấm."),
 proposed("phu-kien-4", "Sáp Treo Tủ · Hoa Nhài Ép", 75000, gifts4, "nen-sap-thom-phu-kien", {"group": ["Sáp thơm treo đính hoa khô"], "scent": ["Hoa cỏ thanh khiết"]}, "Miếng sáp 35 g treo tủ, không đốt."),
 proposed("phu-kien-5", "Sáp Treo Tủ · Lavender", 75000, gifts5, "nen-sap-thom-phu-kien", {"group": ["Sáp thơm treo đính hoa khô"], "scent": ["Trà & Thảo mộc"]}, "Miếng sáp 35 g với lavender khô, không đốt."),
 proposed("phu-kien-6", "Sáp Treo Tủ · Gỗ & Thảo Mộc", 85000, gifts6, "nen-sap-thom-phu-kien", {"group": ["Sáp thơm treo đính hoa khô"], "scent": ["Gỗ trầm ấm áp"]}, "Miếng sáp 35 g treo tủ, tránh nguồn nhiệt."),
 proposed("phu-kien-7", "Bình Bát Tràng Men Rạn", 290000, gifts7, "nen-sap-thom-phu-kien", {"group": ["Bình gốm & Lọ"], "scent": []}, "Bình gốm cao khoảng 18 cm, men rạn thủ công."),
 proposed("phu-kien-8", "Bình Gốm Men Ngọc", 320000, gifts8, "nen-sap-thom-phu-kien", {"group": ["Bình gốm & Lọ"], "scent": []}, "Bình gốm dáng tròn cao khoảng 16 cm."),
 proposed("phu-kien-9", "Lọ Thủy Tinh Cổ Hẹp", 85000, gifts9, "nen-sap-thom-phu-kien", {"group": ["Bình gốm & Lọ"], "scent": []}, "Lọ thủy tinh cao khoảng 20 cm, hoa không đi kèm."),
 proposed("phu-kien-10", "Lọ Thủy Tinh Gân Dọc", 120000, gifts10, "nen-sap-thom-phu-kien", {"group": ["Bình gốm & Lọ"], "scent": []}, "Lọ thủy tinh cao khoảng 18 cm."),
 proposed("phu-kien-11", "Kéo Cắt Cành", 145000, gifts11, "nen-sap-thom-phu-kien", {"group": ["Dụng cụ & Thiệp"], "scent": []}, "Kéo cắt cành nhỏ, lau khô sau khi dùng."),
 proposed("phu-kien-12", "Bình Xịt Phun Sương", 165000, gifts12, "nen-sap-thom-phu-kien", {"group": ["Dụng cụ & Thiệp"], "scent": []}, "Bình thủy tinh vòi kim loại, dung tích 200 ml."),
 proposed("phu-kien-13", "Gói Dưỡng Hoa · Bộ 3", 15000, gifts13, "nen-sap-thom-phu-kien", {"group": ["Dụng cụ & Thiệp"], "scent": []}, "Ba gói dưỡng hoa; pha theo hướng dẫn của nhà cung cấp."),
 proposed("phu-kien-14", "Thiệp Giấy Dó Ép Hoa", 35000, gifts14, "nen-sap-thom-phu-kien", {"group": ["Dụng cụ & Thiệp"], "scent": []}, "Thiệp giấy dó gấp đôi, khoảng 10 × 15 cm."),
 proposed("phu-kien-15", "Túi Tote Hương Ly · Mộc", 95000, gifts15, "nen-sap-thom-phu-kien", {"group": ["Dụng cụ & Thiệp"], "scent": []}, "Túi vải cotton trơn khoảng 35 × 40 cm, chưa in logo."),
 ];
export function inPriceTier(price: number, tier?: PriceTier) { return !tier || (tier.min === undefined || price >= tier.min) && (tier.max === undefined || price <= tier.max); }
export function productWithVariant(product: Product, variantId?: string): Product {
 const variant = product.variants?.find(v => v.id === variantId) ?? product.variants?.[0];
 if (!variant) return product;
 const { variants: _variants, ...base } = product;
 return { ...base, id: `${product.id}::${variant.id}`, name: `${product.name} · ${variant.label}`, price: product.price + variant.surcharge };
}
const focalFlowerOverrides: Record<string, Species | null> = { "cuoi-linh-lan": null, "cuoi-mau-don": null };
export function primaryFlower(product: ShopProduct): Species | null {
 if (product.primaryFlower !== undefined) return product.primaryFlower;
 if (Object.prototype.hasOwnProperty.call(focalFlowerOverrides, product.id)) return focalFlowerOverrides[product.id] ?? null;
 return product.species[0] ?? null;
}
export function relatedFlowerProducts(species: Species | null) {
 return species ? shopProducts.filter(p => ["hoa-canh-le", "hoa-bo-nghe-thuat", "lang-hoa-ke-chuc-mung"].includes(p.shop) && primaryFlower(p) === species) : [];
}
export function flowerFilterLabel(value: string) { return value === "Hoa lay ơn" ? "Hoa Dơn (Lay Ơn)" : value; }
export function shopFilterOptions(items: ShopProduct[], key: string, slug: ShopSlug) {
 const extra = key === "flower" && ["hoa-canh-le", "hoa-bo-nghe-thuat"].includes(slug) ? ["Hoa lay ơn", "Hoa loa kèn", "Hoa sen"] : [];
 return Array.from(new Set([...items.flatMap(p => p.attrs[key] ?? []), ...extra]));
}
export function filterShopProducts(items: ShopProduct[], selected: Record<string, string[]>, price?: PriceTier) {
 return items.filter(p => inPriceTier(p.price, price) && Object.entries(selected).every(([key, values]) => !values.length || values.some(value => p.attrs[key]?.includes(value))));
}
export function categoryHead(slug: ShopSlug) {
 const category = SHOP_CATEGORIES.find(c => c.slug === slug);
 const title = `${category?.name} — Hương Ly, Hà Nội`;
 const description = `${category?.intro} Chọn hoa và quà tại tiệm Hương Ly, Hà Nội.`;
 return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
}
