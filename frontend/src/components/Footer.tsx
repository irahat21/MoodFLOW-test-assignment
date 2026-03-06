export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="font-display font-bold text-xl tracking-tight">MoodFLOW</span>
        </div>

        <p className="text-slate-500 font-sans tracking-widest uppercase text-sm mb-8">
          track &bull; reflect &bull; improve
        </p>

        <div className="h-px w-24 bg-slate-800 mb-8" />

        <p className="text-slate-500 text-sm font-sans">
          &copy; {new Date().getFullYear()} MoodFLOW. A DS-404 Project
        </p>
      </div>
    </footer>
  );
}
