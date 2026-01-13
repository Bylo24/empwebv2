import { useEffect, useRef, useState } from "react";

const PersonalBrandVisual = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    if (!videoSrc || !videoRef.current) {
      return;
    }

    const video = videoRef.current;
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // ignore autoplay blocking
        });
      }
    };

    const handleCanPlay = () => {
      playVideo();
    };

    video.addEventListener("canplay", handleCanPlay);
    playVideo();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [videoSrc]);

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
 
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isFullscreen ? "hidden" : originalOverflow;
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
      document.addEventListener("keydown", handleKeydown);
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isFullscreen]);
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
          className={`relative overflow-hidden rounded-3xl border border-border shadow-xl ${
            isFullscreen
              ? "fixed inset-4 z-50 h-[calc(100%-2rem)] w-[calc(100%-2rem)] bg-background/90"
              : "mt-12 aspect-[16/9]"
          }`}
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
          {isFullscreen && (
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground"
            >
              Close
            </button>
          )}
        </div>
        {!isFullscreen && (
          <div className="sm:hidden mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="rounded-full border border-border px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground transition hover:border-foreground hover:text-foreground"
            >
              View fullscreen
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalBrandVisual;
