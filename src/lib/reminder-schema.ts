import { z } from "zod";
export const reminderSchema = z.object({
  email: z.string().trim().email("Email chưa đúng định dạng.").max(254),
  occasion: z.enum(["sinh-nhat", "ky-niem", "ngay-cuoi"]),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
    const parsed = new Date(`${value}T00:00:00Z`);
    return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
  }, "Ngày chưa hợp lệ."),
});