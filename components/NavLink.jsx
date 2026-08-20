import Link from "next/link";

// Internal routes (start with "/") get client-side, no-reload navigation.
// Anything else (https://digitalwebweaver.com/..., mailto:, tel:, wa.me,
// # in-page anchors) stays a plain <a> since Link can't (and shouldn't)
// intercept those.
export default function NavLink({ href, children, ...rest }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
