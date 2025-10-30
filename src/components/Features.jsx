import React from 'react';
import { Shield, Zap, Palette, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Polished UI Kit',
    desc: 'Well-crafted components you can mix, match, and ship fast.'
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    desc: 'Vite-powered dev experience with instant feedback.'
  },
  {
    icon: Palette,
    title: 'Theming Ready',
    desc: 'Light and dark modes with tasteful gradients and color.'
  },
  {
    icon: Shield,
    title: 'Production Safe',
    desc: 'Accessible, responsive, and type-safe foundations.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-gradient-to-b from-transparent to-zinc-50 dark:to-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Everything you need</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">A thoughtful set of building blocks to kickstart your next idea.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 text-white shadow-sm">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
