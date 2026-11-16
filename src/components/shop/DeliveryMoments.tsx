import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { deliveryMoments, type DeliveryMoment } from "@/lib/delivery-moments";

function MomentVideo({ moment, paused }: { moment: Extract<DeliveryMoment, { kind: "video" }>; paused: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync(); query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const sync = () => {
      if (visible && !paused && !reduced && !document.hidden) void node.play().catch(() => {});
      else node.pause();
    };
    sync(); document.addEventListener("visibilitychange", sync);
    return () => { node.pause(); document.removeEventListener("visibilitychange", sync); };
  }, [visible, paused, reduced]);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry?.isIntersecting ?? false), { threshold: .25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <video ref={ref} src={visible ? moment.src : undefined} poster={moment.poster} autoPlay={visible && !paused && !reduced} muted loop playsInline preload="none" aria-label={moment.caption} />;
}

export function DeliveryMoments() {
  const rail = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: false });
  const moment = selected === null ? undefined : deliveryMoments[selected];
  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    const sync = () => setEdges({ start: node.scrollLeft < 2, end: node.scrollLeft + node.clientWidth >= node.scrollWidth - 2 });
    const observer = new ResizeObserver(sync);
    observer.observe(node); node.addEventListener("scroll", sync, { passive: true }); sync();
    return () => { observer.disconnect(); node.removeEventListener("scroll", sync); };
  }, []);
  function open(index: number) { setMuted(true); setSelected(index); }
  function scroll(direction: number) {
    const node = rail.current;
    if (!node) return;
    node.scrollBy({ left: direction * node.clientWidth, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <section className="delivery-section" aria-labelledby="delivery-title">
    <div className="mx-auto max-w-7xl">
      <header className="delivery-header">
        <div className="min-w-0"><p className="shop-eyebrow">Số 09 · Nhật ký trao gửi phố cũ</p><h2 id="delivery-title">Khoảnh khắc hoa đến tận tay</h2></div>
        <div className="delivery-tools">
          <Button variant="outline" size="icon" className="shop-arrow" title={paused ? "Phát video" : "Tạm dừng video"} aria-label={paused ? "Phát video nhật ký" : "Tạm dừng video nhật ký"} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play /> : <Pause />}</Button>
          <Button variant="outline" size="icon" className="shop-arrow" title="Khoảnh khắc trước" aria-label="Khoảnh khắc trước" disabled={edges.start} onClick={() => scroll(-1)}><ArrowLeft /></Button>
          <Button variant="outline" size="icon" className="shop-arrow" title="Khoảnh khắc tiếp theo" aria-label="Khoảnh khắc tiếp theo" disabled={edges.end} onClick={() => scroll(1)}><ArrowRight /></Button>
        </div>
      </header>
      <div ref={rail} className="delivery-rail" role="region" aria-label="Nhật ký ảnh và video" tabIndex={0}>
        {deliveryMoments.map((item, index) => <article key={item.id} className="delivery-item">
          <Button variant="ghost" className="delivery-photo" aria-label={`Mở ${item.caption}`} onClick={() => open(index)}>
            {item.kind === "video" ? <><MomentVideo moment={item} paused={paused || selected !== null} /><span className="delivery-play"><Play size={18} /><span className="sr-only">Video</span></span></> : <img src={item.src} alt={item.caption} width={480} height={600} loading="lazy" />}
          </Button>
          <p className="delivery-caption"><span>{String(index + 1).padStart(2, "0")}</span>{item.caption}</p>
        </article>)}
      </div>
    </div>
    <Dialog open={moment !== undefined} onOpenChange={isOpen => { if (!isOpen) setSelected(null); }}>
      <DialogContent className="delivery-lightbox">
        {moment && <>
          <DialogTitle className="delivery-lightbox-title">{moment.caption}</DialogTitle>
          <DialogDescription className="sr-only">Nhật ký trao gửi Hương Ly</DialogDescription>
          <div className="delivery-lightbox-media">
            {moment.kind === "video" ? <video key={moment.id} src={moment.src} poster={moment.poster} autoPlay muted={muted} loop playsInline controls preload="metadata" /> : <img src={moment.src} alt={moment.caption} />}
          </div>
          <div className="delivery-lightbox-tools">
            <div className="flex shrink-0 gap-2">
              <Button variant="outline" size="icon" aria-label="Ảnh trước trong nhật ký" disabled={selected === 0} onClick={() => open((selected ?? 0) - 1)}><ArrowLeft /></Button>
              <Button variant="outline" size="icon" aria-label="Ảnh tiếp trong nhật ký" disabled={selected === deliveryMoments.length - 1} onClick={() => open((selected ?? 0) + 1)}><ArrowRight /></Button>
              {moment.kind === "video" && <Button variant="outline" size="icon" disabled={!moment.hasAudio} title={moment.hasAudio ? (muted ? "Bật âm thanh" : "Tắt âm thanh") : "Video gốc không có âm thanh"} aria-label={moment.hasAudio ? (muted ? "Bật âm thanh" : "Tắt âm thanh") : "Video không có âm thanh"} aria-pressed={!muted} onClick={() => setMuted(!muted)}>{muted ? <VolumeX /> : <Volume2 />}</Button>}
            </div>
            <Button variant="boutique" asChild className="delivery-cta"><Link to="/cuahang" search={moment.species ? { loai: moment.species } : {}}>Đặt mẫu hoa tương tự <ArrowRight /></Link></Button>
          </div>
        </>}
      </DialogContent>
    </Dialog>
  </section>;
}