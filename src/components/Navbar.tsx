"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#book-demo", label: "Book Demo" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-sm">
            V
          </div>
          <span className="text-lg font-bold text-slate-900">Valued AI</span>
        </Link>

        {/* Nav links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#book-demo"
          className="bg-cta hover:bg-cta-hover text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          Book a Demo
        </a>
      </div>
    </nav>
  );
}
