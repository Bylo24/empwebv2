import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Clarity from "@microsoft/clarity";

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

type FbqWithExtras = {
  (...args: unknown[]): void;
  queue: unknown[][];
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
  push?: FbqWithExtras;
};

const initMetaPixel = (pixelId: string) => {
  if (!pixelId) return;

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      const fbqWithExtras = fbq as FbqWithExtras;
      if (fbqWithExtras.callMethod) {
        fbqWithExtras.callMethod.apply(fbqWithExtras, args as unknown[]);
      } else {
        fbqWithExtras.queue.push(args);
      }
    } as FbqWithExtras;
    fbq.queue = [];
    fbq.callMethod = function (...args: unknown[]) {
      fbq.queue.push(args);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;

    loadScript("https://connect.facebook.net/en_US/fbevents.js", "facebook-pixel");
  }

  window.fbq!("init", pixelId);
  window.fbq!("track", "PageView");
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

const TRACKED_CLARITY_PATH = "/v1weblanding";
const DEFAULT_CLARITY_PROJECT_ID = "vulv83s7kv";

const TrackingScripts = () => {
  const envMetaPixelId = import.meta.env.VITE_META_PIXEL_ID;
  const metaPixelId = envMetaPixelId || DEFAULT_META_PIXEL_ID;
  const googleGtagId = import.meta.env.VITE_GOOGLE_GTAG_ID;
  const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID;
  const clarityEnvId = import.meta.env.VITE_MICROSOFT_CLARITY_ID;
  const clarityId = clarityEnvId || DEFAULT_CLARITY_PROJECT_ID;
  const location = useLocation();
  const clarityInitialized = useRef(false);

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

  useEffect(() => {
    if (clarityInitialized.current || !clarityId) {
      return;
    }

    if (location.pathname === TRACKED_CLARITY_PATH) {
      Clarity.init(clarityId);
      clarityInitialized.current = true;
    }
  }, [clarityId, location.pathname]);

  return null;
};

export default TrackingScripts;
