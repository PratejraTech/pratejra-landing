'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/allies', label: 'Allies' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030307]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-tight text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#040308] font-bold">
            P
          </span>
          Pratejra
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/60 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-colors hover:text-white ${
                pathname === item.path ? 'text-white' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/portal"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#040308] transition hover:scale-[1.02]"
          >
            Downloads
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-full border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/10 bg-[#030307] px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.3em] text-white/70">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`transition-colors hover:text-white ${
                  pathname === item.path ? 'text-white' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/portal"
              className="rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.3em]"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#040308]"
              onClick={() => setIsOpen(false)}
            >
              Downloads
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
