import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "motion/react";
import { Flower2, MailCheck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WRAPPING_MATERIALS, LETTER_TIMING, nextLetterPhase, type LetterPhase } from "@/lib/stationery";
import newspaper from "@/assets/stationery-newspaper.jpg";
import kraft from "@/assets/stationery-kraft.jpg";
import silk from "@/assets/stationery-silk.jpg";
import sprig from "@/assets/stationery-pressed-sprig.png";

const paperImages = [newspaper, kraft, silk];

function PaperTexture({ selected }: { selected: number }) {
  return <>{WRAPPING_MATERIALS.map((item, i) => <div key={item.id} className={`envelope-texture ${selected === i ? "is-selected" : ""}`}><img src={paperImages[i]} alt="" loading="lazy" height={1024} className={item.texture} /></div>)}</>;
}

export function HandcraftStudio() {
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [phase, setPhase] = useState<LetterPhase>("editing");
  const phaseRef = useRef<LetterPhase>("editing");
  const run = useRef(0);
  const letter = useAnimationControls();
  const flap = useAnimationControls();
  const seal = useAnimationControls();
  const reducedMotion = useReducedMotion();
  const duration = (seconds: number) => reducedMotion ? 0 : seconds;
  const updatePhase = (value: LetterPhase) => { phaseRef.current = value; setPhase(value); };

  useEffect(() => () => { run.current += 1; letter.stop(); flap.stop(); seal.stop(); }, [letter, flap, seal]);

  async function closeLetter() {
    if (phaseRef.current !== "editing") return;
    const id = ++run.current;
    updatePhase(nextLetterPhase("editing"));
    await letter.start({ y: 340, transition: { duration: duration(LETTER_TIMING.tucking), ease: "easeInOut" } });
    if (run.current !== id) return;
    updatePhase(nextLetterPhase("tucking"));
    await flap.start({ scaleY: 1, transition: { duration: duration(LETTER_TIMING.folding), ease: "easeInOut" } });
    if (run.current !== id) return;
    updatePhase(nextLetterPhase("folding"));
    await seal.start({ opacity: 1, scale: [1.08, .97, 1], y: [ -4, 0, 0 ], transition: { duration: duration(LETTER_TIMING.sealing), ease: "easeOut" } });
    if (run.current === id) updatePhase(nextLetterPhase("sealing"));
  }

  async function reopen() {
    if (["editing", "unsealing", "unfolding", "lifting"].includes(phaseRef.current)) return;
    const id = ++run.current;
    letter.stop(); flap.stop(); seal.stop();
    updatePhase("unsealing");
    await seal.start({ opacity: 0, scale: 1.12, transition: { duration: duration(.2) } });
    if (run.current !== id) return;
    updatePhase(nextLetterPhase("unsealing"));
    await flap.start({ scaleY: -1, transition: { duration: duration(.35), ease: "easeInOut" } });
    if (run.current !== id) return;
    updatePhase(nextLetterPhase("unfolding"));
    await letter.start({ y: 0, transition: { duration: duration(.5), ease: "easeOut" } });
    if (run.current === id) updatePhase(nextLetterPhase("lifting"));
  }

  function changeMaterial(index: number) {
    if (index === selected) return;
    void reopen();
    setSelected(index);
  }
  const sealed = phase === "sealed";
  const closing = ["tucking", "folding", "sealing"].includes(phase);
  const folded = ["folding", "sealing", "sealed", "unsealing"].includes(phase);

  const letterContent = <>
    <Flower2 aria-hidden="true" className="mb-3 h-6 w-6 self-end text-primary" strokeWidth={1} />
    <p className="stationery-message">{message || "Có những điều, chỉ một bông hoa cũng đủ nói thay…"}</p>
    <p className="stationery-signature">Thương mến,<br />{signature.trim() || "Hương Ly"}</p>
  </>;

  return <section className="mx-auto max-w-7xl px-6 py-20">
    <p className="text-xs uppercase tracking-widest text-primary">Số 04 · Chút tỉ mẩn của người gói</p>
    <h2 className="mt-3 text-4xl leading-tight md:text-5xl">Góc gói hoa thủ công <em className="text-secondary">& viết thiệp tay</em></h2>
    <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="min-w-0">
        <h3 className="text-2xl">Nếp giấy gói thương</h3>
        <div role="group" aria-label="Chọn giấy gói" className="mt-5 flex flex-wrap gap-2">{WRAPPING_MATERIALS.map((item, i) => <Button key={item.id} variant="outline" aria-pressed={selected === i} onClick={() => changeMaterial(i)} className={`h-auto min-h-10 whitespace-normal bg-transparent text-xs ${selected === i ? "border-primary text-primary" : "border-border"}`}>{item.name}</Button>)}</div>
        <div className={`stationery-scene stationery-${WRAPPING_MATERIALS[selected]?.id} ${folded ? "is-folded" : ""}`} data-letter-phase={phase} aria-label={`Thiệp trong phong bì ${WRAPPING_MATERIALS[selected]?.name}`}>
          <div className="stationery-back envelope-surface"><PaperTexture selected={selected} /></div>
          <motion.div animate={flap} initial={{ scaleY: -1 }} className="stationery-flap"><div className="stationery-flap-face envelope-surface"><PaperTexture selected={selected} /></div></motion.div>
          <div className="stationery-letter-lane" aria-hidden="true">
            <motion.img animate={letter} initial={{ y: 0 }} src={sprig} alt="" width={576} height={1152} loading="lazy" className="stationery-botanical" />
            <motion.article animate={letter} initial={{ y: 0 }} className="stationery-letter stationery-inner-letter grain">{letterContent}</motion.article>
          </div>
          <div className="stationery-pocket envelope-surface"><PaperTexture selected={selected} /><span className="envelope-seam" />{selected === 0 && <span className="stationery-postmark" aria-hidden="true">HÀ NỘI<span>HƯƠNG LY</span></span>}</div>
          {selected === 1 && <div className="stationery-buttons" aria-hidden="true"><i /><i /></div>}
          <motion.div initial={{ opacity: 0, scale: 1.08 }} animate={seal} className={`stationery-closure ${selected === 1 ? "stationery-tie" : "stationery-wax"}`} aria-hidden="true">{selected === 1 ? <span /> : <><span>HL</span><small>HƯƠNG LY</small></>}</motion.div>
          {sealed && <Button variant="ghost" onClick={() => void reopen()} className="stationery-open-target" aria-label="Mở phong bì để viết tiếp" />}
        </div>
        <p className="mt-5 text-center font-display text-xl italic text-muted-foreground">{WRAPPING_MATERIALS[selected]?.name}</p>
      </div>
      <div className="min-w-0">
        <label htmlFor="loi-thiep" className="block font-display text-2xl">Lời thương gửi lại</label>
        <Textarea id="loi-thiep" value={message} maxLength={300} onFocus={() => void reopen()} onChange={e => { setMessage(e.target.value); void reopen(); }} placeholder="Gửi người mình thương…" className="mt-4 min-h-32 resize-none bg-transparent" />
        <p className="mt-2 text-right text-xs text-muted-foreground">{message.length}/300</p>
        <label htmlFor="chu-ky" className="mt-5 block font-display text-xl">Chữ ký</label>
        <Input id="chu-ky" value={signature} maxLength={80} onFocus={() => void reopen()} onChange={e => { setSignature(e.target.value); void reopen(); }} placeholder="Ký tên của bạn (Mặc định: Hương Ly)" className="mt-3 h-11 bg-transparent" />
        <Button onClick={() => sealed ? void reopen() : void closeLetter()} disabled={phase !== "editing" && !sealed} variant="outline" className="mt-6 h-auto min-h-11 max-w-full whitespace-normal border-primary/60 bg-transparent px-5 py-3 text-primary">{sealed ? <RotateCcw strokeWidth={1.5} /> : <MailCheck strokeWidth={1.5} />}{sealed ? "Mở thư & viết tiếp" : closing ? "Đang gói ghém…" : "Gói ghém & Niêm phong thư"}</Button>
        <p className="sr-only" role="status">{sealed ? "Thư đã được niêm phong." : phase === "editing" ? "Thư đang mở để viết." : "Phong bì đang chuyển động."}</p>
        <article className="stationery-letter stationery-live-card grain mt-8" aria-label="Thiệp viết tay">{letterContent}</article>
      </div>
    </div>
  </section>;
}
