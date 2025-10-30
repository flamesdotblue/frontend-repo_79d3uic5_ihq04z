import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
            <span className="text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">Vibe</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {year} Vibe UI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
