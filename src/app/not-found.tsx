import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <p className="eyebrow">Error 404</p>
      <h1>This path doesn&apos;t lead to a case study.</h1>
      <p>The page may have moved, or the address may be incomplete.</p>
      <Link className="button button--primary" href="/">
        Return to the portfolio
      </Link>
    </main>
  );
}
