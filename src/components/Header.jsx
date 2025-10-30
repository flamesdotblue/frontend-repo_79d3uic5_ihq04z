import React from 'react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
          <span className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">Vibe</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#showcase" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 h-9 rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">Log in</button>
          <button className="px-4 h-9 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 transition">Get Started</button>
        </div>
      </div>
    </header>
  );
}
