interface Props {
  eyebrow?: string;
  heading: React.ReactNode;
  body?: React.ReactNode;
  dark?: boolean;
}

export default function SectionHead({ eyebrow, heading, body, dark }: Props) {
  return (
    <div className="sec-head reveal">
      <div>
        {eyebrow && (
          <span className={`eyebrow${dark ? " on-dark" : ""}`}>{eyebrow}</span>
        )}
        <h2 style={{ marginTop: eyebrow ? 18 : 0 }}>{heading}</h2>
      </div>
      {body && <p>{body}</p>}
    </div>
  );
}
