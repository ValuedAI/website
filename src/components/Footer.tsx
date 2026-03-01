export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-xs">
              V
            </div>
            <span className="text-sm font-semibold text-slate-900">
              Valued AI
            </span>
            <span className="text-sm text-slate-400 ml-1">
              | Built for manufacturing teams
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="mailto:hello@valued.ai" className="hover:text-slate-600 transition-colors">
              hello@valued.ai
            </a>
            <span>&copy; {new Date().getFullYear()} Valued AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
