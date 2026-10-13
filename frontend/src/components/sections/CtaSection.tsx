import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";


/**
 * Final call‑to‑action section.
 * Closes the homepage with a clear route to the enquiry form.
 */
export const CtaSection: React.FC = () => {
  return (
    <section
      id="home-cta"
      className="relative isolate overflow-hidden bg-[#241918] py-16 text-white sm:py-20"
      style={{ backgroundImage: "radial-gradient(ellipse at 85% 20%, rgba(214, 40, 40, 0.34), transparent 42%)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      <Container className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase text-red-200">Your next move starts here</p>
          <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl">Ready to build what your business needs next?</h2>
          <p className="mt-4 max-w-xl leading-7 text-neutral-300">
            Tell us where you want to go. We’ll help shape a practical digital plan for your business and your customers in India.
          </p>
        </div>
        <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-neutral-900 transition hover:bg-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900">
          Start a project
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </Container>
    </section>
  );
};
