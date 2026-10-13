import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";


/**
 * Hero section – prominent headline with CTA.
 * Uses the "#hero" id for navigation anchoring.
 */
export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="overflow-hidden bg-[#fbf5f2] py-14 sm:py-20 lg:py-24"
      style={{ backgroundImage: "radial-gradient(ellipse at 78% 42%, rgba(214, 40, 40, 0.11), transparent 44%)" }}
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/75 px-3 py-1.5 text-sm font-medium text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
            Digital operations for India
          </div>

          <h1 className="font-sans text-5xl font-extrabold leading-[0.98] text-[#231716] sm:text-6xl lg:text-7xl">
            We run the
            <span className="block text-brand">digital.</span>
            You grow the
            <span className="block text-brand">business.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
            Websites, customer journeys, and growth systems shaped around how people discover and buy across India, from WhatsApp conversations to UPI-ready experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#171211] px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Start a project
              <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="#services"
              className="rounded-full px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Explore capabilities
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 border-t border-neutral-900/10 pt-5 text-xs font-medium text-neutral-600 sm:text-sm">
            <span>Mobile-first</span>
            <span aria-hidden="true" className="text-brand">/</span>
            <span>WhatsApp-ready</span>
            <span aria-hidden="true" className="text-brand">/</span>
            <span>India-aware</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 -rotate-2 rounded-[2rem] border border-brand/10 bg-white/35" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-white p-4 shadow-[0_28px_80px_rgba(60,24,22,0.14)] sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4">
              <div>
                <p className="text-xs font-bold text-neutral-900">ETHIXWEB <span className="text-brand">/</span> INDIA</p>
                <p className="mt-1 text-xs text-neutral-500">A connected growth system</p>
              </div>
              <span className="rounded-full bg-[#f8eeeb] px-3 py-1.5 text-xs font-semibold text-brand">India-first journeys</span>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-2xl bg-[#241918] p-5 text-white sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase text-red-200">One connected journey</p>
                <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">From first click to customer.</h2>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { number: "01", title: "Website", detail: "A clearer first impression" },
                    { number: "02", title: "WhatsApp", detail: "A natural next step" },
                    { number: "03", title: "Enquiries", detail: "Every lead in view" },
                    { number: "04", title: "Growth", detail: "Built to keep improving" },
                  ].map((item) => (
                    <div key={item.number} className="min-h-24 rounded-xl border border-white/15 bg-white/[0.07] p-3 sm:p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-white">{item.title}</span>
                        <span className="text-[10px] font-semibold text-red-200">{item.number}</span>
                      </div>
                      <p className="mt-2 text-xs leading-5 text-neutral-300">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] font-medium text-neutral-300">
                  <span className="rounded-full border border-white/15 px-3 py-1.5">Mobile-first</span>
                  <span className="rounded-full border border-white/15 px-3 py-1.5">UPI-ready flows</span>
                  <span className="rounded-full border border-white/15 px-3 py-1.5">Made for India</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-1 pt-4 text-xs text-neutral-500">
              <span>Strategy, technology, and growth</span>
              <span className="font-semibold text-neutral-800">India <span className="text-brand">·</span> IST</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
