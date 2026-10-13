import React from "react";
import { Container } from "../ui/Container";

/**
 * ProcessSection – shows the typical workflow steps.
 * Uses the "#process" id for navigation.
 */
export const ProcessSection: React.FC = () => {
  const steps = [
    { title: "Discover", description: "Understand your goals, customers, and the realities of your market." },
    { title: "Design", description: "Map a clear experience for mobile-first, everyday customer journeys." },
    { title: "Develop", description: "Build dependable websites and systems around your team's needs." },
    { title: "Launch", description: "Measure what matters, learn from real use, and keep improving." },
  ];

  return (
    <section id="process" className="bg-[#f7f2ef] py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-brand">A thoughtful way to work</p>
            <h2 className="mt-3 font-heading text-3xl text-neutral-900 sm:text-4xl">From first conversation to launch.</h2>
          </div>
          <p className="max-w-md leading-7 text-neutral-600">
            Clear steps, close collaboration, and decisions grounded in your customers and business goals.
          </p>
        </div>
        <ol className="grid gap-7 md:grid-cols-4 md:gap-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              {index < steps.length - 1 && (
                <span aria-hidden="true" className="absolute left-12 right-0 top-6 hidden h-px bg-brand/25 md:block" />
              )}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 bg-[#f7f2ef] font-semibold text-brand">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-heading text-xl text-neutral-900">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};
