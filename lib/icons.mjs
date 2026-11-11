// Card icons. Each card title is matched against RULES (first hit wins) and gets a line icon. The icon shapes
// live in styles/site.css between the icons:start / icons:end markers; regenerate them with scripts/build-icons.mjs after
// adding an icon name here.
// The icons are decorative: aria-hidden, and nothing in the text or headings changes.
const RULES = [
  // our products, by what they are for
  [/vetcare|veterinar/i, "paw-print"],
  [/rideeasy/i, "car"], [/glowdesk|salonbook/i, "scissors"], [/chemsupply/i, "flask-conical"], [/educore|schoolhub/i, "graduation-cap"],
  [/insuredesk/i, "umbrella"],
  [/telecare/i, "heart-pulse"], [/^saas\b/i, "layers"],
  [/web apps?\b|progressive web/i, "app-window"],[/fabsuite|windows? &|doors?\b|facade|glass/i, "door-open"], [/manufactur|industrial|factory/i, "factory"],
  // tools and practices that the general rules below would miss
  [/mlops|model serving|langchain|llama/i, "brain"],
  [/disaster|backup|replication|sharding|recovery/i, "hard-drive"],
  [/secrets|nda\b/i, "lock"],
  [/sast|dast|risk|exploitation|cvss|dependency|soc 2|rbac|dpdp|popia|rics|content protection/i, "shield-check"],
  [/metabase|superset|\bdbt\b|looker|posthog|mixpanel|data-driven|data stack|\broi\b|measurable/i, "chart-column"],
  [/iot|telemetry/i, "radio"],
  [/vue|livewire|alpine|telescope|state management|type-safe|python|iac\b/i, "code-xml"],
  [/registration|approval|inspection|subsid|feasibility|pre-check|geda|mgvcl/i, "clipboard-check"],
  [/all posts|see our work|blog/i, "book-open"],
  [/juniors|every hire|templates|shortcuts|discipline/i, "award"],
  [/coûts|francophone/i, "languages"],
  // AI, voice, chat
  [/chatbot|chatflow|whatsapp|chat\b|replies|messag|communication|sms\b/i, "message-circle"],
  [/call|voice|ivr|telephon/i, "phone-call"],
  [/llm|machine learning|\bml\b|\bai\b|\bia\b|brain|predict|recommendation|computer vision|sentinel/i, "brain"],
  [/automat|workflow|process\b|scripts/i, "workflow"],
  // security, compliance
  [/penetration|owasp|security|secure\b|sécur|hipaa|gdpr|kyc|aml|compliance|compliant|consent|audit/i, "shield-check"],
  [/auth|sso|login|access control|roles?\b|permission/i, "key-round"],
  [/encrypt|privacy|vault/i, "lock"],
  // money
  [/payment|upi|checkout|payout|fare|pos\b/i, "credit-card"],
  [/billing|invoice|invoicing|gst|quote|quotation|estimate|fee\b|fees\b|pricing|price|cost|budget|commission|bills?\b/i, "receipt"],
  [/lending|wealth|trading|banking|fintech|finance|accounting|ledger|sage/i, "landmark"],
  [/subscription|plans?\b|membership|package|retainer/i, "repeat"],
  [/loyalty|offers|coupon|referral|reward/i, "gift"],
  // data
  [/postgres|mongo|redis|sqlite|clickhouse|database|\brds\b|aurora|records?\b|emr\b|ehr\b|warehouse(?! management)|data (integration|warehouse|engineering)/i, "database"],
  [/elasticsearch|search|seo\b|discovery|research/i, "search"],
  [/etl|pipeline|ci\/cd|queue|job\b|jobs\b|migration|migrate|sync/i, "git-branch"],
  [/analytics|kpi|report|dashboard|intelligence|insight|valuation|metrics|tracking$/i, "chart-column"],
  // infra
  [/lambda|serverless|functions?\b/i, "zap"],
  [/kubernetes|k8s|\beks\b|container|docker|fargate|ecs\b|microservice/i, "boxes"],
  [/cloud|aws|azure|gcp|s3\b|cloudfront|hosting|deploy|devops|infrastructure/i, "cloud"],
  [/route 53|dns|domain|network|cdn/i, "network"],
  [/observability|monitor|uptime|alert|sla\b/i, "activity"],
  [/performance|speed|fast|lighthouse|core web vitals|optimis|optimiz|tuning/i, "gauge"],
  [/api|integration|integrat|graphql|rest\b|webhook|connect/i, "plug"],
  [/legacy|modernis|moderniz|replacement|redesign|rewrite|refactor/i, "refresh-cw"],
  [/real-time|realtime|live\b|gps|track/i, "radio"],
  // product surfaces
  [/e-?commerce|storefront|woocommerce|commerce|store\b|stores\b|shop|d2c|retail|catalogue|ordering/i, "shopping-cart"],
  [/ios|android|mobile|flutter|react native|\bapp\b|apps\b|pwa|installable|rider|driver/i, "smartphone"],
  [/portal|multi-tenant|tenant/i, "panels-top-left"],
  [/admin|internal tools?|back.?office|filament|erp|module|system\b|systems\b|métier/i, "layout-dashboard"],
  [/crm|lead|sales|enquir|customer|client/i, "users"],
  [/saas|mvp|product\b|products\b|startup|launch/i, "rocket"],
  [/web app|application/i, "app-window"],
  [/react|next\.js/i, "atom"],
  [/website|web\b|landing|site\b|sites\b|single-page|spa\b|next\.js|react|django|fastapi|laravel|php|node/i, "globe"],
  // design
  [/wirefram|prototype|architecture|information arch|app shell/i, "layout-template"],
  [/design system|component|librar/i, "component"],
  [/design|ux\b|ui\b|visual|brand|theme/i, "pen-tool"],
  [/accessib|wcag|a11y/i, "accessibility"],
  // operations
  [/inventory|stock|batch|expiry|warehouse|rental/i, "package"],
  [/fleet|shipment|delivery|logistics|route|dispatch|supply chain|truck/i, "truck"],
  [/schedul|appointment|booking|calendar|timetable|rebooking|events?\b/i, "calendar-check"],
  [/remind|notification|notice|push\b|broadcast|follow-up|alerts?/i, "bell-ring"],
  [/attendance|staff|manpower|hr\b|team|squad|dedicated|engineers?|developers?|équipes|technician/i, "user-check"],
  [/document|form|intake|prescription|certificate|policy|contract|claims?|notes|paper/i, "file-text"],
  [/exam|quiz|assessment|grading|test|qa\b/i, "clipboard-check"],
  [/lms|course|class|learning|education|student|school|admission/i, "graduation-cap"],
  [/patient|clinic|telemedicine|video consult|health|medical|treatment|pharmacy|lab\b/i, "heart-pulse"],
  [/property|listing|lease|real estate|agent|virtual tour|society|visitor/i, "building-2"],
  [/vendor|purchase|distributor|dealer|b2b|wholesale|export/i, "handshake"],
  [/photo|galler|image|video|tour/i, "image"],
  [/poll|feedback|complaint|review|support|maintenance|care\b/i, "life-buoy"],
  [/onboarding|flow|sprint|process|stage|step/i, "list-checks"],
  [/cross-platform|offline|multi|language|global|worldwide|local/i, "languages"],
  [/typescript|typed|code|development|développement|engineering|custom|bespoke|sur mesure|software|logiciel/i, "code-xml"],
  // places, people, hours: after the topic rules, so "Clinic software in Vadodara" gets the clinic icon
  [/vadodara|gujarat|ahmedabad|surat|rajkot|south africa|ivory coast|\buk\b|\bkm\b|in-person|maps?\b|gis\b|location/i, "map-pin"],
  [/mon–sat|\bist\b|working hours|overlap/i, "clock"],
  [/ · (business|director|analyst|engineer|founder|lead)|director|\bmd\b|accounts$|channel partner/i, "user-round"],
  [/business/i, "briefcase"],
  // benefits ("why us")
  [/own|ownership|handover|transparent|honest|fixed|no lock/i, "badge-check"],
  [/senior|expert|experience|proven|quality|reliab|trust/i, "award"],
  [/time|deadline|weeks|days|quick|rapid|agile/i, "timer"],
  [/scal|grow|future|enterprise/i, "trending-up"],
  [/guide|how |what |why |vs\b|\?$|answer|checklist|tips/i, "book-open"],
];
const FALLBACK = ["layers", "sparkles", "target", "puzzle"];
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&[a-z]+;/g, " ");

