import rose from "@/assets/b-rose.png";
import tulip from "@/assets/b-tulip.png";
import baby from "@/assets/b-baby.png";
import basket from "@/assets/b-basket.png";
import wedding from "@/assets/b-wedding.png";
import sunflower from "@/assets/b-sunflower.png";
import stems from "@/assets/b-stems.png";
import tana from "@/assets/b-tana.png";
import tucau from "@/assets/b-tucau.png";
import cattuong from "@/assets/b-cattuong.png";
import lykep from "@/assets/b-lykep.png";
import hongkem from "@/assets/b-hongkem.png";
import hoami from "@/assets/b-hoami.png";
import giogo from "@/assets/b-giogo.png";
import khaitruong from "@/assets/b-khaitruong.png";
import hopmica from "@/assets/b-hopmica.png";
import giomay from "@/assets/b-giomay.png";
import pingpong from "@/assets/b-pingpong.png";
import lanhodiep from "@/assets/b-lanhodiep.png";
import dongtien from "@/assets/b-dongtien.png";
import binhthuytinh from "@/assets/b-binhthuytinh.png";
import linlan from "@/assets/b-linlan.png";
import hongtrang from "@/assets/b-hongtrang.png";
import tulipru from "@/assets/b-tulipru.png";
import caiao from "@/assets/b-caiao.png";
import xehoa from "@/assets/b-xehoa.jpg";
import xehoa2 from "@/assets/b-xehoa2.jpg";
import xehoatraitim from "@/assets/b-xehoa-trai-tim.png";
import xehoacua from "@/assets/b-xehoa-cua.png";
import babymau from "@/assets/b-babymau.png";
import labac from "@/assets/b-labac.png";
import tungnho from "@/assets/b-tungnho.png";
import thuytruc from "@/assets/b-thuytruc.png";
import s1 from "@/assets/street-1.jpg";
import s2 from "@/assets/street-2.jpg";
import s3 from "@/assets/street-3.jpg";
import s4 from "@/assets/street-4.jpg";
import s5 from "@/assets/street-5.jpg";
import gladiolus from "@/assets/stem-gladiolus-red.webp";
import trumpet from "@/assets/stem-trumpet-white.webp";
import lotus from "@/assets/stem-lotus-pink.webp";

export type Category = "Hoa bó" | "Lẵng & giỏ hoa" | "Hoa cưới & xe hoa" | "Hoa phụ liệu" | "Hoa cành lẻ" | "Hoa khô" | "Nến & phụ kiện";
export const categories: ("Tất cả" | Category)[] = ["Tất cả", "Hoa bó", "Lẵng & giỏ hoa", "Hoa cưới & xe hoa", "Hoa phụ liệu"];

export type Species =
  | "Hoa hồng"
  | "Hoa cúc"
  | "Hoa ly"
  | "Hoa đồng tiền"
  | "Hoa hướng dương"
  | "Hoa cẩm chướng"
  | "Hoa cát tường"
  | "Hoa lan"
  | "Hoa cẩm tú cầu"
  | "Hoa thiên điểu"
  | "Hoa mõm sói"
  | "Hoa lay ơn"
  | "Hoa loa kèn"
  | "Hoa sen"
  | "Hoa thanh liễu"
  | "Hoa tuyết mai"
  | "Tulip"
  | "Hoa baby"
  | "Lá & phụ kiện";

export const speciesList: ("Tất cả" | Species)[] = [
  "Tất cả",
  "Hoa hồng",
  "Hoa cúc",
  "Hoa ly",
  "Hoa đồng tiền",
  "Hoa hướng dương",
  "Hoa cẩm chướng",
  "Hoa cát tường",
  "Hoa lan",
  "Hoa cẩm tú cầu",
  "Hoa thiên điểu",
  "Hoa mõm sói",
  "Hoa lay ơn",
  "Hoa loa kèn",
  "Hoa sen",
  "Hoa thanh liễu",
  "Hoa tuyết mai",
  "Tulip",
  "Hoa baby",
  "Lá & phụ kiện",
];

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  species: Species[];
  image: string;
  // Ảnh bìa dọc dùng riêng cho thẻ trong lưới (ví dụ crop cụm hoa xe cưới);
  // ảnh gốc vẫn giữ cho album chi tiết trong hộp xem nhanh
  thumb?: string;
  gallery?: string[];
  tag?: string;
  desc: string;
  variants?: { id: string; label: string; surcharge: number }[];
};

