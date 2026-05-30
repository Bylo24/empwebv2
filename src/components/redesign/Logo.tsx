type LogoProps = {
  variant?: "mark" | "full" | "wordmark";
  className?: string;
};

const Sparkle = ({ size = 28 }: { size?: number }) => (
  <svg
    viewBox="0 0 50 50"
    width={size}
    height={size}
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M25,2 C26,21 28,24 48,25 C28,26 26,29 25,48 C24,29 22,26 2,25 C22,24 24,21 25,2 Z"
      fill="currentColor"
    />
    <circle cx="42" cy="8" r="1.9" fill="var(--or)" />
  </svg>
);

const Logo = ({ variant = "full", className = "" }: LogoProps) => {
  if (variant === "mark") {
    return (
      <span className={`inline-flex ${className}`}>
        <Sparkle size={28} />
      </span>
    );
  }

  if (variant === "wordmark") {
    return (
      <span
        className={`inline-flex items-baseline ${className}`}
        style={{
          fontFamily: "'Inter Tight', system-ui, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontSize: "0.95rem",
        }}
      >
        Emporom Media
        <span style={{ color: "var(--or)" }}>.</span>
      </span>
    );
  }

  // full = mark + wordmark
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Sparkle size={22} />
      <span
        style={{
          fontFamily: "'Inter Tight', system-ui, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontSize: "0.85rem",
          lineHeight: 1,
        }}
      >
        Emporom Media
        <span style={{ color: "var(--or)" }}>.</span>
      </span>
    </span>
  );
};

export default Logo;
