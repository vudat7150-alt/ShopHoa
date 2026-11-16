CREATE TABLE public.occasion_reminders (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 email text NOT NULL CHECK (char_length(email) <= 254),
 occasion text NOT NULL CHECK (occasion IN ('sinh-nhat','ky-niem','ngay-cuoi')),
 event_date date NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(email, occasion, event_date)
);
GRANT ALL ON public.occasion_reminders TO service_role;
ALTER TABLE public.occasion_reminders ENABLE ROW LEVEL SECURITY;
CREATE OR REPLACE FUNCTION public.save_occasion_reminder(p_email text, p_occasion text, p_date date) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
 PERFORM pg_advisory_xact_lock(hashtext(lower(p_email)));
 IF p_date < (now() AT TIME ZONE 'Asia/Ho_Chi_Minh')::date THEN RAISE EXCEPTION 'Past date'; END IF;
 IF (SELECT count(*) FROM public.occasion_reminders WHERE email = lower(p_email) AND created_at > now() - interval '1 hour') >= 5 THEN RAISE EXCEPTION 'Too many requests'; END IF;
 INSERT INTO public.occasion_reminders(email, occasion, event_date) VALUES(lower(p_email),p_occasion,p_date) ON CONFLICT DO NOTHING;
END; $$;
REVOKE ALL ON FUNCTION public.save_occasion_reminder(text,text,date) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.save_occasion_reminder(text,text,date) TO service_role;