export const products: Product[] = [
  // ---- 10 kiểu bó hoa bán chạy ----
  {
    id: "bo-hong-do",
    name: "Bó Hồng Đỏ Classic",
    price: 650000,
    category: "Hoa bó",
    species: ["Hoa hồng"],
    image: rose,
    tag: "Bán chạy",
    desc: "Hai mươi đoá hồng đỏ Đà Lạt cuống dài, gói giấy kraft buộc dây gai — tone phố cổ lãng mạn, kinh điển không bao giờ lỗi mốt.",
  },
  {
    id: "bo-cuc-tana",
    name: "Bó Cúc Tana Thanh Thanh",
    price: 380000,
    category: "Hoa bó",
    species: ["Hoa cúc"],
    image: tana,
    desc: "Cúc Tana trắng kem nhỏ xinh, gói giấy ngà nhẹ nhàng — một bó hoa 'thanh thanh' đúng nghĩa cho người thương dịu dàng.",
  },
  {
    id: "bo-huong-duong",
    name: "Bó Hướng Dương Rực Rỡ",
    price: 550000,
    category: "Hoa bó",
    species: ["Hoa hướng dương", "Hoa cúc"],
    image: sunflower,
    tag: "Tốt nghiệp",
    desc: "Hướng dương và cúc hoạ mi — một bó nắng nhỏ cho ngày tốt nghiệp, sinh nhật hay chúc mừng thăng tiến.",
  },
  {
    id: "bo-baby-khong-lo",
    name: "Bó Baby Trắng Khổng Lồ",
    price: 420000,
    category: "Hoa bó",
    species: ["Hoa baby"],
    image: baby,
    desc: "Một ôm baby trắng bồng bềnh trong giấy hồng phấn — mây trắng giữa phố, nhẹ như một lời thì thầm.",
  },
  {
    id: "bo-tulip-toi-gian",
    name: "Bó Tulip Tối Giản",
    price: 890000,
    category: "Hoa bó",
    species: ["Tulip"],
    image: tulip,
    tag: "Mới về",
    desc: "Tulip trắng và hồng nhập Hà Lan, gói giấy ngà tối giản thắt nơ lụa — hiện đại, sang và rất 'chill'.",
  },
  {
    id: "bo-tu-cau",
    name: "Bó Cẩm Tú Cầu Tone Hàn",
    price: 720000,
    category: "Hoa bó",
    species: ["Hoa cẩm tú cầu"],
    image: tucau,
    tag: "Tone Hàn Quốc",
    desc: "Cẩm tú cầu xanh hồng pastel mix lá bạc, gói kiểu Hàn Quốc — nhẹ nhàng mà vẫn nổi bật trong mọi tấm hình.",
  },
  {
    id: "bo-cat-tuong",
    name: "Bó Cát Tường Hồng Kem",
    price: 460000,
    category: "Hoa bó",
    species: ["Hoa cát tường", "Hoa hồng"],
    image: cattuong,
    desc: "Cát tường hồng phối hồng kem nhẹ nhàng — loài hoa của may mắn, dành tặng người mình quý.",
  },
  {
    id: "bo-ly-kep",
    name: "Bó Ly Kép Thơm Ngát",
    price: 980000,
    category: "Hoa bó",
    species: ["Hoa ly"],
    image: lykep,
    tag: "Sang trọng",
    desc: "Ly kép trắng cánh đôi thơm ngát, dáng bó cao sang trọng — món quà đẳng cấp cho những dịp trọng đại.",
  },
  {
    id: "bo-hong-kem-dau",
    name: "Bó Hồng Kem Dâu",
    price: 590000,
    category: "Hoa bó",
    species: ["Hoa hồng", "Hoa thanh liễu"],
    image: hongkem,
    desc: "Hồng kem dâu phối thanh liễu trắng, gói giấy kraft mộc mạc — ngọt ngào như một chiếc bánh kem dâu.",
  },
  {
    id: "bo-mua-thu",
    name: "Bó Mùa Thu Hà Nội",
    price: 350000,
    category: "Hoa bó",
    species: ["Hoa cúc"],
    image: hoami,
    tag: "Theo mùa",
    desc: "Cúc hoạ mi trắng tinh phối hoa dại, buộc dây gai — cả một mùa thu Hà Nội gói trong tay bạn.",
  },

  // ---- 10 kiểu lẵng & giỏ hoa ----
  {
    id: "gio-go-pastel",
    name: "Giỏ Gỗ Pastel Để Bàn",
    price: 450000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa hồng", "Hoa cát tường"],
    image: giogo,
    desc: "Giỏ gỗ mộc mạc tone pastel với hồng và cát tường — vừa vặn trên bàn làm việc hay góc bàn trà.",
  },
  {
    id: "lang-khai-truong",
    name: "Lẵng Khai Trương 2 Tầng",
    price: 1800000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa thiên điểu", "Hoa mõm sói", "Hoa hồng"],
    image: khaitruong,
    tag: "Khai trương",
    desc: "Lẵng hai tầng hiện đại với thiên điểu, mõm sói và hồng đỏ cam — đại cát đại lợi cho ngày khai trương.",
  },
  {
    id: "hop-mica",
    name: "Hộp Mica Giấu Quà",
    price: 1250000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa hồng"],
    image: hopmica,
    tag: "Sang trọng",
    desc: "Hộp mica trong suốt với hồng phấn trắng và ngăn kéo giấu quà — bất ngờ nhân đôi cho người nhận.",
  },
  {
    id: "gio-may-cat-tuong",
    name: "Giỏ Mây Cát Tường Tặng Mẹ",
    price: 520000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa cát tường", "Hoa baby"],
    image: giomay,
    tag: "Sinh nhật mẹ",
    desc: "Giỏ mây đan tay với cát tường hồng và baby trắng — ấm áp, dịu dàng như chính vòng tay mẹ.",
  },
  {
    id: "ke-do-dai-cat",
    name: "Kệ Hoa Đỏ Đại Cát",
    price: 1500000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa hồng", "Hoa đồng tiền", "Hoa ly"],
    image: khaitruong,
    desc: "Kệ chúc mừng tone đỏ rực rỡ với hồng, đồng tiền và ly — khí thế đại cát cho mọi dịp chúc mừng lớn.",
  },
  {
    id: "gio-pingpong",
    name: "Giỏ Cúc Pingpong Xinh Xắn",
    price: 480000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa cúc", "Hoa cẩm chướng"],
    image: pingpong,
    desc: "Cúc pingpong xanh trắng tròn trịa mix cẩm chướng hồng — một giỏ hoa nhỏ mà 'có võ', ai nhận cũng mê.",
  },
  {
    id: "chau-lan-ho-diep",
    name: "Chậu Lan Hồ Điệp 5 Cành",
    price: 2500000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa lan"],
    image: lanhodiep,
    tag: "Quà tặng sếp",
    desc: "Lan hồ điệp trắng 5 cành trong chậu gốm viền vàng — sang quý, bền đẹp hàng tháng, quà tặng đẳng cấp.",
  },
  {
    id: "lang-ly-chuc-suc-khoe",
    name: "Lẵng Ly Phối Hồng Ngoại",
    price: 1250000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa ly", "Hoa hồng"],
    image: basket,
    tag: "Chúc sức khỏe",
    desc: "Lẵng mây đan với ly trắng, hồng ngoại và khuynh diệp — lời chúc bình an gửi đến người đang cần nghỉ dưỡng.",
  },
  {
    id: "gio-dong-tien-nhi",
    name: "Giỏ Đồng Tiền Nhí Tài Lộc",
    price: 420000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa đồng tiền"],
    image: dongtien,
    tag: "Để quầy thu ngân",
    desc: "Giỏ đồng tiền nhí cam vàng hồng rực rỡ — đặt quầy thu ngân vừa xinh vừa cầu tài lộc cho chủ shop.",
  },
  {
    id: "binh-thuy-tinh",
    name: "Bình Thủy Tinh Cắm Sẵn",
    price: 850000,
    category: "Lẵng & giỏ hoa",
    species: ["Hoa ly", "Hoa hồng"],
    image: binhthuytinh,
    tag: "Phòng khách",
    desc: "Bình thủy tinh cao cấp cắm sẵn ly trắng và hồng kem — mang về là đặt ngay giữa phòng khách, không cần cắm lại.",
  },

  // ---- Hoa cưới & xe hoa ----
  {
    id: "cuoi-linh-lan",
    name: "Hoa Cưới Linh Lan Quý Phái",
    price: 2200000,
    category: "Hoa cưới & xe hoa",
    species: ["Hoa ly"],
    image: linlan,
    tag: "Đặt trước 5 ngày",
    desc: "Bó linh lan trắng thuần khiết buộc ruy-băng lụa dài — loài hoa cưới của hoàng gia, cho cô dâu thanh lịch nhất.",
  },
  {
    id: "cuoi-hong-trang",
    name: "Hoa Cưới Hồng Trắng Dáng Tròn",
    price: 1500000,
    category: "Hoa cưới & xe hoa",
    species: ["Hoa hồng"],
    image: hongtrang,
    desc: "Bó hồng trắng tinh khôi dáng tròn cổ điển, cuống quấn satin — vẻ đẹp vượt thời gian cho ngày trọng đại.",
  },
  {
    id: "cuoi-tulip-ru",
    name: "Hoa Cưới Tulip Dáng Rủ",
    price: 1800000,
    category: "Hoa cưới & xe hoa",
    species: ["Tulip"],
    image: tulipru,
    tag: "Dáng rủ",
    desc: "Tulip trắng hồng dáng rủ thác nước cùng lá bạc và ruy-băng lụa — lãng mạn, bay bổng trong từng bước đi.",
  },
  {
    id: "cuoi-mau-don",
    name: "Hoa Cưới Mẫu Đơn",
    price: 1800000,
    category: "Hoa cưới & xe hoa",
    species: ["Hoa hồng"],
    image: wedding,
    tag: "Đặt trước 3 ngày",
    desc: "Mẫu đơn trắng, hồng David Austin và khuynh diệp, cuống quấn lụa dài — bó cưới 'vườn dại' đang được yêu thích nhất.",
  },
  {
    id: "cai-ao-chu-re",
    name: "Hoa Cài Áo Chú Rể",
    price: 150000,
    category: "Hoa cưới & xe hoa",
    species: ["Hoa hồng", "Hoa baby"],
    image: caiao,
    desc: "Boutonniere hồng trắng, baby và lá bạc — đồng điệu với hoa cô dâu, kèm hoa cài cho hai bên bố mẹ.",
  },
  {
    id: "xe-hoa-trai-tim",
    name: "Trang Trí Xe Hoa Trái Tim",
    price: 2500000,
    category: "Hoa cưới & xe hoa",
    species: ["Hoa hồng", "Hoa cẩm tú cầu"],
    image: xehoa,
    thumb: xehoatraitim,
    gallery: [xehoatraitim, xehoa],
    tag: "Trọn gói",
    desc: "Cụm hoa trái tim lớn trên mui xe với hồng đỏ và cẩm tú cầu hồng, kèm hai cụm hoa gương chiếu hậu.",
  },
  {
    id: "xe-hoa-ruy-bang",
    name: "Trang Trí Xe Hoa Ruy-băng",
    price: 1200000,
    category: "Hoa cưới & xe hoa",
    species: ["Hoa hồng", "Hoa cẩm chướng"],
    image: xehoa2,
    thumb: xehoacua,
    gallery: [xehoacua, xehoa2],
    desc: "Cụm hoa mini kẹp tay nắm 4 cửa, cụm hoa đuôi xe và dải ruy-băng lụa dọc thân xe — thanh lịch, nhẹ nhàng.",
  },

  // ---- Hoa phụ liệu ----
  {
    id: "phu-baby-mau",
    name: "Hoa Baby Nhuộm Màu",
    price: 180000,
    category: "Hoa phụ liệu",
    species: ["Hoa baby"],
    image: babymau,
    tag: "Bó kèm hoặc cắm riêng",
    desc: "Baby nhuộm hồng, xanh, tím pastel — bó kèm cho hoa chính hoặc cắm độc lập đều đẹp mê ly.",
  },
  {
    id: "phu-la-bac",
    name: "Lá Bạc (Khuynh Diệp)",
    price: 120000,
    category: "Hoa phụ liệu",
    species: ["Lá & phụ kiện"],
    image: labac,
    desc: "Lá bạc đô la tròn xanh bạc — 'linh hồn' của mọi bó hoa tone Hàn, thơm nhẹ và cực bền.",
  },
  {
    id: "phu-tung-nho",
    name: "Tùng Nho",
    price: 90000,
    category: "Hoa phụ liệu",
    species: ["Lá & phụ kiện"],
    image: tungnho,
    desc: "Tùng nho xanh mướt mềm như lông vũ — điểm xuyết xanh giúp bó hoa thêm tầng, thêm sâu.",
  },
  {
    id: "phu-thuy-truc",
    name: "Lá Thủy Trúc & Cỏ Đồng Tiền",
    price: 80000,
    category: "Hoa phụ liệu",
    species: ["Lá & phụ kiện"],
    image: thuytruc,
    desc: "Lá thủy trúc dài thanh mảnh và cỏ đồng tiền xanh tươi — nền xanh hoàn hảo cho lẵng hoa và kệ chúc mừng.",
  },

  // ---- Cành lẻ tự cắm ----
  {
    id: "hong-do-chuc",
    name: "Hồng Đỏ Cành Dài (chục)",
    price: 380000,
    category: "Hoa bó",
    species: ["Hoa hồng"],
    image: stems,
    tag: "Cành lẻ",
    desc: "Mười cành hồng đỏ cuống dài, bán theo chục để bạn tự cắm bình tại nhà.",
  },
];

