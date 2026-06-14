-- ============================================================================
-- Portfolio projects — table + seed of the 9 original portfolio cards.
-- Run this once in the Supabase SQL editor (Dashboard → SQL → New query).
-- Safe to re-run: the table create is guarded, and the seed uses ON CONFLICT.
-- ============================================================================

create table if not exists projects (
  id              uuid primary key default gen_random_uuid(),
  slug            text unique not null,
  title           text not null,
  tag             text,
  category        text,
  excerpt         text,
  content         text default '',
  icon            text default 'default',
  color           text default 'c1',
  metrics         jsonb default '[]'::jsonb,
  stack           jsonb default '[]'::jsonb,
  cover_image     text,
  client_name     text,
  client_country  text,
  status          text default 'draft',
  featured        boolean default false,
  sort_order      int default 0,
  seo_title       text,
  seo_description text,
  published_at    timestamptz,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- Helpful index for the public grid query (published, ordered).
create index if not exists projects_status_idx on projects (status, featured desc, sort_order);

-- ── Seed: the 9 existing portfolio cards ────────────────────────────────────
insert into projects
  (slug, title, tag, category, excerpt, icon, color, metrics, stack, client_country, status, sort_order, published_at)
values
  (
    'manufacturiq-smart-erp',
    'ManufacturIQ — smart ERP',
    'Manufacturing · ERP',
    'ERP / CRM',
    'End-to-end ERP for a mid-size manufacturer. Replaced a 15-year-old legacy system with production scheduling, inventory, procurement, HR, and executive dashboards.',
    'erp', 'c3',
    '[{"value":"40%","label":"Cost reduction"},{"value":"3×","label":"Faster reports"},{"value":"India","label":"Client"}]'::jsonb,
    '["Laravel","Vue.js","MySQL","Docker"]'::jsonb,
    'India', 'published', 1, now()
  ),
  (
    'fleet-dispatch-platform',
    'Fleet dispatch platform',
    'Mobile · Logistics',
    'Mobile',
    'Real-time booking and GPS tracking for a B2B cab operator. Cut dispatch time by 40% across 2,000 daily trips with React Native apps for drivers and dispatchers.',
    'mobile', 'c1',
    '[{"value":"40%","label":"Dispatch time cut"},{"value":"2,000","label":"Daily trips"},{"value":"India","label":"Client"}]'::jsonb,
    '["React Native","Node.js","MongoDB"]'::jsonb,
    'India', 'published', 2, now()
  ),
  (
    'learning-management-system',
    'Learning management system',
    'SaaS · EdTech',
    'EdTech',
    'Full LMS with live sessions, grade tracking, and compliance reporting. Serving 50k students across three regions with real-time video, assignments, and progress dashboards.',
    'edtech', 'c2',
    '[{"value":"50k","label":"Students"},{"value":"3","label":"Regions"},{"value":"UK","label":"Client"}]'::jsonb,
    '["Next.js","PostgreSQL","AWS"]'::jsonb,
    'UK', 'published', 3, now()
  ),
  (
    'b2b-lending-platform',
    'B2B lending platform',
    'FinTech · Web',
    'FinTech',
    'Loan origination, KYC/AML automation, credit scoring engine, and a borrower portal for a UK fintech startup. Fully PCI-DSS and FCA compliant from day one.',
    'fintech', 'c1',
    '[{"value":"£2M+","label":"Loans processed"},{"value":"98%","label":"Uptime"},{"value":"UK","label":"Client"}]'::jsonb,
    '["React","Python","PostgreSQL","AWS"]'::jsonb,
    'UK', 'published', 4, now()
  ),
  (
    'propnest-real-estate-crm',
    'PropNest — real estate CRM',
    'CRM · Real estate',
    'ERP / CRM',
    'Custom CRM for a 500-agent real estate firm. Lead management, automated follow-ups, commission tracking, and a buyer portal that cut sales closure time by 60%.',
    'crm', 'c2',
    '[{"value":"500+","label":"Agents"},{"value":"60%","label":"Faster closure"},{"value":"UAE","label":"Client"}]'::jsonb,
    '["React","Node.js","PostgreSQL"]'::jsonb,
    'UAE', 'published', 5, now()
  ),
  (
    'document-ai-pipeline',
    'Document AI pipeline',
    'AI · Automation',
    'AI & Automation',
    'LLM-powered document processing system for an insurance firm. Extracts, classifies, and validates 10,000+ claims documents per day with 97% accuracy, replacing a 15-person manual team.',
    'ai', 'c3',
    '[{"value":"97%","label":"Accuracy"},{"value":"10k/day","label":"Documents"},{"value":"AU","label":"Client"}]'::jsonb,
    '["Python","OpenAI","FastAPI","AWS"]'::jsonb,
    'Australia', 'published', 6, now()
  ),
  (
    'headless-commerce-platform',
    'Headless commerce platform',
    'E-commerce · Web',
    'E-commerce',
    'Full headless e-commerce rebuild for a fashion brand. Custom Shopify frontend, PIM integration, same-day inventory sync, and a 2.8× conversion rate improvement post-launch.',
    'ecommerce', 'c2',
    '[{"value":"2.8×","label":"Conversion rate"},{"value":"99%","label":"Uptime"},{"value":"UK","label":"Client"}]'::jsonb,
    '["Next.js","Shopify API","Node.js"]'::jsonb,
    'UK', 'published', 7, now()
  ),
  (
    'telemedicine-platform',
    'Telemedicine platform',
    'Healthcare · SaaS',
    'SaaS / Web',
    'HIPAA-compliant telehealth platform with video consultations, e-prescriptions, patient records, and appointment scheduling. Scaled to 8,000 consultations per month in year one.',
    'healthcare', 'c1',
    '[{"value":"8k","label":"Consults/month"},{"value":"HIPAA","label":"Compliant"},{"value":"US","label":"Client"}]'::jsonb,
    '["React","Node.js","AWS","WebRTC"]'::jsonb,
    'US', 'published', 8, now()
  ),
  (
    'logicore-logistics-erp',
    'LogiCore — logistics ERP',
    'Logistics · ERP',
    'Logistics',
    'Multi-branch ERP for a logistics company. Fleet management, route optimisation, driver payroll, fuel tracking, billing, and real-time delivery tracking for 1,200 daily trips.',
    'logistics', 'c3',
    '[{"value":"25%","label":"Fuel savings"},{"value":"1,200","label":"Daily trips"},{"value":"India","label":"Client"}]'::jsonb,
    '["Node.js","React","PostgreSQL","AWS"]'::jsonb,
    'India', 'published', 9, now()
  )
on conflict (slug) do nothing;
