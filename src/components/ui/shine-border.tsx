import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Animated conic-gradient border — ported from the design draft.
   Tailwind v3 here has no bg-conic utility (that's v4-only), so the
   gradient is inline CSS instead of Tailwind color-stop classes. */
export function ShineBorder({
  children,
  className,
  borderWidth = 1.5,
  duration = 5,
  colors = ["#ff5b05", "#ffffff", "#ff5b05"],
}: {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  colors?: string[];
}) {
  return (
    <div className={cn("relative rounded-2xl", className)} style={{ padding: borderWidth }}>
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className="absolute -inset-full blur-sm animate-spin"
          style={{
            background: `conic-gradient(from 0deg, ${colors.join(", ")})`,
            animationDuration: `${duration}s`,
          }}
        />
      </div>
      <div className="relative rounded-2xl">{children}</div>
    </div>
  );
}