export const streets = [
  { src: s4, title: "Tiệm hoa cửa xanh", caption: "Phố cổ, chiều muộn" },
  { src: s1, title: "Xe đạp chở mùa xuân", caption: "Hà Nội, 1992" },
  { src: s2, title: "Chợ hoa Hàng Lược", caption: "Sương sớm, 1988" },
  { src: s3, title: "Gánh cúc hoạ mi", caption: "Cuối thu, phố Phan Đình Phùng" },
  { src: s5, title: "Đèn lồng sau mưa", caption: "Đêm phố cũ" },
];

export const flowerGuide = [
  { name: "Hoa hồng", image: rose, meaning: "Tình yêu và sự trân trọng. Đứng đầu doanh số mọi tiệm hoa Việt — hồng đỏ, hồng phấn, hồng kem, hồng cổ Đà Lạt và Sa Pa.", care: "Cắt xéo gốc 2cm mỗi ngày, thay nước sạch, tránh nắng trực tiếp." },
  { name: "Hoa cúc", image: tana, meaning: "Sự trường thọ và chân thành. Cúc lưới, cúc đại đóa, cúc chùm, cúc pingpong, cúc Tana — và cúc họa mi trắng tinh mỗi độ thu về.", care: "Cúc rất bền: thay nước 2 ngày một lần, tỉa bớt lá ngập nước." },
  { name: "Hoa ly", image: lykep, meaning: "Sự thuần khiết, thanh cao. Ly vàng nhọn, ly ù hồng vàng, ly kép thơm ngát — hoa của những dịp trang trọng.", care: "Ngắt nhụy khi hoa nở để không dây phấn, thay nước hai ngày một lần." },
  { name: "Hoa đồng tiền", image: dongtien, meaning: "Tiền tài và may mắn — đúng như tên gọi. Đồng tiền thường, đồng tiền nhí và đồng tiền tua rua đều rực rỡ.", care: "Cuống mềm, cắm nước nông; kê thêm que tre nếu hoa cúi đầu." },
  { name: "Hoa hướng dương", image: sunflower, meaning: "Niềm tin, sự hướng về phía sáng. Quà tốt nghiệp, sinh nhật và chúc mừng được chọn nhiều nhất mùa hè.", care: "Nhiều nước, cắt gốc mỗi ngày; hoa sẽ xoay theo ánh sáng trong phòng." },
  { name: "Hoa cẩm chướng", image: pingpong, meaning: "Tình mẫu tử và sự biết ơn. Cẩm chướng hồng, đỏ, trắng, xanh bơ — bền đến hai tuần trong bình.", care: "Vặt héo tận gốc, đổi nước thường xuyên để tránh mùi cuống." },
  { name: "Hoa cát tường", image: cattuong, meaning: "Biểu tượng may mắn, tài lộc — đúng nghĩa 'cát tường'. Thường được chọn cắm lẵng chúc mừng và tặng mẹ.", care: "Hoa mềm, tránh để nước dính lên cánh; cắm nơi mát." },
  { name: "Hoa lan", image: lanhodiep, meaning: "Sang trọng và quý phái. Lan hồ điệp cành, chậu và lan vũ nữ — món quà tặng đẳng cấp của người Việt.", care: "Lan hồ điệp chậu tưới tuần một lần, để nơi có sáng gián tiếp." },
  { name: "Hoa cẩm tú cầu", image: tucau, meaning: "Lời cảm ơn chân thành và sự thấu hiểu. Hoa điểm tone pastel không thể thiếu trong các bó kiểu Hàn.", care: "Rất khát nước — cắm nước đầy, phun sương lên cánh hoa." },
  { name: "Hoa thiên điểu", image: khaitruong, meaning: "Chim thiên đường — tự do và thịnh vượng. Dáng hiện đại, là điểm nhấn của kệ khai trương cao cấp.", care: "Cắm nước sạch, hoa bền 7-10 ngày; tránh gió lạnh trực tiếp." },
  { name: "Hoa mõm sói", image: khaitruong, meaning: "Sức mạnh và lòng dũng cảm. Thường xuất hiện ở kệ chúc mừng, và cũng là hoa tang lễ trang trọng.", care: "Cắt gốc xiên, thay nước mỗi hai ngày." },
  { name: "Hoa Dơn (Lay Ơn)", image: gladiolus, meaning: "Dáng vươn thẳng gợi sự kiên định, lòng trân trọng và lời chúc tốt đẹp. Quen thuộc trong bình hoa ngày Tết và những dịp sum họp.", care: "Cắt xéo gốc, bỏ lá ngập nước và thay nước sạch thường xuyên; đặt bình nơi mát để nụ nở dần." },
  { name: "Hoa loa kèn", image: trumpet, meaning: "Sắc trắng gợi sự trong trẻo và nét thanh lịch. Những cành loa kèn gắn với tháng Tư Hà Nội, như một lời thương giản dị gửi mùa phố.", care: "Cắt xéo gốc, thay nước sạch mỗi ngày và bỏ lá dưới mực nước. Nhẹ tay bỏ bao phấn khi hoa nở; tránh nắng gắt." },
  { name: "Hoa sen", image: lotus, meaning: "Biểu tượng của sự thanh cao và bình an trong văn hóa Việt. Một cành sen mang nét mộc mạc, trang nhã của những ngày hè.", care: "Cắt lại gốc, cắm ngay trong bình nước sạch sâu và giữ nơi mát. Thay nước mỗi ngày; sen cắt cành thường có thời gian thưởng hoa ngắn." },
  { name: "Hoa thanh liễu", image: hongkem, meaning: "Nét thanh tao, nhã nhặn. Bền lâu với nhiều màu: trắng, hồng, đỏ, vàng — hay đi kèm bó hồng kem.", care: "Tỉa lá dưới mực nước, thay nước đều đặn." },
  { name: "Hoa tuyết mai", image: hoami, meaning: "Sự tinh khôi đầu xuân — đặc trưng Tết và mùa xuân miền Bắc, cành gân guốc điểm hoa trắng như tuyết.", care: "Cắm nước mát, phun sương hằng ngày để nụ nở đều." },
  { name: "Tulip", image: tulip, meaning: "Tình yêu hoàn hảo. Thế kỷ 17 ở Hà Lan, một củ tulip từng đắt hơn cả một căn nhà.", care: "Cắm nước mát, ít nước; tulip vẫn mọc dài và hướng về phía sáng." },
  { name: "Hoa baby", image: baby, meaning: "Sự trong trẻo và tình yêu bền lâu. Bó kèm hoặc cắm độc lập đều đẹp; baby nhuộm màu đang rất được ưa chuộng.", care: "Giữ nơi khô thoáng; baby có thể phơi khô làm hoa vĩnh cửu." },
  { name: "Lá đệm & phụ kiện", image: labac, meaning: "Lá bạc (khuynh diệp đô la), tùng nho, cỏ đồng tiền, lá thủy trúc — nền xanh làm nên hồn của mọi bó hoa.", care: "Lá bạc rất bền, có thể để khô dùng dần; tỉa lá ngập nước." },
];

