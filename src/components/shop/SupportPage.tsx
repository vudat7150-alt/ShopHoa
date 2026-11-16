import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronRight, FileText, Flower2, Leaf, MessageCircle, RefreshCcw, ShieldCheck, ShoppingBag, Truck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/shop/SiteFooter";
import { supportPages, type SupportId, type SupportPage as SupportContent } from "@/lib/support-content";

const icons = { truck: Truck, refresh: RefreshCcw, calendar: CalendarDays, flower: Flower2, wallet: Wallet, shield: ShieldCheck, message: MessageCircle, file: FileText, bag: ShoppingBag, leaf: Leaf };

export function SupportPage({ id }: { id: SupportId }) {
  const page: SupportContent | undefined = supportPages.find(item => item.id === id);
  if (!page) return null;
  const index = supportPages.findIndex(item => item.id === id);
  const previous = supportPages[index - 1];
  const next = supportPages[index + 1];

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 pb-9 pt-7 md:px-6">
          <nav aria-label="Đường dẫn" className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">Trang chủ</Link>
            <ChevronRight aria-hidden className="h-3 w-3" />
            <span>Chính sách & hỗ trợ</span>
            <ChevronRight aria-hidden className="h-3 w-3" />
            <span aria-current="page" className="text-foreground">{page.shortTitle}</span>
          </nav>
          <div className="mt-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">Hương Ly · Hoa tươi Hà Nội</p>
              <h1 className="mt-3 max-w-3xl text-4xl leading-tight tracking-normal md:text-5xl">Chính sách & hỗ trợ</h1>
            </div>
            <Leaf aria-hidden strokeWidth={1} className="hidden h-12 w-12 text-primary/70 sm:block" />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="min-w-0 px-5 py-8 md:px-6 lg:border-r lg:border-border lg:py-12">
          <div className="lg:sticky lg:top-36">
            <p className="mb-4 text-xs uppercase tracking-widest text-primary">Đồng hành cùng bạn</p>
            <nav aria-label="Chính sách và hỗ trợ" className="flex gap-1 overflow-x-auto pb-2 lg:grid lg:grid-cols-1 lg:overflow-visible lg:pb-0">
              {supportPages.map(item => {
                const Icon = icons[item.icon];
                const active = item.id === id;
                return (
                  <Button key={item.id} asChild variant="ghost" className={`h-auto min-h-12 shrink-0 justify-start whitespace-normal rounded-sm px-3 py-3 text-left text-[13px] font-normal ${active ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                    <Link to={item.to} aria-current={active ? "page" : undefined}>
                      <Icon aria-hidden strokeWidth={1.5} className="shrink-0" />
                      <span className="flex-1 leading-relaxed">{item.shortTitle}</span>
                      <ChevronRight aria-hidden className="shrink-0 opacity-60" />
                    </Link>
                  </Button>
                );
              })}
            </nav>
            <div className="mt-6 hidden border-t border-border pt-6 lg:block">
              <p className="font-display text-2xl">Ghé tiệm trò chuyện</p>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">17 phố Ngũ Nhạc, Vĩnh Hưng,<br />Hoàng Mai, Hà Nội</p>
              <p className="mt-1 text-xs text-muted-foreground">7h00 – 21h00 mỗi ngày</p>
              <Button asChild variant="link" className="mt-3 h-auto p-0 text-xs">
                <Link to="/lienhe">Thông tin liên hệ <ArrowRight aria-hidden /></Link>
              </Button>
            </div>
          </div>
        </aside>

        <main id="noi-dung-chinh-sach" className="min-w-0 bg-cream px-5 py-10 text-cream-foreground md:px-10 lg:px-12 lg:py-12">
          <article>
            <header className="border-b border-cream-foreground/15 pb-7">
              <p className="text-xs uppercase tracking-widest opacity-60">{page.proposed ? "Bản đề xuất · Chờ tiệm duyệt" : "Cẩm nang của tiệm"}</p>
              <h2 className="mt-3 text-4xl leading-tight tracking-normal md:text-5xl">{page.title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 opacity-75">{page.description}</p>
            </header>

            <div className="mt-7 border-l-2 border-primary bg-primary/10 px-5 py-4">
              <p className="font-display text-xl leading-relaxed">{page.highlight}</p>
            </div>
            {page.proposed && (
              <p className="mt-4 text-xs leading-6 opacity-65">Nội dung do tiệm rà soát trước khi áp dụng; các mức phí, thời hạn và điều kiện chưa xác nhận không phải cam kết chính thức.</p>
            )}

            <nav aria-label="Mục lục bài viết" className="mt-8 border-y border-cream-foreground/15 py-5">
              <p className="mb-3 text-xs uppercase tracking-widest opacity-60">Trong trang này</p>
              <ol className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {page.sections.map((section, number) => (
                  <li key={section.title}>
                    <a href={`#muc-${number + 1}`} className="flex gap-2 text-xs leading-6 underline-offset-4 hover:underline">
                      <span className="shrink-0 opacity-50">0{number + 1}</span>{section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="divide-y divide-cream-foreground/15">
              {page.sections.map((section, number) => (
                <section key={section.title} id={`muc-${number + 1}`} className="scroll-mt-40 py-8">
                  <h3 className="flex gap-3 text-2xl leading-tight tracking-normal md:text-3xl">
                    <span className="shrink-0 text-primary">{number + 1}.</span>{section.title}
                  </h3>
                  {section.paragraphs?.map(paragraph => <p key={paragraph} className="mt-4 text-sm leading-7 opacity-85">{paragraph}</p>)}
                  {section.items && <ul className="mt-5 space-y-3">
                    {section.items.map(item => <li key={item} className="flex gap-3 text-sm leading-7">
                      <Check aria-hidden strokeWidth={1.5} className="mt-1.5 h-4 w-4 shrink-0 text-cream-foreground/60" />
                      <span>{item}</span>
                    </li>)}
                  </ul>}
                  {id === "bao-mat" && number === 2 && <a href="https://lovable.dev/privacy" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm underline underline-offset-4">Chính sách quyền riêng tư của Lovable ↗</a>}
                  {id === "bao-mat" && number === 3 && <a href="https://policies.google.com/privacy?hl=vi" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm underline underline-offset-4">Chính sách quyền riêng tư của Google ↗</a>}
                </section>
              ))}
            </div>

            {id === "chon-hoa" && <Button asChild className="mb-8"><Link to="/ynghiahoa">Tìm hiểu từng loài hoa <Flower2 aria-hidden /></Link></Button>}
            <nav aria-label="Trang hỗ trợ liền kề" className="grid gap-5 border-t border-cream-foreground/15 pt-7 sm:grid-cols-2">
              {previous ? <Button asChild variant="link" className="h-auto justify-start whitespace-normal p-0 text-left text-cream-foreground"><Link to={previous.to}><ArrowLeft aria-hidden />{previous.shortTitle}</Link></Button> : <span />}
              {next && <Button asChild variant="link" className="h-auto justify-start whitespace-normal p-0 text-left text-cream-foreground sm:justify-end"><Link to={next.to}>{next.shortTitle}<ArrowRight aria-hidden /></Link></Button>}
            </nav>
          </article>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}