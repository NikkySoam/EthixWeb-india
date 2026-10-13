import React from "react";
import { Container } from "../ui/Container";

export const WhyUsSection: React.FC = () => {
  const points = [
    { title: "Local context", detail: "Experiences shaped for India's mobile-first customers and varied markets." },
    { title: "Joined-up thinking", detail: "Strategy, technology, and growth work together instead of in silos." },
    { title: "Plain-speaking partnership", detail: "Clear priorities, direct communication, and thoughtful decisions." },
    { title: "Built to keep moving", detail: "Flexible foundations that can evolve as your business grows." },
  ];

  return (
    <section id="why-us" className="bg-white py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative isolate overflow-hidden rounded-lg bg-[#241918] p-7 text-white sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-25"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />
          <p className="text-xs font-bold uppercase text-red-200">Why EthixWeb</p>
          <h2 className="mt-6 max-w-md font-heading text-3xl leading-tight sm:text-4xl">
            Thoughtful digital work, <span className="text-red-300">rooted in your reality.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-300">
            Your customers, your team, your next stage of growth. We start there, then build the right digital response.
          </p>
          <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-5 text-xs text-neutral-300">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-red-300/50 font-semibold text-red-200">IN</span>
            <span>Made for the pace and variety of India</span>
          </div>
        </div>

        <div className="self-center">
          <p className="mb-5 text-xs font-bold uppercase text-brand">A better kind of digital partner</p>
          <div className="divide-y divide-neutral-200">
            {points.map((point, index) => (
              <article key={point.title} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 first:pt-0 last:pb-0">
                <span className="pt-1 text-xs font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold text-neutral-900">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">{point.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
