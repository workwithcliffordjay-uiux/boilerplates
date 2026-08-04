import React from "react";
import Link from "next/link";

export default function Menu(props) {
  const menuItems = props.items || [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 py-8 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-slate-900">
          Logo
        </Link>

        <ul className="flex items-center gap-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
