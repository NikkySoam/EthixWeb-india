import React from "react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Link } from "react-router-dom";

/**
 * ServicesPage – showcases the three core services using Card components.
 */
const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Mobile-first websites, e-commerce, and digital products designed for fast, dependable experiences across India.",
    },
    {
      title: "Performance Marketing",
      description: "Reach customers across search and social with measurable campaigns shaped around your audience and market.",
    },
    {
      title: "Brand Strategy",
      description: "Build a distinct voice and visual identity that stays clear across India's varied audiences and regions.",
    },
  ];

  return (
    <section className="min-h-[70vh] bg-gray-50 py-16 sm:py-20" id="services">
      <Container>
        <SectionHeading
          className="mb-12"
          title="Digital services built for growth"
          subtitle="Strategy, craft, and measurable execution for the way Indian customers discover, compare, and buy."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((svc) => (
            <Card key={svc.title} className="flex h-full flex-col p-6">
              <span className="mb-5 h-1 w-10 rounded-full bg-brand" aria-hidden="true" />
              <h3 className="mb-3 font-heading text-2xl text-gray-900">{svc.title}</h3>
              <p className="flex-grow leading-7 text-gray-600">{svc.description}</p>
              <Link
                to="/contact"
                className="mt-6 self-start rounded bg-brand px-4 py-2 font-medium text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Discuss this service
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesPage;
