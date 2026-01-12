import { useEffect, useRef, useState } from "react";

const PersonalBrandVisual = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoSrc("/agency-visual.m4v");
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.25,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="section-base" aria-label="Agency work highlight">
      <div className="max-w-5xl mx-auto text-center">
        <div className="section-heading section-heading--narrow">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Agency visual</p>
          <h2 className="text-3xl md:text-4xl font-bold">Inside the Work</h2>
          <p className="text-sm uppercase tracking-[0.2em] font-semibold text-muted-foreground">
            Where Strategy Meets Execution
          </p>
        </div>
        <div
          ref={containerRef}
          className="mt-12 relative overflow-hidden rounded-3xl border border-border shadow-xl aspect-[16/9]"
        >
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onEnded={handleEnded}
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalBrandVisual;
