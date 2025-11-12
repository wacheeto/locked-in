import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 text-white px-6 py-10 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Brand Section */}
        <aside className="text-center sm:text-left">
          <h1 className="text-2xl font-extrabold text-green-500 tracking-wide">LockedIn</h1>
          <p className="text-sm text-zinc-400 mt-1">
            Copyright © {year} — All rights reserved
          </p>
        </aside>

        {/* Navigation Section */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-zinc-white hover:text-zinc-300 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
