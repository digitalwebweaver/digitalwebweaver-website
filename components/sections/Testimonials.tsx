export interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    text: "They took a brief that was half a page long, turned it into a complete specification, and delivered every feature on the agreed date. I've worked with agencies in London that couldn't manage that.",
    name: "Michael T.",
    role: "Marketing Director · Logistics · UK",
    initials: "MT",
  },
  {
    text: "Our new platform went live on time with a mobile PageSpeed of 97. Organic leads are up 140% year on year since launch.",
    name: "Prashant B.",
    role: "CEO · Manufacturing · India",
    initials: "PB",
  },
  {
    text: "We got senior-level engineering at a price point that made the project viable. The quality was indistinguishable from what our previous US agency produced at three times the cost.",
    name: "Kate L.",
    role: "VP Product · HealthTech SaaS · US",
    initials: "KL",
  },
];

interface Props {
  items?: Testimonial[];
}

export default function Testimonials({ items = DEFAULT_TESTIMONIALS }: Props) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="testi-grid">
          {items.map((t) => (
            <div key={t.name} className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>{t.text}</p>
              <div className="who">
                <div className="av">{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
