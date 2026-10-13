import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export const WorkSection: React.FC = () => {
  const projects = [
    { title: "Digital storefront", type: "Commerce experience", visual: "storefront" },
    { title: "Growth dashboard", type: "Performance marketing", visual: "growth" },
    { title: "A distinct identity", type: "Brand system", visual: "identity" },
  ];

  return (
    <section id="work" className="bg-[#fbf5f2] py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Digital experiences with purpose"
          subtitle="Illustrative previews of the web, growth, and brand systems we shape for Indian businesses."
        />
        <div className="mt-8 grid gap-7 md:grid-cols-3">
          {projects.map((proj) => (
            <article key={proj.title} className="group min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                {proj.visual === "storefront" && (
                  <div className="h-full bg-[#dfe7d9] p-3 sm:p-4">
                    <div className="h-full overflow-hidden rounded-md bg-[#fffdf8] shadow-sm">
                      <div className="flex items-center justify-between border-b border-neutral-200 px-3 py-2">
                        <span className="text-[9px] font-extrabold text-neutral-900 sm:text-[11px]">NAYA <span className="text-brand">/</span> GOODS</span>
                        <span className="text-[8px] text-neutral-500 sm:text-[10px]">Home · Living · About</span>
                      </div>
                      <div className="grid h-[calc(100%-34px)] grid-cols-[1.1fr_0.9fr]">
                        <div className="flex flex-col justify-center p-3 sm:p-5">
                          <span className="text-[8px] font-bold uppercase text-brand sm:text-[9px]">Thoughtful by design</span>
                          <p className="mt-2 font-heading text-lg leading-tight text-neutral-900 sm:text-2xl">Everyday, made more meaningful.</p>
                          <span className="mt-3 w-fit rounded-full bg-neutral-900 px-2.5 py-1 text-[8px] font-semibold text-white sm:text-[9px]">Explore the collection</span>
                        </div>
                        <div className="relative m-3 overflow-hidden rounded-md bg-[#c7d0bd]">
                          <div className="absolute bottom-0 left-1/2 h-[68%] w-[48%] -translate-x-1/2 rounded-t-[45%] bg-[#ab7656]" />
                          <div className="absolute bottom-[28%] left-[22%] h-1/3 w-1/3 rounded-full bg-[#e9dbc4]" />
                          <div className="absolute bottom-3 right-3 rounded bg-white/85 px-2 py-1 text-[8px] font-semibold text-neutral-800">Made in India</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {proj.visual === "growth" && (
                  <div className="flex h-full flex-col bg-[#241918] p-4 text-white sm:p-5">
                    <div className="flex items-center justify-between border-b border-white/15 pb-3">
                      <div>
                        <p className="text-[8px] font-bold uppercase text-red-200 sm:text-[9px]">Growth workspace</p>
                        <p className="mt-1 text-xs font-semibold sm:text-sm">Campaign signals</p>
                      </div>
                      <span className="rounded-full border border-white/15 px-2 py-1 text-[8px] text-neutral-300">India market</span>
                    </div>
                    <div className="mt-4 grid flex-1 grid-cols-[1.1fr_0.9fr] gap-3">
                      <div className="flex items-end justify-around gap-2 rounded-md border border-white/10 bg-white/[0.05] px-3 pb-3 pt-5">
                        {["h-1/3", "h-2/3", "h-1/2", "h-5/6", "h-3/5", "h-full"].map((height, index) => (
                          <span key={index} className={`w-3 rounded-t-sm ${height} ${index === 3 ? "bg-red-400" : "bg-red-200/65"}`} />
                        ))}
                      </div>
                      <div className="flex flex-col justify-between gap-2">
                        {[
                          ["Search", "bg-red-300"],
                          ["Social", "bg-amber-200"],
                          ["Organic", "bg-emerald-300"],
                        ].map(([label, color]) => (
                          <div key={label} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-2 py-2">
                            <span className={`h-2 w-2 rounded-full ${color}`} />
                            <span className="text-[9px] text-neutral-200 sm:text-[10px]">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-[9px] text-neutral-400">A clearer view of the channels moving your business.</p>
                  </div>
                )}

                {proj.visual === "identity" && (
                  <div className="flex h-full flex-col justify-between bg-[#eedbd4] p-4 sm:p-5">
                    <div className="flex items-center justify-between text-[9px] font-semibold text-neutral-700">
                      <span>IDENTITY STUDY <span className="text-brand">/</span> 001</span>
                      <span>INDIA</span>
                    </div>
                    <div className="self-center text-center">
                      <p className="font-heading text-4xl text-[#321e1b] sm:text-5xl">SAANJH</p>
                      <p className="mt-1 text-[9px] uppercase text-neutral-600 sm:text-[10px]">A brand with a sense of place</p>
                    </div>
                    <div className="flex items-end justify-between gap-3 border-t border-neutral-900/15 pt-3">
                      <div className="flex gap-1.5" aria-label="Warm neutral and red brand palette">
                        <span className="h-5 w-5 rounded-full bg-[#321e1b]" />
                        <span className="h-5 w-5 rounded-full bg-[#b9654e]" />
                        <span className="h-5 w-5 rounded-full bg-[#dfbca9]" />
                        <span className="h-5 w-5 rounded-full bg-[#f7eee7]" />
                      </div>
                      <span className="text-[8px] font-medium text-neutral-600 sm:text-[9px]">Voice · Visuals · Story</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-brand">{proj.type}</p>
                  <h3 className="mt-1 font-heading text-xl text-neutral-900">{proj.title}</h3>
                </div>
                <span aria-hidden="true" className="mt-1 text-neutral-400 transition group-hover:text-brand">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
                    <path d="M6 14 14 6M6 6h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
