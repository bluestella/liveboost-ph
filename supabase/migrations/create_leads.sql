create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company text not null,
  website text,
  message text,
  source_page text,
  utm jsonb,
  status text default 'new' check (status in ('new', 'reviewed', 'contacted', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists idx_leads_created_at on public.leads (created_at desc);
create index if not exists idx_leads_email on public.leads (email);

alter table public.leads enable row level security;

grant usage on schema public to anon, authenticated;
grant insert on public.leads to anon;
grant all privileges on public.leads to authenticated;

drop policy if exists leads_anon_insert on public.leads;
create policy leads_anon_insert on public.leads
  for insert to anon
  with check (true);

drop policy if exists leads_auth_select on public.leads;
create policy leads_auth_select on public.leads
  for select to authenticated
  using (true);

drop policy if exists leads_auth_update on public.leads;
create policy leads_auth_update on public.leads
  for update to authenticated
  using (true);

