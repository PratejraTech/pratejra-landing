'use client';

import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Allies', href: '/allies' },
  { label: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#030307]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 text-white/70 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">Pratejra</p>
          <p className="text-sm leading-relaxed text-white/70">
            Ethical cybersecurity intelligence for non-profits, activists, and community stewards who need enterprise-grade support without surveillance.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">Navigate</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">Contact</p>
          <p className="mt-4 text-sm">contact@pratejra.build</p>
          <p className="text-sm text-white/60">Global operations, remote-first</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Pratejra. Protecting mission-driven communities everywhere.
      </div>
    </footer>
  );
};

export default Footer;
