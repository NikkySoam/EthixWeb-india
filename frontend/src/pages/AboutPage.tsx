import React from "react";
import { Container } from "../components/ui/Container";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  const process = [
    {
      number: "01",
      title: "Understand the business",
      description: "We start with your goals, customers, current tools, and the realities of the market you serve.",
    },
    {
      number: "02",
      title: "Shape the experience",
      description: "We plan clear journeys for small screens, quick decisions, and the questions customers need answered.",
    },
    {
      number: "03",
      title: "Build with care",
      description: "We create the website, brand, or growth system around your needs, with the next step in mind.",
    },
    {
      number: "04",
      title: "Learn and improve",
      description: "After launch, we use real feedback and useful measures to guide what should improve next.",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Useful over impressive",
      description: "Good digital work should solve a real problem for your customers and your team.",
    },
    {
      number: "02",
      title: "Respect the context",
      description: "India is not one audience. We consider regional differences, devices, connectivity, and how people prefer to engage.",
    },
    {
      number: "03",
      title: "Make it understandable",
      description: "Clear priorities and plain communication make collaboration better from the first conversation onward.",
    },
  ];

  return (
    <main id="about" className="bg-[#fbf7f5] text-[#241918]">
      <section className="relative isolate overflow-hidden border-b border-neutral-200 py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{ backgroundImage: "radial-gradient(ellipse at 78% 45%, rgba(214, 40, 40, 0.10), transparent 44%), radial-gradient(ellipse at 10% 100%, rgba(214, 40, 40, 0.06), transparent 38%)" }}
        />
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-neutral-200 bg-[#f3e7e2] p-6 shadow-sm sm:min-h-[410px] sm:p-9">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40"
              style={{ backgroundImage: "linear-gradient(rgba(91,45,40,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(91,45,40,0.07) 1px, transparent 1px)", backgroundSize: "36px 36px" }}
            />
            <div className="relative flex h-full min-h-[270px] flex-col justify-between sm:min-h-[330px]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-bold text-neutral-900">ETHIXWEB <span className="text-brand">/</span> INDIA</span>
                <span className="rounded-full border border-neutral-300 bg-white/70 px-3 py-1.5 text-xs text-neutral-600">Built around people</span>
              </div>
              <div className="relative mx-auto flex h-48 w-48 items-center justify-center sm:h-60 sm:w-60">
                <div className="absolute inset-0 rounded-full border border-brand/50" />
                <div className="absolute inset-5 rounded-full border border-neutral-500/25" />
                <div className="absolute inset-12 rounded-full border border-brand/30" />
                <div className="absolute h-px w-full rotate-[-28deg] bg-brand/60" />
                <div className="absolute h-px w-full rotate-[32deg] bg-neutral-500/30" />
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-brand text-xl font-bold text-white shadow-[0_0_50px_rgba(214,40,40,0.3)]">IN</span>
                <span className="absolute left-0 top-12 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] text-neutral-700">People</span>
                <span className="absolute right-0 top-20 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] text-neutral-700">Purpose</span>
                <span className="absolute bottom-5 left-3 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] text-neutral-700">Progress</span>
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-neutral-300 pt-4">
                <p className="max-w-xs text-sm leading-6 text-neutral-700">Digital work should make the next step clearer for businesses and their customers.</p>
                <span className="shrink-0 text-xs font-semibold text-brand">India-first</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase text-brand">
              <span className="font-heading text-4xl font-normal text-brand">01</span>
              <span className="h-px flex-1 bg-brand/40" />
              <span>Our story</span>
            </div>
            <p className="text-xs font-bold uppercase text-brand">Digital, with Indian context</p>
            <h1 className="mt-4 max-w-2xl font-heading text-4xl leading-tight text-[#241918] sm:text-5xl lg:text-6xl">
              Built for India's ambition. <span className="text-red-300">Designed for real life.</span>
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
              <p>
                EthixWeb works with Indian businesses ready to make their digital presence more useful, more distinctive, and easier to grow. We bring strategy, design, development, and marketing together around the people a business wants to serve.
              </p>
              <p>
                The Indian customer journey is varied: someone may discover a brand on social, compare options on a phone, ask a question on WhatsApp, and expect a simple way to take the next step. We keep those everyday realities in view as we shape websites and digital systems.
              </p>
              <p>
                Our aim is straightforward: understand the business first, make thoughtful choices, and build work that earns its place by helping customers and teams do something better.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase text-brand">02 <span className="mx-2 text-neutral-400">/</span> What drives us</p>
            <h2 className="mt-3 font-heading text-3xl text-[#241918] sm:text-4xl">Mission and vision</h2>
            <p className="mt-4 leading-7 text-neutral-600">A clear reason for the work, and a direction for where it can take the businesses we partner with.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-lg border border-red-100 bg-[#fbf3f0] p-6 shadow-sm sm:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-lg font-semibold text-white" aria-hidden="true">◎</span>
              <p className="mt-6 text-xs font-bold uppercase text-red-300">Our mission</p>
              <h3 className="mt-3 font-heading text-2xl leading-snug text-[#241918] sm:text-3xl">Make digital a practical advantage for Indian businesses.</h3>
              <p className="mt-4 max-w-xl leading-7 text-neutral-700">
                We bring clear strategy and considered execution to websites, brands, and growth systems, helping teams connect with customers and move toward meaningful business goals.
              </p>
            </article>
            <article className="relative overflow-hidden rounded-lg border border-neutral-200 bg-[#f7f4f2] p-6 shadow-sm sm:p-8">
              <div aria-hidden="true" className="absolute -right-12 -top-14 h-48 w-48 rounded-full border-[20px] border-brand/10" />
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-lg font-semibold text-white" aria-hidden="true">◉</span>
              <p className="relative mt-6 text-xs font-bold uppercase text-red-300">Our vision</p>
              <h3 className="relative mt-3 font-heading text-2xl leading-snug text-[#241918] sm:text-3xl">A business landscape where thoughtful digital work is within reach.</h3>
              <p className="relative mt-4 max-w-xl leading-7 text-neutral-700">
                We want more Indian businesses to have access to clear thinking, dependable craft, and digital experiences that respect their customers and support sustainable growth.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-b border-neutral-200 bg-[#fbf7f5] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase text-brand">03 <span className="mx-2 text-neutral-600">/</span> How we work</p>
            <h2 className="mt-3 font-heading text-3xl leading-tight text-[#241918] sm:text-4xl">A clear process. No guesswork.</h2>
            <p className="mt-5 leading-7 text-neutral-600">
              From the first conversation to launch, we keep the work understandable: what we are doing, why it matters, and what comes next.
            </p>
            <div className="mt-8 border-l-2 border-brand pl-4">
              <p className="text-xs font-bold uppercase text-brand">The working promise</p>
              <p className="mt-2 text-sm leading-6 text-neutral-700">Shared priorities, visible progress, and decisions connected to your goals.</p>
            </div>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {process.map((step) => (
              <li key={step.number} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
                <span className="font-heading text-3xl font-bold text-brand">{step.number}</span>
                <h3 className="mt-4 font-semibold text-[#241918]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-bold uppercase text-brand">04 <span className="mx-2 text-neutral-600">/</span> What we stand for</p>
            <h2 className="mt-3 font-heading text-3xl leading-tight text-[#241918] sm:text-4xl">Principles behind every project.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.number} className="border-t border-brand/40 py-5 sm:py-6">
                <p className="text-xs font-semibold text-brand">{value.number}</p>
                <h3 className="mt-4 font-heading text-xl text-[#241918]">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#f3e7e2] py-16 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: "radial-gradient(ellipse at 85% 50%, rgba(214, 40, 40, 0.14), transparent 45%)" }} />
        <Container className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase text-brand">05 <span className="mx-2 text-neutral-500">/</span> Start a conversation</p>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-[#241918] sm:text-4xl">Have a goal in mind? Let's make a thoughtful plan.</h2>
            <p className="mt-4 max-w-xl leading-7 text-neutral-700">Tell us what your business is working toward, and we can explore the right next step together.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#171211] px-6 py-3 font-semibold text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3e7e2]"
          >
            Start a conversation
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
