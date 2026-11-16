import type { Species } from "./data";
import don from "@/assets/delivery/delivery-55.webp";
import chrys from "@/assets/delivery/delivery-56.png";
import spiraea from "@/assets/delivery/delivery-57.png";
import orchid from "@/assets/delivery/delivery-58.png";
import spring from "@/assets/delivery/delivery-59.png";
import tulip from "@/assets/delivery/delivery-60.webp";
import sunflowerVideo from "@/assets/delivery/flower-moment-one.mp4";
import branchesVideo from "@/assets/delivery/flower-moment-two.mp4";
import sunflowerPoster from "@/assets/delivery/flower-moment-one.jpg";
import branchesPoster from "@/assets/delivery/flower-moment-two.jpg";

type MomentBase = { id: string; caption: string; species?: Species };
export type DeliveryMoment = MomentBase & ({ kind: "photo"; src: string } | { kind: "video"; src: string; poster: string; hasAudio: boolean });
// Captions describe supplied media only; no invented delivery addresses or customer claims.
export const deliveryMoments: DeliveryMoment[] = [
  { id: "don", kind: "photo", src: don, caption: "Dơn đỏ · Một góc nhà sum vầy", species: "Hoa lay ơn" },
  { id: "chrys", kind: "photo", src: chrys, caption: "Cúc bên xe · Sắc ấm trên phố", species: "Hoa cúc" },
  { id: "sunflower", kind: "video", src: sunflowerVideo, poster: sunflowerPoster, hasAudio: true, caption: "Hướng dương · Nắng trong lòng tay", species: "Hoa hướng dương" },
  { id: "spiraea", kind: "photo", src: spiraea, caption: "Tuyết mai · Nhành trắng bên hiên", species: "Hoa tuyết mai" },
  { id: "orchid", kind: "photo", src: orchid, caption: "Sắc lan vàng · Một lời chúc ấm", species: "Hoa lan" },
  { id: "spring", kind: "photo", src: spring, caption: "Nụ vàng · Giữ một mùa xuân" },
  { id: "tulip", kind: "photo", src: tulip, caption: "Tulip · Lời thương mang theo", species: "Tulip" },
  { id: "branches", kind: "video", src: branchesVideo, poster: branchesPoster, hasAudio: false, caption: "Nhành hoa · Chút xanh trong tay" },
];