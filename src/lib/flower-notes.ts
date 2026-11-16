import type { Species } from "./data";
import roseRed from "@/assets/dictionary-rose-red.webp";
import rosePink from "@/assets/dictionary-rose-pink.webp";
import roseCream from "@/assets/dictionary-rose-cream.webp";
import chrysWhite from "@/assets/dictionary-chrysanthemum-white.webp";
import chrysYellow from "@/assets/dictionary-chrysanthemum-yellow.webp";
import lilyWhite from "@/assets/dictionary-lily-white.webp";
import lilyYellow from "@/assets/dictionary-lily-yellow.webp";
import lilyRed from "@/assets/dictionary-lily-red.webp";
import lilyDouble from "@/assets/dictionary-lily-double.webp";
import donRed from "@/assets/dictionary-gladiolus-red.webp";
import donYellow from "@/assets/dictionary-gladiolus-yellow.webp";
import donPink from "@/assets/dictionary-gladiolus-pink.webp";
import lotusPink from "@/assets/dictionary-lotus-pink.webp";
import lotusWhite from "@/assets/dictionary-lotus-white.webp";
import trumpet from "@/assets/dictionary-trumpet-white.webp";
import sunflower from "@/assets/dictionary-sunflower-yellow.webp";
import tulipPink from "@/assets/dictionary-tulip-pink.webp";
import tulipWhite from "@/assets/dictionary-tulip-white.webp";
import hydrangeaBlue from "@/assets/dictionary-hydrangea-blue.webp";
import hydrangeaPink from "@/assets/dictionary-hydrangea-pink.webp";
import babyWhite from "@/assets/dictionary-baby-white.webp";
import babyPink from "@/assets/dictionary-baby-pink.webp";
import gerberaOrange from "@/assets/dictionary-gerbera-orange.webp";
import gerberaPink from "@/assets/dictionary-gerbera-pink.webp";
import lisianthusPink from "@/assets/dictionary-lisianthus-pink.webp";
import lisianthusPurple from "@/assets/dictionary-lisianthus-purple.webp";
import lisianthusWhite from "@/assets/dictionary-lisianthus-white.webp";
import carnationPink from "@/assets/dictionary-carnation-pink.webp";
import carnationRed from "@/assets/dictionary-carnation-red.webp";
import carnationWhite from "@/assets/dictionary-carnation-white.webp";
import orchid from "@/assets/dictionary-orchid-white.webp";
import bird from "@/assets/dictionary-bird-orange.webp";
import snapdragon from "@/assets/dictionary-snapdragon-pink.webp";
import waxflower from "@/assets/dictionary-waxflower-pink.webp";
import spiraea from "@/assets/dictionary-spiraea-white.webp";
import eucalyptus from "@/assets/dictionary-eucalyptus.webp";

