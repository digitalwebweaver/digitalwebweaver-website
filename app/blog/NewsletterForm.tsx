"use client";

export default function NewsletterForm() {
  return (
    <form
      className="news-form"
      onSubmit={(e) => e.preventDefault()}
      style={{ maxWidth: "420px", marginTop: "32px" }}
    >
      <input
        type="email"
        placeholder="you@company.com"
        aria-label="Email address"
      />
      <button className="btn btn-primary" type="submit">
        Subscribe <span className="arr">↗</span>
      </button>
    </form>
  );
}
