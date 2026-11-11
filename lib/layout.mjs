// Layout variety per page group. Runs at build time on a page's <main> markup (after addIcons) and only adds classes
// and decorative, aria-hidden elements; text, headings and links are never touched. Styles: "layout variety" block in
// styles/site.css. Labels inside the decorative diagrams are data-t attributes (drawn with CSS content), so they add no
// duplicate text to the page.
import { iconFor } from "./icons.mjs";

const LOCATION = /^(web-design-|software-development-company-|agence-)/;
// pages that keep the lighter treatment (icons + motion only): no dark band, no lead card
const LIGHT = /^(index|about|contact|careers|blog|portfolio|privacy-policy|author-|cost-estimator|products$|services$)/;
// hero watermark where the title alone would pick a misleading icon
const HERO = { services: "layers", products: "boxes", portfolio: "briefcase", about: "users", careers: "user-check", contact: "message-circle",
  "privacy-policy": "lock", "cost-estimator": "receipt", "hire-dedicated-resource": "user-check", "web-development": "globe", "custom-software-development": "code-xml",
  healthcare: "heart-pulse", telecare: "heart-pulse", "react-developer": "atom", "laravel-developer": "code-xml", "nodejs-developer": "code-xml", "custom-web-apps": "app-window",
  "ecommerce-development": "shopping-cart", quickbite: "shopping-cart", logistics: "truck", estateflow: "building-2", "portfolio-proprail": "building-2", solarflow: "zap",
  pesttrack: "clipboard-check", "portfolio-nextsense": "graduation-cap", "author-kamlesh-nishad": "user-round" };

const text = (s) => s.replace(/<[^>]+>/g, "").trim();
const attr = (s) => text(s).replace(/"/g, "&quot;");
const cardIcons = (html, n) => [...html.matchAll(/<h3 class="h3">([^<]+)<\/h3>/g)].slice(0, n).map((m) => [m[1], iconFor(m[1])]);

export function heroIcon(html, file) {
  const kicker = (html.match(/<p class="kicker">([^<]*)/) || [])[1] || "";
  const h1 = text((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "");
  return HERO[file] || (LOCATION.test(file) ? "map-pin" : iconFor(`${kicker} ${h1}`));
}

export function addLayout(html, file) {
  if (file === "index") return html;
  const product = /class="crumbs"[\s\S]{0,200}href="\/products\/"/.test(html);
  const name = (html.match(/aria-current="page">([^<]*)/) || [])[1] || "";
  const icon = heroIcon(html, file);

  // every inner page: a large faint icon behind the hero copy
  html = html.replace(/(<section class="page-hero[^"]*"><div class="hero__bg" aria-hidden="true">)/, `$1<i class="hero-art ic--${icon}"></i>`);

  // industry "approach" sections that are only a heading and one note: text left, a small diagram of the page's icons right
  html = html.replace(/<section class="section( alt)?"( id="[^"]*")?>(<div class="container"><div class="section-head reveal">(?:(?!<\/section>)[\s\S])*?<\/div><p class="note reveal">(?:(?!<\/section>)[\s\S])*?<\/p>)(<\/div><\/section>)/g,
    (m, alt, id, body, rest) => `<section class="section${alt || ""} section--side"${id || ""}>${body}<div class="side-art orbit reveal" aria-hidden="true"><i class="ic--${icon}"></i>${cardIcons(html, 3).map(([, i]) => `<i class="ic--${i}"></i>`).join("")}</div>${rest}`);

  // location pages: a map-style card with the place name beside the local section
  if (LOCATION.test(file)) html = html.replace(/<section class="section( alt)?" id="local">(<div class="container"><div class="section-head reveal">[\s\S]*?<\/div>)/,
    (m, alt, head) => `<section class="section${alt || ""} section--side" id="local">${head}<div class="side-art mapcard reveal" aria-hidden="true" data-t="${attr(name)}"><i class="ic--map-pin"></i></div>`);

  // products: a module map above the feature cards (a diagram of the real modules, not a screenshot)
  if (product && !html.includes("section--shot")) {
    html = html.replace(/(<section class="section[^"]*" id="build">(?:(?!<\/section>)[\s\S])*?)<div class="grid-3">((?:(?!<\/section>)[\s\S])*?)<\/section>/, (m, head, grid) => {
      const mods = cardIcons(grid, 8);
      if (mods.length < 4) return m;
      const col = (a) => `<div class="modmap__col">${a.map(([t, i]) => `<span class="ic--${i}" data-t="${attr(t)}"><i></i></span>`).join("")}</div>`;
      const half = Math.ceil(mods.length / 2);
      return `${head}<div class="modmap reveal" aria-hidden="true"><div class="win__bar"><i></i><i></i><i></i><span data-t="${file}.modules"></span></div><div class="modmap__body">${col(mods.slice(0, half))}<b data-t="${attr(name)}"></b>${col(mods.slice(half))}</div></div><div class="grid-3">${grid}</section>`;
    });
  }

  // services, stacks, industries: capabilities on a dark band, first card of the first six-card grid enlarged
  if (!product && !LOCATION.test(file) && !LIGHT.test(file)) {
    html = html.replace(/<section class="section alt"((?: id="[^"]*")?><div class="container"><div class="section-head reveal">(?:(?!<\/section>)[\s\S])*?<ul class="caps)/, '<section class="section alt section--dark"$1');
    html = html.replace(/<div class="grid-3">((?:(?!<\/section>)[\s\S])*?)<\/section>/, (m, grid) =>
      (grid.match(/<div class="win reveal">/g) || []).length === 6 ? `<div class="grid-3 grid-3--lead">${grid}</section>` : m);
  }
  return html;
}
