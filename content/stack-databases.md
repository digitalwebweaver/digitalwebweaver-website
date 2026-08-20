---
url: https://digitalwebweaver.com/stack/databases/
route: /stack/databases/
title: Database Technologies We Use — PostgreSQL, MongoDB, Redis & More
---

# Stack: Databases (`/stack/databases/`)

> Note: Header/footer nav matches the standard site-wide nav captured in `content/home.md`. Not re-documented here.

## Hero Section
**H1:** "Database Technologies We Use in Production"
**Intro:** We choose databases based on your data model, query patterns, and scale requirements — not hype. Here's what we use and why.

## Lead Form Section — "What are you building?"
**Form Fields:**
- Name (text input)
- Work email (email input)
- What do you need? (dropdown: Web application / portal, SaaS product, Mobile app, Marketing / company website, AI / automation project, Other)
- Timeline (dropdown: ASAP (1–4 weeks), Standard (2–3 months), Complex (3–6 months), Not sure yet)
- Describe your project (text area)

**CTA:** "Get free estimate ↗"

## "Our Database Stack" Section — Databases We Use
1. **PostgreSQL** — "Our default relational database — JSONB, full-text search, and extensions."
2. **MongoDB** — "Document store for flexible schema and hierarchical data."
3. **Redis** — "Caching, sessions, queues, and pub/sub messaging."
4. **Elasticsearch** — "Full-text search, log analytics, and faceted filtering."
5. **ClickHouse** — "Columnar OLAP for analytics and time-series at scale."
6. **SQLite** — "Embedded database for edge functions and serverless."

## "Database Expertise" Section — What We Do With Databases
- **Schema Design** — Normalisation, denormalisation, and JSONB hybrid patterns.
- **Query Optimisation** — Explain plans, index design, and N+1 elimination.
- **Migrations** — Zero-downtime schema migrations with Prisma or Flyway.
- **Replication** — Primary/replica read scaling and cross-region replication.
- **Sharding** — Hash and range partitioning for horizontal scale.
- **Backup & Recovery** — Automated backups, PITR, and tested restore procedures.

## "Database Matrix" Section — When We Use Each Database
| Category | Options |
|---|---|
| Relational | PostgreSQL (default), MySQL (legacy compat), SQLite (edge/embedded) |
| Document | MongoDB (flexible schema), Firestore (realtime sync) |
| Cache/Queue | Redis (cache + queues), Valkey (OSS Redis fork) |
| Analytics | ClickHouse (OLAP), BigQuery (warehouse), Redshift (AWS) |

## FAQ — Database Technology FAQ
1. **When do you choose PostgreSQL vs MongoDB?** — PostgreSQL for structured relational data, complex queries, and transactions. MongoDB for flexible document data, rapid iteration, and embedded arrays.
2. **Why Redis over Memcached?** — Redis supports data structures (lists, sets, sorted sets), pub/sub, persistence, and clustering. Memcached is pure cache with no additional features.
3. **When is ClickHouse the right choice?** — When you need analytics over millions of rows — dashboards, time-series reporting, or log analysis. It's 10–100× faster than PostgreSQL for OLAP queries.
4. **How do you handle database migrations safely?** — Schema changes via Prisma Migrate or Flyway. Expand-and-contract pattern for zero-downtime. All migrations tested in staging first.

## Final CTA — "Database Architecture Review"
**CTAs:** "Start a project ↗" / "View our work"

## Newsletter Signup
**Heading:** "Build something that lasts."
**CTA:** "Subscribe ↗"

## Notes
- This is a compact "tech stack" reference page (like /stack/aws/) — shorter than the hiring pages, no testimonials or long-form narrative sections present.
- Stats/trust indicators shown: Trusted by 150+ clients, 4.9/5 Clutch, operating since 2013.
