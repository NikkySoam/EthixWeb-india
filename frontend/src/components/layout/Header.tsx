import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Link, useLocation } from "react-router-dom";

/**
 * Header navigation component.
 * Responsive header with logo, navigation links, and a mobile hamburger menu.
 * Uses hash anchors to scroll to sections on the homepage.
 */
export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/#industries" },
    { name: "Work", href: "/#work" },
  ];

  const ctaClass =
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#171211] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand";

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.slice(1);
    }

    if (href === "/") {
      return location.pathname === "/" && !location.hash;
    }

    return location.pathname === href;
  };

  return (
    <header className="sticky top-2 z-50 mx-3 mt-3 rounded-2xl border border-neutral-200/80 bg-white/90 shadow-sm backdrop-blur-xl sm:mx-5" id="home">
      <Container className="flex min-h-[68px] items-center justify-between gap-4 py-3">
        <Link to="/" className="shrink-0 font-sans text-xl font-extrabold text-neutral-950 sm:text-2xl" aria-label="EthixWeb home">
          ETHIX<span className="text-brand">WEB</span>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Main navigation">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={`relative py-2 text-[13px] transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                isActiveLink(link.href)
                  ? "font-semibold text-brand after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-brand"
                  : "text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
            IN <span className="text-neutral-400">/</span> IST
          </span>
          <Link
            to="/admin/login"
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Admin
          </Link>
          <Link to="/contact" className={ctaClass}>
            Start a project
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
              <path d="M6 14 14 6M6 6h8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        {/* Mobile menu button */}
        <button
          className="rounded-full p-2 text-neutral-800 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>
      {/* Mobile navigation panel */}
      {open && (
        <nav className="border-t border-neutral-200 lg:hidden" aria-label="Mobile navigation">
          <Container className="flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2.5 text-sm transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  isActiveLink(link.href)
                    ? "bg-brand/5 font-semibold text-brand"
                    : "text-gray-800"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin/login"
              className="mt-2 rounded-full border border-neutral-300 px-5 py-2.5 text-center text-sm font-medium text-neutral-700 transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              onClick={() => setOpen(false)}
            >
              Admin
            </Link>
            <Link to="/contact" className={`${ctaClass} mt-2`} onClick={() => setOpen(false)}>
              Start a project
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
};
