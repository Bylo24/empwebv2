import TrackingScripts from "@/components/TrackingScripts";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WorkWithUsPage from "./components/WorkWithUs";
import V1WebLanding from "./pages/V1WebLanding";
import VideoUpload from "./pages/VideoUpload";
import VideoViewer from "./pages/VideoViewer";
import { VideoLibraryProvider } from "@/context/VideoLibraryContext";

const queryClient = new QueryClient();

const App = () => (
  <VideoLibraryProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TrackingScripts />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/v1weblanding" element={<V1WebLanding />} />
            <Route path="/work-with-us" element={<WorkWithUsPage />} />
            <Route path="/upload" element={<VideoUpload />} />
            <Route path="/video/:slug" element={<VideoViewer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </VideoLibraryProvider>
);

export default App;