export type FlowerNote = { label: string; meaning: string; image: string };
export const flowerColorNotes: Partial<Record<Species, FlowerNote[]>> = {
 "Hoa hồng": [
  { label: "Hồng Đỏ", image: roseRed, meaning: "Tình yêu nồng nàn và sự trân trọng sâu sắc; một lời thương rõ ràng, chân thành." },
  { label: "Hồng Phấn", image: rosePink, meaning: "Nét dịu dàng, lòng biết ơn và tình cảm trìu mến dành cho người mình quý." },
  { label: "Hồng Kem", image: roseCream, meaning: "Sự thanh nhã và lời quan tâm tinh tế, ấm áp như một lời chúc bình an." },
 ],
 "Hoa cúc": [
  { label: "Cúc Trắng", image: chrysWhite, meaning: "Gợi sự chân thành, tinh khôi và tưởng nhớ. Khi tặng, nên cân nhắc dịp và phong tục của người nhận." },
  { label: "Cúc Vàng", image: chrysYellow, meaning: "Gợi sự trường thọ, niềm vui và sung túc; quen thuộc trong bình hoa ngày Tết và những lời chúc an lành." },
 ],
 "Hoa ly": [
  { label: "Ly Trắng", image: lilyWhite, meaning: "Sự thuần khiết, trang trọng và lòng kính trọng — một lời thương thanh nhã." },
  { label: "Ly Vàng", image: lilyYellow, meaning: "Niềm vui, sự ấm áp và lời chúc tốt lành dành cho người thân, bạn bè." },
  { label: "Ly Đỏ", image: lilyRed, meaning: "Tình cảm nồng nàn và sự trân trọng sâu sắc, hợp những lời chúc đầy yêu thương." },
  { label: "Ly Kép", image: lilyDouble, meaning: "Ly kép là dạng hoa nhiều lớp cánh, không phải một màu riêng; gợi nét quý phái và đủ đầy. Ý nghĩa còn tùy sắc hoa được chọn." },
 ],
 "Hoa lay ơn": [
  { label: "Dơn Đỏ", image: donRed, meaning: "Gợi sự nhiệt thành, sức mạnh và lời chúc may mắn trong những dịp sum họp, chúc mừng." },
  { label: "Dơn Vàng", image: donYellow, meaning: "Sự lạc quan, ấm áp và sung túc; mang sắc nắng vào bình hoa ngày Tết." },
  { label: "Dơn Hồng", image: donPink, meaning: "Sự dịu dàng, trìu mến và lòng biết ơn dành cho người mình quý." },
 ],
 "Hoa sen": [
  { label: "Sen Hồng", image: lotusPink, meaning: "Nét đằm thắm, thanh cao và sự gắn bó với văn hóa Việt." },
  { label: "Sen Trắng", image: lotusWhite, meaning: "Sự tinh khiết, bình an và một vẻ đẹp giản dị, tĩnh tại." },
 ],
 "Hoa loa kèn": [{ label: "Loa Kèn Trắng", image: trumpet, meaning: "Sự trong trẻo và nét thanh lịch giản dị, gắn với những ngày tháng Tư Hà Nội." }],
 "Hoa hướng dương": [{ label: "Hướng Dương Vàng", image: sunflower, meaning: "Niềm tin, nghị lực và sự lạc quan; lời chúc hướng về ngày mai tươi sáng." }],
 "Tulip": [
  { label: "Tulip Hồng", image: tulipPink, meaning: "Sự quan tâm, trìu mến và lời chúc hạnh phúc nhẹ nhàng." },
  { label: "Tulip Trắng", image: tulipWhite, meaning: "Nét tinh khôi, sự chân thành và lời làm hòa dịu dàng." },
 ],
 "Hoa cẩm tú cầu": [
  { label: "Cẩm Tú Cầu Xanh", image: hydrangeaBlue, meaning: "Sự thấu hiểu, lòng biết ơn và một lời xin lỗi chân thành." },
  { label: "Cẩm Tú Cầu Hồng", image: hydrangeaPink, meaning: "Tình cảm ấm áp và lời thương trìu mến, tròn đầy như những cụm hoa." },
 ],
 "Hoa baby": [
  { label: "Baby Trắng", image: babyWhite, meaning: "Sự trong trẻo và tình yêu bền lâu, nhẹ nhàng như một làn mây." },
  { label: "Baby Hồng", image: babyPink, meaning: "Baby nhuộm hồng gợi sự ngọt ngào và niềm vui; đây là màu nhuộm trang trí, không phải màu hoa tự nhiên." },
 ],
 "Hoa đồng tiền": [
  { label: "Đồng Tiền Cam", image: gerberaOrange, meaning: "Năng lượng, niềm vui và lời chúc may mắn, rực rỡ như nắng sớm." },
  { label: "Đồng Tiền Hồng", image: gerberaPink, meaning: "Sự ngưỡng mộ, dịu dàng và lời cảm ơn dành cho người thân yêu." },
 ],
 "Hoa cát tường": [
  { label: "Cát Tường Hồng", image: lisianthusPink, meaning: "Tình cảm trìu mến, lòng biết ơn và lời chúc mọi điều tốt lành." },
  { label: "Cát Tường Tím", image: lisianthusPurple, meaning: "Sự quý trọng, nét thanh nhã và lời chúc may mắn đầy trân trọng." },
  { label: "Cát Tường Trắng", image: lisianthusWhite, meaning: "Sự chân thành, tinh khôi và lời chúc bình an giản dị." },
 ],
 "Hoa cẩm chướng": [
  { label: "Cẩm Chướng Hồng", image: carnationPink, meaning: "Tình mẫu tử và lòng biết ơn, một lời thương dịu dàng dành cho mẹ." },
  { label: "Cẩm Chướng Đỏ", image: carnationRed, meaning: "Sự yêu mến và ngưỡng mộ sâu sắc, mang nét ấm áp nồng nàn." },
  { label: "Cẩm Chướng Trắng", image: carnationWhite, meaning: "Tình cảm trong sáng, sự chân thành và lời chúc may mắn." },
 ],
 "Hoa lan": [{ label: "Lan Hồ Điệp Trắng", image: orchid, meaning: "Sự trang nhã, quý trọng và lời chúc đủ đầy, an lành." }],
 "Hoa thiên điểu": [{ label: "Thiên Điểu Cam", image: bird, meaning: "Tự do, sức sống và khát vọng vươn xa, như cánh chim hướng tới chân trời." }],
 "Hoa mõm sói": [{ label: "Mõm Sói Hồng", image: snapdragon, meaning: "Sức mạnh bên trong, sự duyên dáng và lòng can đảm dịu dàng." }],
 "Hoa thanh liễu": [{ label: "Thanh Liễu Hồng", image: waxflower, meaning: "Sự bền bỉ và tình cảm dài lâu, gửi trong những bông hoa nhỏ thanh tao." }],
 "Hoa tuyết mai": [{ label: "Tuyết Mai Trắng", image: spiraea, meaning: "Sự tinh khôi, khởi đầu mới và nét thanh khiết của những ngày đầu xuân." }],
 "Lá & phụ kiện": [{ label: "Lá Bạc", image: eucalyptus, meaning: "Một nét xanh bình dị làm dịu không gian và tôn lên sắc hoa bên cạnh." }],
};