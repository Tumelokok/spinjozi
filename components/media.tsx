"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageAsset = { src: string; alt: string; width: number; height: number };

function MediaFallback({ className = "", label = "SpinJozi" }: { className?: string; label?: string }) {
  return <div role="img" aria-label={`${label} media is unavailable`} className={`grid place-items-center bg-plum p-5 text-center ${className}`}><span className="font-display text-lg font-bold tracking-[-.04em] text-white">SPIN<span className="text-lime">JOZI</span></span></div>;
}

export function AssetImage({ asset, sizes, priority = false, className = "", fallbackClassName = "" }: { asset: ImageAsset; sizes: string; priority?: boolean; className?: string; fallbackClassName?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <MediaFallback label={asset.alt} className={fallbackClassName || className} />;
  return <Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} sizes={sizes} priority={priority} onError={() => setFailed(true)} className={className} />;
}

function shouldAvoidAutoplay() {
  if (typeof window === "undefined") return true;
  const connection = navigator as Navigator & { connection?: { saveData?: boolean } };
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection.connection?.saveData === true;
}

export function HeroMedia({ image, video }: { image: ImageAsset; video: string }) {
  const [canPlay, setCanPlay] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  useEffect(() => { setCanPlay(!shouldAvoidAutoplay()); }, []);

  if (!canPlay || videoFailed) return <AssetImage asset={image} priority sizes="(max-width: 1023px) 100vw, 52vw" className="relative aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-float" fallbackClassName="relative aspect-[4/3] w-full rounded-[2.5rem] shadow-float" />;
  return <video autoPlay muted loop playsInline preload="metadata" poster={image.src} onError={() => setVideoFailed(true)} className="relative aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-float" aria-label="SpinJozi 360 photo booth in action"><source src={video} type="video/mp4" /></video>;
}

export function GalleryVideo({ video, poster, ariaLabel }: { video: string; poster: ImageAsset; ariaLabel: string }) {
  const [loaded, setLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = target.current;
    if (!element || shouldAvoidAutoplay()) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setLoaded(true); observer.disconnect(); } }, { rootMargin: "200px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={target} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-plum">{videoFailed || !loaded ? <AssetImage asset={poster} sizes="(max-width: 767px) 100vw, 50vw" className="h-full w-full object-cover" fallbackClassName="h-full w-full" /> : <video autoPlay muted loop playsInline preload="none" poster={poster.src} onError={() => setVideoFailed(true)} className="h-full w-full object-cover" aria-label={ariaLabel}><source src={video} type="video/mp4" /></video>}<span className="absolute bottom-3 left-3 rounded-full bg-ink/75 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">Watch the spin</span></div>;
}
