import { createServerFn } from "@tanstack/react-start";
import { reminderSchema } from "./reminder-schema";

export const saveReminder = createServerFn({ method: "POST" })
  .inputValidator(input => reminderSchema.parse(input))
  .handler(async ({ data }) => {
    // Intentionally public, write-only subscription: no private reads or account required.
    const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Ho_Chi_Minh", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    if (data.date < today) return { ok: false, message: "Chọn hôm nay hoặc một ngày sắp tới nhé." };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.rpc("save_occasion_reminder", { p_email: data.email, p_occasion: data.occasion, p_date: data.date });
    return error ? { ok: false, message: "Chưa lưu được; thử lại sau hoặc giảm số lời nhắc." } : { ok: true, message: "Đã lưu ngày của bạn. Email nhắc dịp chưa được kích hoạt tại tiệm." };
  });