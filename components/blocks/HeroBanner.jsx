import React from "react";
import Link from "next/link"; // Replace with standard <a> tag or React Router Link if needed

export default function HeroBanner(props) {
  // Configurable content via props with clean defaults
  const title = props.title || "Welcome to Our Platform";
  const subtitle =
    props.subtitle ||
    "Build faster, scale smarter, and deliver incredible experiences for your users with our modern tools.";
  const primaryCTA = props.primaryCTA || {
    label: "Get Started",
    href: "/signup",
  };
  const secondaryCTA = props.secondaryCTA || {
    label: "Learn More",
    href: "/about",
  };

  return (
    <section className="w-full h-[calc(100vh-90px)] flex items-center bg-white text-slate-900 border-b border-slate-100 ">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {title}
        </h2>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href={primaryCTA.href}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors shadow-sm active:scale-95 text-center"
          >
            {primaryCTA.label}
          </Link>

          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 font-medium text-sm transition-colors active:scale-95 text-center"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
