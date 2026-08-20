import Link from "next/link";
import Interactions from "@/components/Interactions";
import Footer from "@/components/Footer";

export const metadata = {
  title: { absolute: "Software Development Company Ivory Coast | Abidjan Agency — Digital Web Weaver" },
  description: "Agence de développement web et logiciel pour Abidjan et la Côte d'Ivoire. Sites sur mesure, applications métier, e-commerce avec Mobile Money, et équipes dédiées. Équipe francophone, ingénieurs seniors.",
  alternates: { canonical: "/agence-developpement-web-abidjan/" },
  openGraph: { title: "Software Development Company Ivory Coast | Abidjan Agency — Digital Web Weaver", description: "Agence de développement web et logiciel pour Abidjan et la Côte d'Ivoire. Sites sur mesure, applications métier, e-commerce avec Mobile Money, et équipes dédiées. Équipe francophone, ingénieurs seniors.", url: "/agence-developpement-web-abidjan/", type: "website" }
};

export default function Page() {
  return (
    <>
    <nav className="activitybar mono" aria-label="Sections"><div className="activitybar__toggle-wrap"><button className="activitybar__toggle hint" data-explorer-toggle title="Toggle Explorer (Ctrl+B)">▤</button><div className="menu-hint"><span className="menu-hint__arrow">◀</span><span className="menu-hint__label">Click to browse all pages</span></div></div>
      <button className="activitybar__btn is-active" data-scroll="s-hero" data-target="s-hero" title="Aperçu">⌂</button>
      <button className="activitybar__btn" data-scroll="s-build" data-target="s-build" title="Services">⚙</button>
      <button className="activitybar__btn" data-scroll="s-why" data-target="s-why" title="Pourquoi nous">❮❯</button>
      <button className="activitybar__btn" data-scroll="s-faq" data-target="s-faq" title="FAQ">?</button>
      <span className="activitybar__geo" title="Abidjan · Côte d'Ivoire">◍</span>
    </nav>

    <main className="main">
      <div className="tabbar scroll mono">
        <button className="tab is-active" data-scroll="s-hero" data-target="s-hero"><span className="tdot" style={{"color":"var(--teal)"}}>●</span> abidjan.ts</button>
        <button className="tab" data-scroll="s-build" data-target="s-build"><span className="tdot" style={{"color":"var(--yellow)"}}>●</span> services.ts</button>
        <button className="tab" data-scroll="s-why" data-target="s-why"><span className="tdot" style={{"color":"var(--pink)"}}>●</span> pourquoi.ts</button>
        <button className="tab" data-scroll="s-contact" data-target="s-contact"><span className="tdot" style={{"color":"var(--green)"}}>●</span> contact.sh</button>
      </div>

      <div className="content scroll">

        <section id="s-hero" className="section section--split top">
          <div>
            <p className="hero__meta">// abidjan.ts · Côte d'Ivoire · équipe francophone</p>
            <span className="badge">🇨🇮 DÉVELOPPEMENT LOGICIEL · CÔTE D'IVOIRE</span>
            <h1 className="hero__h1">Agence de <span className="pink">Développement Web</span> et <span className="teal">Logiciel</span> pour Abidjan</h1>
            <p className="hero__lead">Une équipe d'ingénieurs expérimentés au service des entreprises d'Abidjan et de Côte d'Ivoire — sites web sur mesure, applications métier, plateformes e-commerce et équipes de développement dédiées.</p>
            <div className="btn-row" style={{"marginTop":"26px"}}>
              <a className="btn btn--primary" href="#s-contact" data-scroll="s-contact">▶ Envoyer la demande</a>
              <a className="btn btn--ghost" href="https://wa.me/919722915105">Réserver un appel gratuit</a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat"><b style={{"color":"var(--pink)"}}>200+</b><span>projets livrés</span></div>
              <div className="hero__stat"><b style={{"color":"var(--teal)"}}>Senior</b><span>ingénieurs confirmés</span></div>
              <div className="hero__stat"><b style={{"color":"var(--yellow)"}}>8 ans</b><span>d'expérience</span></div>
            </div>
            <div className="trust">
              <div className="trust__label">AVANTAGES LOCAUX</div>
              <div className="trust__row">
                <span className="trust__chip">Équipe francophone</span>
                <span className="trust__chip">Tarifs FCFA</span>
                <span className="trust__chip">NDA sur demande</span>
              </div>
            </div>
          </div>
          <div className="formcard" id="estimate">
            <div className="code__head"><span className="dot dot--red" style={{"width":"8px","height":"8px"}}></span><span className="fn">devis.form</span><span className="mut">— gratuit</span></div>
            <form className="formcard__pad" data-form>
              <p className="form__eyebrow">DEVIS GRATUIT</p>
              <p className="form__title">Parlez-nous de votre projet</p>
              <p className="form__lead">Décrivez votre besoin — nous vous envoyons une portée et un devis sous 24h, gratuitement.</p>
              <div className="field-row">
                <div className="field"><label className="label">NOM</label><input className="input" name="name" placeholder="Votre nom" /></div>
                <div className="field"><label className="label">E-MAIL PROFESSIONNEL</label><input className="input" name="email" type="email" placeholder="vous@entreprise.com" /></div>
              </div>
              <div className="field-row">
                <div className="field"><label className="label">TYPE DE BESOIN</label>
                <select className="select" name="need"><option>Site web professionnel</option><option>Application web sur mesure</option><option>Plateforme e-commerce</option><option>Développeur dédié</option><option>Automatisation / IA</option><option>Autre</option></select>
                </div>
                <div className="field"><label className="label">DÉLAI</label>
                <select className="select" name="timeline"><option>Urgent (1–4 semaines)</option><option>Standard (2–3 mois)</option><option>Complexe (3–6 mois)</option><option>Pas encore sûr</option></select>
                </div>
              </div>
              <div className="field"><label className="label">DÉCRIVEZ VOTRE PROJET</label><textarea className="textarea" name="desc" rows="3" placeholder="Ce qu'il fait, qui l'utilise, vos préférences techniques…"></textarea></div>
              <button className="form__submit" type="submit">Recevoir mon devis gratuit ↗</button>
              <p className="form__micro">Sans engagement · réponse sous 24h</p>
            </form>
            <div className="form__success" hidden>
              <div className="s0">$ dww devis --submit</div>
              <div className="s1">✓ demande reçue<br />✓ transmise à un ingénieur senior<br />✓ devis en préparation</div>
              <div className="s2">Merci<span data-name-slot></span> — nous répondrons sous 24 heures.</div>
              <button className="s-reset" type="button">$ nouvelle --demande</button>
            </div>
          </div>
        </section>

        <section className="stat-strip">
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>200+</div><div className="lbl">PROJETS_LIVRÉS</div><div className="sub">▲ sites · apps · e-commerce</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--teal)"}}>8 ans</div><div className="lbl">EXPÉRIENCE</div><div className="sub">▲ ingénieurs seniors</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--yellow)"}}>FCFA</div><div className="lbl">PAIEMENT_LOCAL</div><div className="sub">▲ Orange · MTN · Wave</div></div>
          <div className="stat-cell"><div className="big" style={{"color":"var(--pink)"}}>24h</div><div className="lbl">DEVIS</div><div className="sub">▲ gratuit · sans engagement</div></div>
        </section>

        <section id="s-build" className="section reveal">
          <p className="eyebrow">const build = [ <span className="c">// ce que nous développons</span></p>
          <h2 className="title mono">Ce que nous développons</h2>
          <div className="grid grid-3 stagger">
            <div className="svc"><div className="svc__num">01</div><div className="svc__title">Développement de logiciels sur mesure</div><p className="svc__body">Logiciels conçus autour de vos processus métier exacts — outils internes, systèmes de réservation, plateformes de gestion.</p><div className="svc__foot"><span>custom.ts</span></div></div>
            <div className="svc"><div className="svc__num">02</div><div className="svc__title">Équipes de développement dédiées</div><p className="svc__body">Recrutez des développeurs dédiés qui travaillent comme une extension de votre équipe interne.</p><div className="svc__foot"><span>team.ts</span></div></div>
            <div className="svc"><div className="svc__num">03</div><div className="svc__title">E-commerce et plateformes en ligne</div><p className="svc__body">Boutiques en ligne et places de marché pour les commerçants ivoiriens — paiement Mobile Money intégré.</p><div className="svc__foot"><span>shop.ts</span></div></div>
            <div className="svc"><div className="svc__num">04</div><div className="svc__title">Applications métier et ERP</div><p className="svc__body">Logiciels de gestion pour le commerce, la logistique et l'agro-industrie ivoirienne.</p><div className="svc__foot"><span>erp.ts</span></div></div>
            <div className="svc"><div className="svc__num">05</div><div className="svc__title">Sites web et applications mobiles</div><p className="svc__body">Sites web professionnels et applications mobiles multiplateformes pour les entreprises ivoiriennes.</p><div className="svc__foot"><span>mobile.ts</span></div></div>
            <div className="svc"><div className="svc__num">06</div><div className="svc__title">Solutions IA et automatisation</div><p className="svc__body">Intégrations d'intelligence artificielle pratiques pour les entreprises ivoiriennes.</p><div className="svc__foot"><span>ai.ts</span></div></div>
          </div>
        </section>

        <section id="s-why" className="section reveal">
          <p className="eyebrow">// pourquoi Digital Web Weaver</p>
          <h2 className="title mono">Le bon partenaire technique pour les entreprises d'Abidjan et de Côte d'Ivoire</h2>
          <div className="grid grid-4 stagger">
            <div className="cap cap--top"><div className="eyebrow" style={{"color":"var(--pink)"}}>💰 ÉCONOMIE</div><div className="cap__title" style={{"marginTop":"10px"}}>Coûts nettement réduits</div><p className="cap__body">50 à 70% moins cher qu'une agence occidentale, sans compromis sur la qualité.</p></div>
            <div className="cap cap--teal"><div className="eyebrow" style={{"color":"var(--teal)"}}>🗣 LANGUE</div><div className="cap__title" style={{"marginTop":"10px"}}>Équipe francophone</div><p className="cap__body">Échangez en français à chaque étape, du cadrage du projet jusqu'à la livraison.</p></div>
            <div className="cap cap--green"><div className="eyebrow" style={{"color":"var(--green)"}}>📱 PAIEMENT</div><div className="cap__title" style={{"marginTop":"10px"}}>Mobile Money intégré</div><p className="cap__body">Orange Money, MTN Mobile Money et Wave intégrés nativement à vos projets.</p></div>
            <div className="cap cap--yellow"><div className="eyebrow" style={{"color":"var(--yellow)"}}>🎖 SENIORITÉ</div><div className="cap__title" style={{"marginTop":"10px"}}>Ingénieurs seniors, prix fixe</div><p className="cap__body">Pas de juniors cachés derrière le contrat — un devis fixe et des seniors bout en bout.</p></div>
          </div>
          <div className="panel-note" style={{"background":"var(--panel)"}}><p style={{"fontSize":"16px","color":"var(--text-2)","lineHeight":"1.65","maxWidth":"960px"}}>Digital Web Weaver est une équipe d'ingénieurs basée en Inde, à Vadodara, qui travaille entièrement à distance avec les entreprises d'Abidjan et de Côte d'Ivoire. Nos projets e-commerce et applicatifs intègrent les solutions de paiement mobile locales — Orange Money, MTN Mobile Money et Wave — pour s'adapter aux usages réels de vos clients ivoiriens.</p></div>
        </section>

        <section id="s-faq" className="section reveal">
          <p className="eyebrow">// abidjan.faq.md</p>
          <div className="faq">
            <div className="faq__item"><button className="faq__q">Travaillez-vous avec des entreprises basées à Abidjan à distance ?<span className="sign">[+]</span></button><div className="faq__a"><p>Oui. Nous travaillons avec des clients à Abidjan et dans toute la Côte d'Ivoire entièrement à distance, avec une équipe francophone dédiée aux échanges quotidiens.</p></div></div>
            <div className="faq__item"><button className="faq__q">Votre équipe parle-t-elle français ?<span className="sign">[+]</span></button><div className="faq__a"><p>Oui. Nous disposons d'une équipe francophone pour les échanges avec nos clients, du cadrage du projet jusqu'à la livraison.</p></div></div>
            <div className="faq__item"><button className="faq__q">Combien coûte un site web ou une application sur mesure ?<span className="sign">[+]</span></button><div className="faq__a"><p>Un site professionnel démarre à 350 000 FCFA, une application web sur mesure à partir de 1 200 000 FCFA, et un développeur dédié à partir de 750 000 FCFA par mois.</p></div></div>
            <div className="faq__item"><button className="faq__q">Pouvez-vous intégrer les paiements Mobile Money ?<span className="sign">[+]</span></button><div className="faq__a"><p>Oui. Nous intégrons les principales solutions de paiement mobile ivoiriennes — Orange Money, MTN Mobile Money et Wave — dans vos projets e-commerce et applicatifs.</p></div></div>
            <div className="faq__item"><button className="faq__q">Signez-vous des contrats et accords de confidentialité ?<span className="sign">[+]</span></button><div className="faq__a"><p>Oui. Nous signons volontiers un accord de confidentialité (NDA) avant de discuter des détails de votre projet.</p></div></div>
            <div className="faq__item"><button className="faq__q">Combien de temps faut-il pour développer ?<span className="sign">[+]</span></button><div className="faq__a"><p>Un site web prend généralement 3 à 4 semaines ; une application sur mesure, 8 à 12 semaines, selon la complexité.</p></div></div>
          </div>
        </section>

        <section className="section reveal">
          <p className="eyebrow">// à voir aussi</p>
          <div className="grid grid-4">
            <Link className="svc" href="/web-design-vadodara/"><div className="svc__title" style={{"fontSize":"16px"}}>Digital Web Weaver · Vadodara</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Notre siège en Inde — toute l'équipe d'ingénierie senior.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>ouvrir ↗</div></Link>
            <Link className="svc" href="/software-development-company-south-africa/"><div className="svc__title" style={{"fontSize":"16px"}}>Digital Web Weaver · Afrique du Sud</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Développement logiciel pour les entreprises sud-africaines.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>ouvrir ↗</div></Link>
            <Link className="svc" href="/software-development-company-uk/"><div className="svc__title" style={{"fontSize":"16px"}}>Digital Web Weaver · Royaume-Uni</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Développement logiciel pour les entreprises britanniques.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>ouvrir ↗</div></Link>
            <Link className="svc" href="/cost-estimator/"><div className="svc__title" style={{"fontSize":"16px"}}>Estimateur de coût</div><p className="svc__body" style={{"fontSize":"13.5px"}}>Estimez le budget de votre projet en quelques minutes.</p><div className="mono" style={{"fontSize":"12px","color":"var(--pink)","marginTop":"12px"}}>ouvrir ↗</div></Link>
          </div>
        </section>

        <section id="s-contact" className="section section--cta reveal">
          <p className="cta__cmd">$ ./contact --abidjan<span className="caret-pink"></span></p>
          <h2 className="cta__h sm">Prêt à lancer votre projet à Abidjan ?</h2>
          <p className="cta__lead">Devis gratuit et détaillé par nos ingénieurs seniors — sous 24 heures. Dites-nous ce dont vous avez besoin.</p>
          <div className="cta__btns">
            <Link className="btn btn--primary" href="/contact/">▶ Envoyer la demande</Link>
            <a className="btn btn--ghost green" href="https://wa.me/919722915105">Réserver un appel gratuit</a>
            <Link className="btn btn--ghost" href="/portfolio/">Voir notre portfolio</Link>
          </div>
          <div className="cta__pills"><span><span className="g">●</span> Équipe francophone</span><span><span className="g">●</span> Prix fixe</span><span><span className="g">●</span> NDA sur demande</span></div>
        </section>

        <Footer />

      </div>

      <div className="statusbar">
        <span><b>⎇ main</b></span><span>✓ 0 errors</span><span>⚠ 0 warnings</span>
        <span className="statusbar__spacer">abidjan.ts</span><span>TypeScript</span><span>Ln 1, Col 1</span>
      </div>
    </main>

      <Interactions />
    </>
  );
}
