import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-fuchsia-500 via-rose-400 to-amber-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 shadow-sm">
            <Star size={14} className="text-amber-500" />
            Now in Public Beta
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Build beautiful experiences,
            <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent"> effortlessly</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
            A modern starter that blends performance, aesthetics, and developer joy. Design faster, ship sooner, and delight your users.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
              <Rocket size={18} />
              Get Started
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
              Live Demo
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-5 text-left shadow-sm">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Performance</p>
              <p className="mt-1 text-zinc-800 dark:text-zinc-100 font-medium">Vite + React + Tailwind out of the box</p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-5 text-left shadow-sm">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Styling</p>
              <p className="mt-1 text-zinc-800 dark:text-zinc-100 font-medium">Utility-first design with thoughtful defaults</p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 p-5 text-left shadow-sm">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">DX</p>
              <p className="mt-1 text-zinc-800 dark:text-zinc-100 font-medium">Clean structure and ready-to-extend components</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
