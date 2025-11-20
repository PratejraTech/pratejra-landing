/**
 * Footer component
 */
export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-[#4FC3F7]/20 rounded-full blur-md" />
            <div className="relative w-full h-full bg-gradient-to-br from-[#4FC3F7] to-[#4FC3F7]/60 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#F5F5F5] rounded-full" />
            </div>
          </div>
          <span className="tracking-wider">Pratejra/Shaivra</span>
        </div>
        
        <div className="text-gray-500 text-sm">
          v1.0.0 — Authored by Sunyata, August 2025
        </div>
      </div>
    </footer>
  );
}

