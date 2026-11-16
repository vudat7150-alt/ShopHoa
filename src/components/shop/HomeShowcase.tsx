import { useEffect, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CalendarDays, Flower2, Gift, Heart } from "lucide-react";
import { vi } from "date-fns/locale";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { SCENT_GROUPS } from "@/lib/home-themes";
import { reminderSchema } from "@/lib/reminder-schema";
import { saveReminder } from "@/lib/reminders.functions";
export { SeasonalShowcase } from "./SeasonalGarden";
export { HandcraftStudio } from "./HandcraftStudio";

export function ScentSelection() {
  return <section className="grain border-y border-primary/30 bg-cream text-cream-foreground"><div className="mx-auto max-w-7xl px-6 py-20">
    <p className="text-xs uppercase tracking-widest opacity-70">Số 03 · Một chút hương, một chút thương</p>
    <h2 className="mt-3 text-4xl leading-tight md:text-5xl">Chọn hoa theo Tầng Hương & Cảm Xúc</h2>
    <p className="mt-4 max-w-xl text-sm leading-7 opacity-75">Có hương thơm đánh thức một miền ký ức, có sắc hoa thay lời chưa kịp nói.</p>
    <div className="mt-9 grid border border-primary/45 sm:grid-cols-2 lg:grid-cols-4">
      {SCENT_GROUPS.map((group, i) => <div key={group.id} className="scent-cell flex h-full min-w-0 flex-col justify-between px-5 py-8">
        <div><span className="font-display text-sm text-primary">0{i + 1}</span><h3 className="mt-4 leading-tight">{group.title}</h3><p className="mt-3 min-h-12 text-xs leading-6 opacity-75">{group.flowers}</p></div>
        <Button asChild variant="link" className="mt-6 h-auto justify-start self-start whitespace-normal p-0 text-left text-cream-foreground"><Link to="/cuahang" search={{ huong: group.id }}>Xem gợi ý bó hoa →</Link></Button>
      </div>)}
    </div>
  </div></section>;
}

export function OccasionReminder() {
  const [date, setDate] = useState<Date>();
  const [today, setToday] = useState<Date>();
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState<"sinh-nhat" | "ky-niem" | "ngay-cuoi">("sinh-nhat");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  const save = useServerFn(saveReminder);
  useEffect(() => { setToday(new Date()); }, []);
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!date) { setStatus("Bạn chọn ngày muốn nhớ nhé."); return; }
    const parsed = reminderSchema.safeParse({ email, occasion, date: format(date, "yyyy-MM-dd") });
    if (!parsed.success) { setStatus("Bạn kiểm tra lại email và ngày nhé."); return; }
    setPending(true);
    try { const result = await save({ data: parsed.data }); setStatus(result.message); } catch { setStatus("Chưa lưu được lời nhắc. Bạn thử lại sau nhé."); } finally { setPending(false); }
  }
  return <section className="border-y border-primary/30 bg-card"><div className="mx-auto max-w-7xl px-6 py-12">
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]"><div><p className="text-xs uppercase tracking-widest text-primary">Số 05 · Những ngày đáng nhớ</p><h2 className="mt-3 text-3xl">Lịch nhắc nhở dịp quan trọng</h2><p className="mt-3 font-display text-lg italic text-muted-foreground">Đừng để một ngày thương đi qua lặng lẽ.</p></div>
      <form onSubmit={submit} className="min-w-0"><div role="group" aria-label="Dịp quan trọng" className="mb-4 flex flex-wrap gap-3">{([{ id: "sinh-nhat", label: "Sinh nhật", Icon: Gift }, { id: "ky-niem", label: "Kỷ niệm", Icon: Flower2 }, { id: "ngay-cuoi", label: "Ngày cưới", Icon: Heart }] as const).map(({ id, label, Icon }) => <Button key={id} variant="ghost" type="button" aria-pressed={occasion === id} onClick={() => setOccasion(id)} className={`px-2 ${occasion === id ? "text-primary" : "text-muted-foreground"}`}><Icon strokeWidth={1} />{label}</Button>)}</div>
        <div className="grid gap-3 sm:grid-cols-[auto_1fr_auto]"><Popover open={open} onOpenChange={setOpen}><PopoverTrigger asChild><Button variant="outline" type="button" className="h-11 bg-transparent"><CalendarDays strokeWidth={1} />{date ? format(date, "dd/MM/yyyy") : "Chọn ngày"}</Button></PopoverTrigger><PopoverContent align="start" className="tear-calendar w-auto border-primary/50 p-0"><div className="border-b border-primary/30 px-4 py-4 text-center font-display text-xl text-primary">Một ngày để thương</div><Calendar mode="single" locale={vi} selected={date} onSelect={value => { setDate(value); if (value) setOpen(false); }} disabled={today ? { before: new Date(today.getFullYear(), today.getMonth(), today.getDate()) } : undefined} labels={{ labelNext: () => "Tháng sau", labelPrevious: () => "Tháng trước" }} /></PopoverContent></Popover>
          <Input aria-label="Email nhận lời nhắc" type="email" required maxLength={254} value={email} onChange={e => setEmail(e.target.value)} placeholder="Email của bạn" className="h-11 min-w-0 bg-transparent" /><Button type="submit" disabled={pending} className="h-11">{pending ? "Đang lưu…" : "Lưu lời nhắc"}</Button>
        </div><p role="status" className="mt-3 min-h-5 text-xs leading-5 text-muted-foreground">{status || "Email nhắc dịp chưa được kích hoạt; ngày bạn chọn vẫn được lưu tại tiệm."}</p>
      </form>
    </div>
  </div></section>;
}