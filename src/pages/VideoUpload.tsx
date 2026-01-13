import { FormEvent, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useVideoLibrary } from "@/context/VideoLibraryContext";

const PASSWORD = "apples321";

const defaultFormValues = {
  title: "New Emporom video title",
  description: "Describe what the clip covers so teammates know why we shared it.",
  source: "",
};

const toDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (event) => {
      reject(event);
    };
    reader.readAsDataURL(file);
  });

const VideoUpload = () => {
  const { videos, addVideo, updateVideo, incrementView, removeVideo } = useVideoLibrary();
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [form, setForm] = useState(defaultFormValues);
  const [activeEditId, setActiveEditId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState(defaultFormValues);
  const [file, setFile] = useState<File | null>(null);
  const [fileLabel, setFileLabel] = useState<string>("No file chosen");

  const baseUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  }, []);

  useEffect(() => {
    if (activeEditId) {
      const active = videos.find((video) => video.id === activeEditId);
      if (active) {
        setEditForm({
          title: active.title,
          description: active.description,
          source: active.source,
        });
      }
    }
  }, [activeEditId, videos]);

  const handlePassword = (event: FormEvent) => {
    event.preventDefault();
    if (password === PASSWORD) {
      setAuthorized(true);
      setPasswordError("");
    } else {
      setPasswordError("Password does not match.");
    }
  };

  const handleCreate = async (event: FormEvent) => {
    event.preventDefault();
    if (!authorized) return;
    let source = form.source;
    let fileName: string | undefined;
    if (file) {
      try {
        source = await toDataUrl(file);
        fileName = file.name;
      } catch {
        // fallback to manual source input
      }
    }
    addVideo({ ...form, source, fileName });
    setForm(defaultFormValues);
    setFile(null);
    setFileLabel("No file chosen");
  };

  const handleEditSave = (videoId: string) => {
    updateVideo(videoId, editForm);
    setActiveEditId(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this video permanently?")) {
      removeVideo(id);
      if (activeEditId === id) {
        setActiveEditId(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="section-base flex flex-col items-center gap-8">
          {!authorized && (
            <form
              className="w-full max-w-md rounded-3xl border border-border bg-card/70 p-6 shadow-xl shadow-zinc-900/5"
              onSubmit={handlePassword}
            >
              <p className="text-sm font-medium mb-3">Enter password to continue</p>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                className="w-full rounded-2xl border border-border px-4 py-3 text-sm"
              />
              {passwordError && <p className="text-sm text-destructive mt-2">{passwordError}</p>}
              <Button asChild variant="default" size="lg" className="mt-4 w-full">
                <button type="submit">Unlock upload</button>
              </Button>
            </form>
          )}

          {authorized && (
            <>
              <form
                className="w-full max-w-4xl space-y-4 rounded-3xl border border-border bg-card/70 p-6 shadow-xl shadow-zinc-900/5"
                onSubmit={handleCreate}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">New video</p>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="space-y-1 text-sm font-semibold">
                    Title
                    <input
                      type="text"
                      value={form.title}
                      onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
                      className="w-full rounded-2xl border border-border px-4 py-3 text-sm"
                    />
                  </label>
                  <label className="space-y-1 text-sm font-semibold">
                    Source path (relative to public)
                    <input
                      type="text"
                      value={form.source}
                      onChange={(event) => setForm((prev) => ({ ...prev, source: event.target.value }))}
                      className="w-full rounded-2xl border border-border px-4 py-3 text-sm"
                      placeholder="/videos/custom.mp4"
                    />
                  </label>
                </div>
                <label className="space-y-1 text-sm font-semibold">
                  Upload video file
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(event) => {
                      const selected = event.target.files?.[0] ?? null;
                      setFile(selected);
                      setFileLabel(selected?.name ?? "No file chosen");
                    }}
                    className="w-full text-xs"
                  />
                  <p className="text-xs text-muted-foreground">{fileLabel}</p>
                </label>
                <label className="space-y-1 text-sm font-semibold">
                  Description
                  <textarea
                    value={form.description}
                    onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
                    className="w-full rounded-2xl border border-border px-4 py-3 text-sm resize-none"
                    rows={4}
                  />
                </label>
                <Button asChild variant="default" size="lg">
                  <button type="submit">Add video</button>
                </Button>
              </form>

              <div className="w-full max-w-5xl space-y-4">
                <div className="rounded-2xl border border-border bg-background/70 p-4 text-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Shareable URLs</p>
                  <ul className="mt-2 space-y-1 text-foreground/80">
                    {videos.map((record) => (
                      <li key={`link-${record.slug}`}>
                        <code className="break-all text-xs">{`${baseUrl}/video/${record.slug}`}</code>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  {videos.map((videoRecord) => (
                    <div
                      key={videoRecord.id}
                      className="rounded-3xl border border-border bg-card/60 p-5 shadow-lg shadow-zinc-900/5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-lg font-semibold">{videoRecord.title}</p>
                          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            {videoRecord.slug}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{videoRecord.views} views</span>
                          <span>updated {new Date(videoRecord.updatedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{videoRecord.description}</p>
                      {videoRecord.fileName && (
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                          Uploaded file: {videoRecord.fileName}
                        </p>
                      )}
                      <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span>Source: {videoRecord.source}</span>
                        <span>Link: {baseUrl ? `${baseUrl}/video/${videoRecord.slug}` : "copy link"}</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2 text-sm">
                        <button
                          type="button"
                          onClick={() => incrementView(videoRecord.slug)}
                          className="rounded-2xl border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
                        >
                          Record view
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveEditId(videoRecord.id)}
                          className="rounded-2xl border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(videoRecord.id)}
                          className="rounded-2xl border border-destructive px-4 py-2 text-sm font-semibold text-destructive hover:text-foreground"
                        >
                          Delete
                        </button>
                        <a
                          href={`${baseUrl}/video/${videoRecord.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
                        >
                          View link
                        </a>
                      </div>

                      {activeEditId === videoRecord.id && (
                        <div className="mt-4 rounded-2xl border border-border bg-background/60 p-4 space-y-3">
                          <p className="text-sm font-semibold">Edit details</p>
                          <input
                            type="text"
                            value={editForm.title}
                            onChange={(event) => setEditForm((prev) => ({ ...prev, title: event.target.value }))}
                            className="w-full rounded-2xl border border-border px-3 py-2 text-sm"
                          />
                          <textarea
                            value={editForm.description}
                            onChange={(event) =>
                              setEditForm((prev) => ({ ...prev, description: event.target.value }))
                            }
                            className="w-full rounded-2xl border border-border px-3 py-2 text-sm resize-none"
                            rows={3}
                          />
                          <input
                            type="text"
                            value={editForm.source}
                            onChange={(event) => setEditForm((prev) => ({ ...prev, source: event.target.value }))}
                            className="w-full rounded-2xl border border-border px-3 py-2 text-sm"
                          />
                          <div className="flex flex-wrap gap-3">
                            <Button
                              asChild
                              variant="default"
                              size="sm"
                              className="px-4 py-2"
                              onClick={() => handleEditSave(videoRecord.id)}
                            >
                              <button type="button">Save changes</button>
                            </Button>
                            <Button
                              asChild
                              variant="ghost"
                              size="sm"
                              className="px-4 py-2"
                              onClick={() => setActiveEditId(null)}
                            >
                              <button type="button">Cancel</button>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideoUpload;
