import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="font-display font-bold text-xl tracking-tight">MoodFLOW</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-slate-600 dark:text-slate-300 font-medium">
          <Link href="#" className="hover:text-brand-600 transition-colors">Features</Link>
          <Link href="#" className="hover:text-brand-600 transition-colors">How it works</Link>
          <Link href="#" className="hover:text-brand-600 transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-lg shadow-brand-600/20 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
