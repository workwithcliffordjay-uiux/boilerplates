import React from "react";
import Link from "next/link"; // Replace with standard <a> tag or React Router Link if needed

export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  // Configurable footer link sections
  const footerSections = props.sections || [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Documentation", href: "/docs" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-600 mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <Link href="/" className="text-lg font-bold text-slate-900">
              Logo
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Building simple, reliable web tools for your business.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="hover:text-slate-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Your Company, Inc. All rights reserved.</p>
          <p className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-600 transition-colors"
            >
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
