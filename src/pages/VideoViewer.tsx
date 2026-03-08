import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useVideoLibrary } from "@/context/VideoLibraryContext";

const VideoViewer = () => {
  const { slug } = useParams<{ slug: string }>();
  const { videos, incrementView } = useVideoLibrary();

  const video = videos.find((record) => record.slug === slug);

  useEffect(() => {
    if (video) {
      incrementView(video.slug);
    }
  }, [video, incrementView]);

  if (!video) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 text-center space-y-4">
          <p className="text-2xl font-semibold">Video not found</p>
          <p className="text-muted-foreground">Check the link or add a new video from the upload dashboard.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="section-base">
          <div className="max-w-5xl mx-auto space-y-6 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Emporom Video</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{video.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{video.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild variant="default" size="lg">
                <a href={`#video-${video.slug}`}>Watch now</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="/upload">Manage videos</a>
              </Button>
            </div>
          </div>
          <div className="mt-12 rounded-3xl border border-border bg-black/70 p-1 shadow-xl shadow-zinc-900/20">
            <div
              id={`video-${video.slug}`}
              className="relative aspect-[16/9] overflow-hidden rounded-2xl"
            >
              <video
                src={video.source}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideoViewer;
