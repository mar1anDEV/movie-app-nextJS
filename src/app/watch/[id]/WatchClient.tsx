"use client";

import React, { useState } from "react";
import {
  Search,
  Bell,
  Menu,
  Play,
  Plus,
  Bookmark,
  Volume2,
  RotateCcw,
  Maximize,
  Settings,
  Captions,
  ChevronDown,
  ChevronRight,
  Star,
  Home,
  Download,
  MoreHorizontal,
} from "lucide-react";

const movie = {
  title: "The Dark Knight",
  year: "2008",
  rating: "PG-13",
  duration: "2h 32m",
  quality: "4K UHD",
  imdb: "9.0",
  votes: "2.4M votes",
  genres: ["Action", "Crime", "Drama", "Thriller"],
  description:
    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  hero:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop",
  player:
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1600&auto=format&fit=crop",
};

const sources = [
  { name: "Fast Server", meta: "Best Quality", status: "online" },
  { name: "Server 2", meta: "Alternative", status: "online" },
  { name: "4K HDR", meta: "Premium", status: "online" },
  { name: "Backup Server", meta: "Stable", status: "offline" },
];

const recommendations = [
  "Inception",
  "The Dark Knight Rises",
  "Interstellar",
  "The Prestige",
  "Batman Begins",
  "Joker",
];

function Pill({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={`rounded-md border px-3 py-1 text-xs ${
        active
          ? "border-yellow-400 bg-yellow-400/10 text-yellow-300"
          : "border-white/10 bg-white/[0.04] text-white/80"
      }`}
    >
      {children}
    </span>
  );
}

