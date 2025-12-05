import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-violet-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-500/50"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-violet-300 group-hover:to-emerald-300 transition-all duration-300">
                Pratejra/Shaivra
              </h1>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">The Veil Between Worlds</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const colors = [
                'hover:text-blue-400 hover:bg-blue-900/20',
                'hover:text-violet-400 hover:bg-violet-900/20',
                'hover:text-emerald-400 hover:bg-emerald-900/20',
                'hover:text-cyan-400 hover:bg-cyan-900/20'
              ];
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-500/30'
                      : `text-slate-300 ${colors[index]} hover:transform hover:scale-105`
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Status & Mobile menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-500/50"></div>
              <span className="text-sm text-emerald-400 font-medium">System Active</span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/20"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-700/50">
            <div className="px-4 py-6 space-y-2 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
              {navItems.map((item, index) => {
                const colors = [
                  'hover:text-blue-400 hover:bg-blue-900/20',
                  'hover:text-violet-400 hover:bg-violet-900/20',
                  'hover:text-emerald-400 hover:bg-emerald-900/20',
                  'hover:text-cyan-400 hover:bg-cyan-900/20'
                ];
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'text-white bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-500/30'
                        : `text-slate-300 ${colors[index]}`
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;