export function iconFor(title) {
  const t = decode(title);
  for (const [re, name] of RULES) if (re.test(t)) return name;
  let h = 0; for (const c of t) h = (h * 31 + c.charCodeAt(0)) >>> 0;   // stable pick so a card keeps its icon between builds
  return FALLBACK[h % FALLBACK.length];
}
export const allIcons = () => [...new Set([...RULES.map((r) => r[1]), ...FALLBACK])];

// one empty span per card: the glyph (::before) and the window-card watermark (::after) are CSS masks, see styles/site.css
const tile = (n) => `<span class="ic ic--${n}" aria-hidden="true"></span>`;
const inside = (html, re, fn) => html.replace(re, (block) => fn(block));

// Adds the icons to a page's <main> markup. `seen` (optional) collects [kind, title, icon] for the review list.
export function addIcons(html, seen) {
  const note = (kind, title, icon) => { if (seen) seen.push([kind, decode(title), icon]); return icon; };
  html = html.replace(/<span class="num">([^<]*)<\/span><h3 class="h3">([^<]+)<\/h3>/g, (m, n, t) => { const i = note("window card", t, iconFor(t)); return tile(i) + m; });
  // window cards without a number (services hub, "ready-made products" on industry pages)
  html = html.replace(/(<div class="win__body">)(<h3 class="h3">([^<]+)<\/h3>)/g, (m, open, rest, t) => open + tile(note("window card", t, iconFor(t))) + rest);
  html = inside(html, /<ul class="caps[^>]*>[\s\S]*?<\/ul>/g, (b) => b.replace(/<li([^>]*)><h3>([^<]+)<\/h3>/g, (m, a, t) => `<li${a}>${tile(note("capability", t, iconFor(t)))}<h3>${t}</h3>`));
  html = inside(html, /<ul class="why[^>]*>[\s\S]*?<\/ul>/g, (b) => b.replace(/(<li[^>]*>)(<small>[^<]*<\/small><h3>([^<]+)<\/h3>)/g, (m, li, rest, t) => li + tile(note("benefit", t, iconFor(t))) + rest));
  html = inside(html, /<div class="related[^>]*>[\s\S]*?<\/div>/g, (b) => b.replace(/(<a [^>]*>)(<strong>([^<]+)<\/strong>)/g, (m, a, rest, t) => a + tile(note("related link", t, iconFor(t))) + rest));
  return html;
}
