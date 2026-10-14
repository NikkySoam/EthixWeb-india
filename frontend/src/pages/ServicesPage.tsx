import React from "react";
import { Container } from "../components/ui/Container";
import { Link } from "react-router-dom";

const serviceGroups = [
  {
    name: "Web",
    mark: "WEB",
    services: [
      ["Website redesign", "A clearer, faster website built around what your customers need to do."],
      ["E-commerce", "Mobile-friendly shopping journeys with straightforward product discovery and checkout."],
      ["Landing pages", "Focused pages for campaigns, launches, and specific customer groups."],
      ["Maintenance & security", "Ongoing updates, monitoring, backups, and practical security care."],
    ],
  },
  {
    name: "AI & automation",
    mark: "AI",
    services: [
      ["Knowledge assistant", "A helpful assistant grounded in your approved information and FAQs."],
      ["AI receptionist", "Handle common questions and route enquiries to the right next step."],
      ["Workflow automation", "Reduce repetitive work by connecting the tools and steps your team already uses."],
      ["Human handoff", "Make it easy for a person to take over when a conversation needs judgement."],
    ],
  },
  {
    name: "Growth",
    mark: "GROW",
    services: [
      ["Search engine optimization", "Technical and content improvements that help the right people find you."],
      ["Google Ads", "Search and display campaigns planned around your audience, budget, and goals."],
      ["Meta Ads", "Campaigns across Facebook and Instagram with clear targeting and measurement."],
      ["Social content", "A practical content plan for the channels your customers use."],
      ["Email & WhatsApp journeys", "Permission-based follow-ups that support useful customer conversations."],
      ["Conversion optimization", "Find friction in key journeys and improve them using evidence."],
    ],
  },
  {
    name: "Data",
    mark: "DATA",
    services: [
      ["Analytics setup", "Understand how visitors arrive, what they use, and where they leave."],
      ["Performance dashboard", "Bring important website, campaign, and enquiry signals into one view."],
      ["Monthly reporting", "A concise review of what changed, what it means, and what to do next."],
    ],
  },
  {
    name: "Accessibility",
    mark: "A11Y",
    services: [
      ["Accessibility improvements", "Improve contrast, keyboard navigation, labels, and page structure."],
      ["Accessibility review", "Identify usability barriers and prioritize fixes against recognized guidance."],
    ],
  },
  {
    name: "Support",
    mark: "CARE",
    services: [
      ["Technical support", "A clear support path for issues affecting your site and digital tools."],
      ["Content & assistant updates", "Keep pages and approved assistant information current as your business changes."],
      ["API & integration care", "Monitor key connections between your website and business systems."],
    ],
  },
];

const engagementSteps = [
  {
    label: "Step 1",
    title: "Audit",
    description: "Review your current website, campaigns, and customer journey to find where enquiries or sales get stuck.",
  },
  {
    label: "Step 2",
    title: "Plan",
    description: "Agree on priorities, scope, and measures of progress before work begins.",
  },
  {
    label: "Step 3",
    title: "Build",
    description: "Design and deliver the pages, campaigns, or integrations selected for your plan.",
  },
  {
    label: "Step 4",
    title: "Optimize",
    description: "Review real usage and results, then refine the work around what is helping your business.",
  },
];

const ServicesPage: React.FC = () => (
  <main id="services" className="bg-[#fbf7f5] text-[#241918]">
    <section className="relative isolate overflow-hidden border-b border-neutral-200 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{ backgroundImage: "radial-gradient(ellipse at 72% 45%, rgba(214, 40, 40, 0.11), transparent 43%), linear-gradient(135deg, transparent 48%, rgba(214, 40, 40, 0.035) 49%, transparent 50%)", backgroundSize: "auto, 54px 54px" }}
      />
      <Container>
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/80 px-3 py-1.5 text-sm font-semibold text-brand">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
            Services for Indian businesses
          </span>
          <h1 className="mt-7 max-w-4xl font-sans text-5xl font-extrabold leading-[1.02] text-[#241918] sm:text-6xl lg:text-7xl">
            Everything your business needs <span className="text-brand">to grow digitally.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Websites, AI, growth, data, accessibility, and ongoing support, brought together around the way your customers discover and engage with you across India.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#171211] px-6 py-3 font-semibold text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Talk through your goals
            <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>

    <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-heading text-5xl text-brand/60">22</span>
            <span className="h-px flex-1 bg-brand/25" />
          </div>
          <p className="text-xs font-bold uppercase text-brand">What we offer</p>
          <h2 className="mt-3 font-heading text-3xl text-[#241918] sm:text-4xl">Everything under one roof.</h2>
          <p className="mt-4 leading-7 text-neutral-600">
            A connected set of capabilities, so your website, marketing, data, and support can work toward the same business goals.
          </p>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceGroups.map((group) => (
            <article key={group.name} className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-[#fbf7f5] p-5 shadow-sm sm:p-6">
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full border-[14px] border-brand/[0.06]" />
              <div className="relative flex items-center justify-between gap-3 border-b border-neutral-200 pb-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-11 min-w-11 items-center justify-center rounded-xl bg-brand px-2 text-[10px] font-bold text-white">{group.mark}</span>
                  <h3 className="truncate font-heading text-xl text-neutral-900">{group.name}</h3>
                </div>
                <span className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold text-neutral-500">
                  {String(group.services.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="relative flex-1 divide-y divide-neutral-200/80">
                {group.services.map(([name, description]) => (
                  <li key={name} className="grid grid-cols-[1rem_1fr] gap-3 py-4 first:pt-5">
                    <span aria-hidden="true" className="mt-1.5 h-2 w-2 rounded-sm border border-brand" />
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-neutral-900">{name}</h4>
                      <p className="mt-1 text-xs leading-5 text-neutral-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="relative mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                Discuss your needs
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section className="border-b border-neutral-200 bg-[#f4ebe7] py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-heading text-5xl text-brand/60">04</span>
            <span className="h-px flex-1 bg-brand/25" />
          </div>
          <p className="text-xs font-bold uppercase text-brand">How an engagement runs</p>
          <h2 className="mt-3 font-heading text-3xl leading-tight text-[#241918] sm:text-4xl">Audit first. Build second. Improve with evidence.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
            Every engagement starts by understanding what is already working and what needs attention. Then we agree on the next steps together.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {engagementSteps.map((step, index) => (
            <li key={step.label} className="relative">
              {index < engagementSteps.length - 1 && <span aria-hidden="true" className="absolute left-12 right-0 top-6 hidden h-px bg-brand/30 lg:block" />}
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white shadow-[0_5px_20px_rgba(214,40,40,0.2)]">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-4 text-[10px] font-bold uppercase text-brand">{step.label}</p>
              <h3 className="mt-1 font-heading text-xl text-neutral-900">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>

    <section className="bg-[#fbf7f5] py-16 sm:py-20">
      <Container className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase text-brand">Let's make a useful next move</p>
          <h2 className="mt-3 font-heading text-3xl leading-tight text-[#241918] sm:text-4xl">Not sure which service fits?</h2>
          <p className="mt-4 max-w-xl leading-7 text-neutral-600">Tell us what you are trying to improve. We can help you work out a sensible place to start.</p>
        </div>
        <Link to="/contact" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#171211] px-6 py-3 font-semibold text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
          Get in touch
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </Container>
    </section>
  </main>
);

export default ServicesPage;
