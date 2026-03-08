import { useEffect } from "react";

const loadScript = (src: string, id: string) => {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.defer = true;
  script.id = id;
  document.head.appendChild(script);
};

const DEFAULT_META_PIXEL_ID = "897430143196782";

const initMetaPixel = (pixelId: string) => {
  if (!pixelId) return;

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      (fbq.q = fbq.q || []).push(args);
    };
    fbq.q = fbq.q || [];
    fbq.l = Date.now();
    window.fbq = fbq;
  }

  window.fbq!("init", pixelId);
  window.fbq!("track", "PageView");

  loadScript("https://connect.facebook.net/en_US/fbevents.js", "facebook-pixel");
};

const initGoogleTags = (googleIds: string[]) => {
  if (googleIds.length === 0) return;

  loadScript(`https://www.googletagmanager.com/gtag/js?id=${googleIds[0]}`, "gtag-js");

  window.dataLayer = window.dataLayer || [];
  const gtag = function (...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag = window.gtag || gtag;
  window.gtag!("js", new Date());

  googleIds.forEach((id) => {
    window.gtag!("config", id, {
      send_page_view: true,
    });
  });
};

const TrackingScripts = () => {
  const envMetaPixelId = import.meta.env.VITE_META_PIXEL_ID;
  const metaPixelId = envMetaPixelId || DEFAULT_META_PIXEL_ID;
  const googleGtagId = import.meta.env.VITE_GOOGLE_GTAG_ID;
  const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID;

  useEffect(() => {
    if (metaPixelId) {
      initMetaPixel(metaPixelId);
    }
  }, [metaPixelId]);

  useEffect(() => {
    const ids = [googleGtagId, googleAdsId].filter(Boolean) as string[];
    if (ids.length) {
      initGoogleTags(ids);
    }
  }, [googleGtagId, googleAdsId]);

  return null;
};

export default TrackingScripts;
