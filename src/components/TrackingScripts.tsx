import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
const CLARITY_SCRIPT_ID = "microsoft-clarity-script";

type FbqWithExtras = {
  (...args: unknown[]): void;
  queue: unknown[][];
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
  push?: FbqWithExtras;
};

type ClarityQueue = unknown[][];
type ClarityFunction = ((...args: unknown[]) => void) & { q?: ClarityQueue };

declare global {
  interface Window {
    clarity?: ClarityFunction;
  }
}

const createClarityStub = (): ClarityFunction => {
  const queue: ClarityQueue = [];
  const stub = ((...args: unknown[]) => queue.push(args)) as ClarityFunction;
  stub.q = queue;
  return stub;
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

const initMicrosoftClarity = (clarityId: string) => {
  if (!clarityId || document.getElementById(CLARITY_SCRIPT_ID)) {
    return;
  }

  if (!window.clarity) {
    window.clarity = createClarityStub();
  }

  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = `https://www.clarity.ms/tag/${clarityId}`;
  script.id = CLARITY_SCRIPT_ID;

  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
};

const TRACKED_CLARITY_PATH = "/v1weblanding";

const TrackingScripts = () => {
  const envMetaPixelId = import.meta.env.VITE_META_PIXEL_ID;
  const metaPixelId = envMetaPixelId || DEFAULT_META_PIXEL_ID;
  const googleGtagId = import.meta.env.VITE_GOOGLE_GTAG_ID;
  const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID;
  const clarityId = import.meta.env.VITE_MICROSOFT_CLARITY_ID;
  const location = useLocation();

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
    if (clarityId && location.pathname === TRACKED_CLARITY_PATH) {
      initMicrosoftClarity(clarityId);
    }
  }, [clarityId, location.pathname]);

  return null;
};

export default TrackingScripts;
