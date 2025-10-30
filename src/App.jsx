import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="showcase" className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight">Showcase</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-2xl">
                Swap this section with your product screenshots, a small gallery, or an embedded demo. It is responsive by default and ready to be customized.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1,2,3].map((i) => (
                  <div key={i} className="aspect-[16/10] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
