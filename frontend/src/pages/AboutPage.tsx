import React from "react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Link } from "react-router-dom";

/**
 * AboutPage – brief brand story for EthixWeb India.
 */
const AboutPage: React.FC = () => {
  return (
    <section className="min-h-[70vh] bg-white py-16 sm:py-20" id="about">
      <Container>
        <SectionHeading
          className="mb-12"
          title="Built with India's ambition in mind"
          subtitle="EthixWeb partners with Indian startups, D2C brands, and growing businesses to make their next digital step count."
        />
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="rounded-2xl bg-neutral-900 p-7 text-white sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">Our point of view</p>
            <p className="mt-5 font-heading text-3xl leading-snug">
              Digital should move your business forward, not get in its way.
            </p>
          </div>
          <div className="space-y-5 self-center text-base leading-7 text-gray-700">
            <p>
              India's businesses grow in a fast-moving, diverse market. We bring thoughtful design, dependable technology, and practical growth strategy together to help brands meet that moment with confidence.
            </p>
            <p>
              From a high-performing website to campaigns and brand foundations, our work is shaped around the people you serve and the goals your business is working toward.
            </p>
            <Link
              to="/contact"
              className="mt-2 inline-block rounded bg-brand px-4 py-2 font-medium text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPage;