export const posts = [
  { title: "Mùa cúc hoạ mi đã về trên phố", date: "28 Tháng 10, 2026", tag: "Mùa hoa", image: s3, excerpt: "Chỉ khoảng ba tuần cuối thu, những gánh hoạ mi trắng muốt lại xuất hiện khắp Hà Nội." },
  { title: "Năm cách giữ hoa tươi lâu hơn ở nhà", date: "20 Tháng 10, 2026", tag: "Mẹo chăm hoa", image: s4, excerpt: "Từ cắt gốc dưới vòi nước đến một thìa đường nhỏ — những bí quyết của người bán hoa." },
  { title: "Xu hướng bó hoa 'vườn dại' 2026", date: "12 Tháng 10, 2026", tag: "Xu hướng", image: s2, excerpt: "Bó hoa không còn tròn trịa, mà phóng khoáng như vừa hái từ một khu vườn sau nhà." },
];

// Sản phẩm nổi bật — bộ chọn lọc hiển thị ở trang chủ ("hoa đang có hôm nay")
export const featuredIds = [
  "bo-hong-do",
  "bo-tulip-toi-gian",
  "bo-huong-duong",
  "bo-baby-khong-lo",
  "bo-tu-cau",
  "bo-ly-kep",
  "lang-khai-truong",
  "gio-pingpong",
];
export const isFeatured = (p: Product) => featuredIds.includes(p.id);

// Hoa cần đặt trước: hoa cưới, xe hoa, kệ/lẵng lớn, hoa nhập theo đợt
export const preorderIds = [
  "bo-tulip-toi-gian",
  "lang-khai-truong",
  "hop-mica",
  "ke-do-dai-cat",
  "chau-lan-ho-diep",
  "binh-thuy-tinh",
  "cuoi-linh-lan",
  "cuoi-hong-trang",
  "cuoi-tulip-ru",
  "cuoi-mau-don",
  "cai-ao-chu-re",
  "xe-hoa-trai-tim",
  "xe-hoa-ruy-bang",
];
export const stockLabel = (p: Product) => (preorderIds.includes(p.id) ? "Đặt trước" : "Có hôm nay");

// Tên trong từ điển hoa → tên loài dùng cho bộ lọc cửa hàng
export const speciesForGuide = (name: string): Species | null => {
  if (name === "Hoa Dơn (Lay Ơn)") return "Hoa lay ơn";
  if (name === "Lá đệm & phụ kiện") return "Lá & phụ kiện";
  return (speciesList as string[]).includes(name) ? (name as Species) : null;
};

export const formatVnd = (n: number) => n.toLocaleString("vi-VN") + " đ";
