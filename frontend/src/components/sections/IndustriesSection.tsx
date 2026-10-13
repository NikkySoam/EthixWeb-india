import React from "react";
import { Container } from "../ui/Container";

const industries = [
  {
    number: "01",
    name: "D2C & retail",
    detail: "Mobile-first product journeys that make discovery, trust, and checkout feel effortless.",
  },
  {
    number: "02",
    name: "Manufacturing & B2B",
    detail: "Clear digital catalogues and enquiry paths for buyers, partners, and distributor networks.",
  },
  {
    number: "03",
    name: "Hospitality & travel",
    detail: "Useful experiences that help people explore, compare, and plan with confidence.",
  },
  {
    number: "04",
    name: "Education & services",
    detail: "Helpful content and lead journeys that turn a first question into a real conversation.",
  },
];

export const IndustriesSection: React.FC = () => (
  <section id="industries" className="bg-white py-16 sm:py-20">
    <Container>
      <div className="mb-10 grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end">
        <div>
          <p className="text-xs font-bold uppercase text-brand">Made for India's many markets</p>
          <h2 className="mt-3 max-w-md font-heading text-3xl leading-tight text-neutral-900 sm:text-4xl">
            Local context. <span className="text-brand">Ambitious growth.</span>
          </h2>
        </div>
        <p className="max-w-xl leading-7 text-neutral-600 md:justify-self-end">
          From fast-moving D2C brands to established businesses, digital should fit the customers, buying habits, and pace of the market you serve.
        </p>
      </div>

      <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <article key={industry.number} className="border-t border-neutral-200 py-5">
            <p className="text-xs font-semibold text-brand">{industry.number}</p>
            <h3 className="mt-3 font-heading text-xl text-neutral-900">{industry.name}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{industry.detail}</p>
          </article>
        ))}
      </div>
    </Container>
  </section>
);