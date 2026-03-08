import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type VideoRecord = {
  id: string;
  slug: string;
  title: string;
  description: string;
  source: string;
  fileName?: string;
  views: number;
  createdAt: string;
  updatedAt: string;
};

type VideoLibraryContextValue = {
  videos: VideoRecord[];
  addVideo: (video: Omit<VideoRecord, "id" | "views" | "createdAt" | "updatedAt" | "slug"> & {
    slug?: string;
  }) => VideoRecord;
  updateVideo: (id: string, updates: Partial<Omit<VideoRecord, "id" | "slug" | "createdAt">>) => void;
  incrementView: (slug: string) => void;
  removeVideo: (id: string) => void;
};

const STORAGE_KEY = "emporom-video-library";

const obsoleteSlugs = new Set(["agency-visual"]);
const defaultVideos: VideoRecord[] = [];

const VideoLibraryContext = createContext<VideoLibraryContextValue | undefined>(undefined);

const slugify = (value: string, existing: string[]) => {
  const base = value
    .toLowerCase()
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  let slug = base || `video-${Date.now()}`;
  let index = 1;
  while (existing.includes(slug)) {
    slug = `${base}-${index}`;
    index += 1;
  }
  return slug;
};

export const VideoLibraryProvider = ({ children }: { children: ReactNode }) => {
  const [videos, setVideos] = useState<VideoRecord[]>(() => {
    if (typeof window === "undefined") {
      return defaultVideos;
    }
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
      const parsed: VideoRecord[] = JSON.parse(stored);
      if (parsed.length) {
        const filtered = parsed.filter((record) => !obsoleteSlugs.has(record.slug));
        return filtered;
      }
      }
    } catch (error) {
      // ignore
    }
    return defaultVideos;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
  }, [videos]);

  const addVideo = (video: {
    title: string;
    description: string;
    source: string;
    slug?: string;
  }): VideoRecord => {
    const timestamp = new Date();
    const slug = video.slug
      ? video.slug
      : slugify(video.title, videos.map((item) => item.slug));
    const record: VideoRecord = {
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      slug,
      title: video.title,
      description: video.description,
      source: video.source,
      views: 0,
      createdAt: timestamp.toISOString(),
      updatedAt: timestamp.toISOString(),
    };
    setVideos((prev) => [record, ...prev]);
    return record;
  };

  const updateVideo = (
    id: string,
    updates: Partial<Omit<VideoRecord, "id" | "slug" | "createdAt">>,
  ) => {
    setVideos((prev) =>
      prev.map((record) =>
        record.id === id
          ? {
              ...record,
              ...updates,
              updatedAt: new Date().toISOString(),
            }
          : record,
      ),
    );
  };

  const incrementView = (slug: string) => {
    setVideos((prev) =>
      prev.map((record) =>
        record.slug === slug
          ? {
              ...record,
              views: record.views + 1,
              updatedAt: new Date().toISOString(),
            }
          : record,
      ),
    );
  };

  const removeVideo = (id: string) => {
    setVideos((prev) => prev.filter((record) => record.id !== id));
  };

  const value = useMemo(
    () => ({
      videos,
      addVideo,
      updateVideo,
      incrementView,
      removeVideo,
    }),
    [videos],
  );

  return <VideoLibraryContext.Provider value={value}>{children}</VideoLibraryContext.Provider>;
};

export const useVideoLibrary = () => {
  const context = useContext(VideoLibraryContext);
  if (!context) {
    throw new Error("useVideoLibrary must be used within VideoLibraryProvider");
  }
  return context;
};
