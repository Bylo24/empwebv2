import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;

/* Section-level scroll reveal with mass (blur-up). Reduced-motion safe. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Per-word staggered headline reveal, with an optional styled tail span. */
export function Words({
  text,
  tail,
  stagger = 0.045,
  delay = 0,
  className,
}: {
  text: string;
  tail?: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const item = (i: number) => {
    const d = delay + i * stagger;
    const base = {
      transition: { duration: 0.62, ease: EASE, delay: reduce ? 0 : d },
      style: { display: "inline-block", willChange: "transform, opacity" } as React.CSSProperties,
    };
    if (reduce) return { initial: false as const, animate: { opacity: 1, y: 0 }, ...base };
    return {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-70px" },
      ...base,
    };
  };
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <motion.span {...item(i)}>{w}</motion.span>
          {i < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
      {tail ? (
        <>
          {" "}
          <motion.span {...item(words.length)}>{tail}</motion.span>
        </>
      ) : null}
    </span>
  );
}
