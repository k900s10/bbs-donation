-- BBS Donation — public read-only lock for Supabase tables.
-- Run once in Supabase Dashboard > SQL Editor. Idempotent: safe to re-run.
--
-- Effect: the publishable (anon) key used by the website can only SELECT.
-- Editing data stays possible via the Supabase dashboard (service role bypasses RLS).

alter table public.programs           enable row level security;
alter table public.campaigns          enable row level security;
alter table public.monthly_audits     enable row level security;
alter table public.budget_allocations enable row level security;
alter table public.donations          enable row level security;

drop policy if exists "website can read" on public.programs;
create policy "website can read" on public.programs
  for select to anon, authenticated using (true);

drop policy if exists "website can read" on public.campaigns;
create policy "website can read" on public.campaigns
  for select to anon, authenticated using (true);

drop policy if exists "website can read" on public.monthly_audits;
create policy "website can read" on public.monthly_audits
  for select to anon, authenticated using (true);

drop policy if exists "website can read" on public.budget_allocations;
create policy "website can read" on public.budget_allocations
  for select to anon, authenticated using (true);

drop policy if exists "website can read" on public.donations;
create policy "website can read" on public.donations
  for select to anon, authenticated using (true);
