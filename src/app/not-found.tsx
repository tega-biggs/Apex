import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "16px",
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
        color: "var(--color-text-primary)",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: 800, margin: 0 }}>404</h1>
      <p style={{ fontFamily: "var(--font-inter)", color: "var(--color-text-primary)", margin: 0 }}>
        Page not found.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "8px",
          color: "var(--color-primary)",
          textDecoration: "underline",
          fontFamily: "var(--font-inter)",
          fontSize: "0.875rem",
        }}
      >
        Return home →
      </Link>
    </main>
  );
}
