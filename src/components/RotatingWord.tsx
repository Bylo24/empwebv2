import { useEffect, useMemo, useRef, useState } from "react";

type RotatingWordProps = {
  words: string[];
  className?: string;
  interval?: number;
};

const RotatingWord = ({ words, className, interval = 4000 }: RotatingWordProps) => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const fadeDuration = 350;

  const longestWordLength = useMemo(() => {
    return words.reduce((longest, word) => Math.max(longest, word.length), 0);
  }, [words]);

  useEffect(() => {
    if (words.length <= 1) return;

    const cycle = () => {
      setIsFading(true);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIndex((prev) => {
          if (words.length <= 1) {
            return prev;
          }
          let next = (prev + 1) % words.length;
          if (next === prev) {
            next = (prev + 2) % words.length;
          }
          return next;
        });
        setIsFading(false);
      }, fadeDuration);
    };

    const intervalId = window.setInterval(() => {
      cycle();
    }, interval);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [words, interval]);

  return (
    <span
      className={`text-keyword inline-flex justify-center transition-[opacity, width] duration-300 ${className ?? ""}`}
      style={{
        opacity: isFading ? 0 : 1,
        whiteSpace: "nowrap",
        lineHeight: 1.1,
      }}
      aria-live="polite"
    >
      {words[index]}
    </span>
  );
};

export default RotatingWord;