function SourceButton({ source, active }: { source: (typeof sources)[number]; active?: boolean }) {
  return (
    <button
      className={`min-w-[120px] rounded-xl border p-3 text-left transition hover:bg-white/10 ${
        active
          ? "border-yellow-400 bg-yellow-400/10 shadow-[0_0_25px_rgba(250,204,21,.18)]"
          : "border-white/10 bg-black/30"
      }`}
    >
      <div className="flex items-center justify-between gap-2 text-sm font-semibold">
        {source.name}
        <span
          className={`h-2 w-2 rounded-full ${
            source.status === "online" ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </div>
      <p className="mt-1 text-xs text-white/45">{source.meta}</p>
    </button>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-5">
          <button className="lg:hidden">
            <Menu size={22} />
          </button>
          <h1 className="text-xl font-black tracking-tight text-yellow-400">MovieApp</h1>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
          {['Home', 'Trending', 'Movies', 'Series', 'Top Rated', 'Watch Later'].map((item, i) => (
            <a key={item} className={`transition hover:text-white ${i === 0 ? 'text-white' : ''}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full p-2 hover:bg-white/10">
            <Search size={20} />
          </button>
          <button className="hidden rounded-full p-2 hover:bg-white/10 sm:block">
            <Bell size={20} />
          </button>
          <div className="grid h-9 w-9 place-items-center rounded-full border border-yellow-400/40 bg-yellow-400/10 font-bold text-yellow-300">
            U
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden md:min-h-[680px]">
      <img src={movie.hero} alt="Movie backdrop" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1600px] items-end px-4 pb-10 pt-10 md:min-h-[680px] md:px-8 lg:items-center">
        <div className="max-w-xl">
          <button className="mb-8 flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <span>←</span> Back to Home
          </button>

          <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">{movie.title}</h2>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Pill>{movie.year}</Pill>
            <Pill>{movie.rating}</Pill>
            <Pill>{movie.duration}</Pill>
            <Pill>{movie.quality}</Pill>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <span>{movie.imdb}</span>
            <span className="rounded bg-yellow-400 px-2 py-1 text-xs font-black text-black">IMDb</span>
            <span className="text-white/60">{movie.votes}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <Pill key={genre}>{genre}</Pill>
            ))}
          </div>

          <p className="mt-5 max-w-lg leading-7 text-white/75">{movie.description}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 font-bold text-black transition hover:bg-yellow-300">
              <Play size={18} className="fill-black" /> Play Movie
            </button>
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 font-semibold transition hover:bg-white/10">
              <Play size={18} /> Watch Trailer
            </button>
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 font-semibold transition hover:bg-white/10">
              <Plus size={18} /> Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoPlayer() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl">
      <div className="relative aspect-video">
        <img src={movie.player} alt="Video preview" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-black/10" />
        <div className="absolute left-4 top-4 rounded-lg bg-black/50 px-3 py-2 text-sm font-semibold backdrop-blur-md">
          Movie Preview
        </div>
        <button className="absolute inset-0 m-auto grid h-20 w-20 place-items-center rounded-full border border-white/25 bg-black/40 backdrop-blur-md transition hover:scale-105 hover:bg-yellow-400 hover:text-black">
          <Play size={34} className="ml-1 fill-current" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="flex items-center justify-between text-xs text-white/80">
            <span>32:45</span>
            <span>2:32:13</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-white/20">
            <div className="relative h-full w-[42%] rounded-full bg-yellow-400">
              <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-yellow-300" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Play className="fill-white" size={20} />
              <RotateCcw size={20} />
              <Volume2 size={20} />
            </div>
            <div className="flex items-center gap-4">
              <Captions size={20} />
              <Settings size={20} />
              <Maximize size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WatchOptions() {
  const [activeSource, setActiveSource] = useState(0);

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-bold uppercase tracking-wide">Watch Options</h3>
        <ChevronDown size={18} />
      </div>

      <p className="mb-3 text-xs text-white/55">Video Source</p>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4">
        {sources.map((source, index) => (
          <div key={source.name} onClick={() => setActiveSource(index)}>
            <SourceButton source={source} active={activeSource === index} />
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          ["Quality", ["Auto", "4K UHD", "1080p", "720p", "480p"]],
          ["Audio", ["English", "Hindi", "Tamil", "More"]],
          ["Subtitles", ["English", "Hindi", "Spanish", "Off"]],
        ].map(([title, values]) => (
          <div key={title as string}>
            <p className="mb-2 text-xs text-white/55">{title as string}</p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              {(values as string[]).slice(0, 4).map((value, i) => (
                <button
                  key={value}
                  className={`rounded-lg border px-3 py-2 text-sm transition hover:bg-white/10 ${
                    i === 0 ? "border-yellow-400 bg-yellow-400/10 text-yellow-300" : "border-white/10 bg-black/20"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MovieExtras() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
      <h3 className="mb-4 font-bold uppercase tracking-wide">Movie Extras</h3>
      {[
        ["Watch Trailer", "2:24"],
        ["Behind the Scenes", "12:45"],
        ["Movie Clips", "8 Videos"],
      ].map(([title, meta]) => (
        <button key={title} className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left last:border-b-0">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
              <Play size={16} />
            </span>
            <div>
              <p className="font-medium">{title}</p>
              <p className="text-xs text-white/45">{meta}</p>
            </div>
          </div>
          <ChevronRight size={18} />
        </button>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-5 flex gap-6 border-b border-white/10 text-sm">
        <button className="border-b-2 border-yellow-400 pb-3 text-yellow-300">About</button>
        <button className="pb-3 text-white/55">Cast</button>
        <button className="pb-3 text-white/55">Reviews (1.2K)</button>
      </div>
      <div className="grid gap-6 md:grid-cols-[1.1fr_1.4fr]">
        <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
          <div><p className="text-white/40">Director</p><p>Christopher Nolan</p></div>
          <div><p className="text-white/40">Language</p><p>English</p></div>
          <div><p className="text-white/40">Release Date</p><p>July 18, 2008</p></div>
          <div><p className="text-white/40">Box Office</p><p>$1.0 Billion</p></div>
        </div>
        <p className="text-sm leading-7 text-white/65">
          Batman raises the stakes in his war on crime. With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, he sets out to dismantle the remaining criminal organizations that plague the streets.
        </p>
      </div>
    </section>
  );
}

function Recommendations() {
  return (
    <section>
      <h3 className="mb-4 font-bold uppercase tracking-wide">More Like This</h3>
      <div className="flex gap-4 overflow-x-auto pb-3 lg:grid lg:grid-cols-6 lg:overflow-visible">
        {recommendations.map((item, index) => (
          <article key={item} className="min-w-[160px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-yellow-400/40">
            <div className="h-40 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
            <div className="p-3">
              <h4 className="truncate font-medium">{item}</h4>
              <p className="mt-2 flex items-center gap-2 text-xs text-white/60">
                <Star size={13} className="fill-yellow-400 text-yellow-400" /> {(8.8 - index * 0.1).toFixed(1)} <span>202{index}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/85 px-4 py-2 backdrop-blur-xl md:hidden">
      <div className="flex justify-around text-xs text-white/70">
        {[
          [Home, "Home"],
          [RotateCcw, "Trending"],
          [Bookmark, "Watchlist"],
          [Download, "Downloads"],
          [MoreHorizontal, "More"],
        ].map(([Icon, label], index) => {
          const Component = Icon as React.ElementType;
          return (
            <button key={label as string} className={`flex flex-col items-center gap-1 ${index === 0 ? "text-yellow-400" : ""}`}>
              <Component size={19} />
              {label as string}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default function MovieWatchPageResponsive() {
  return (
    <main className="min-h-screen bg-black pb-20 text-white selection:bg-yellow-400 selection:text-black md:pb-0">
      <Navbar />
      <Hero />

      <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-4 py-6 md:px-8 xl:grid-cols-[minmax(0,1.65fr)_minmax(360px,.8fr)]">
        <div className="space-y-6">
          <VideoPlayer />
          <About />
          <Recommendations />
        </div>

        <aside className="space-y-6">
          <WatchOptions />
          <MovieExtras />
        </aside>
      </section>

      <BottomNav />
    </main>
  );
}
