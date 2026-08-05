import Menu from "@/components/_layout/partials/Menu";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Menu />
      <div className="min-h-[calc(100vh-90px)] bg-white text-slate-900 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-md space-y-6">
          <div className="mx-auto w-52 h-52 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
            <svg
              className="w-52 h-52 stroke-[1.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 15l-5-5L5 21"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3l18 18"
                className="stroke-slate-300 stroke-[2]"
              />
            </svg>
          </div>

          <div className="space-y-2">
            <span className="text-sm font-semibold text-red-400 tracking-widest uppercase">
              Error 404
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Page Not Found
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              The link you followed may be broken, or the page may have been
              removed.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
