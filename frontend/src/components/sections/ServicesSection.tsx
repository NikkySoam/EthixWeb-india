import React from "react";
import { Container } from "../ui/Container";
import { ServiceCard } from "../ui/ServiceCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Link } from "react-router-dom";

/**
 * Services overview – simple grid of cards.
 */
export const ServicesSection: React.FC = () => {
  const services = [
    { title: "Web Development", description: "Mobile-first websites and digital products designed for fast, dependable experiences across India." },
    { title: "Performance Marketing", description: "Reach customers across search and social with measurable campaigns built around your market." },
    { title: "Brand Strategy", description: "Build a distinct voice and identity that stays clear across India's varied audiences and regions." },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Practical digital capabilities for the way Indian customers discover, compare, message, and buy."
        />
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          {services.map((svc) => (
            <ServiceCard key={svc.title} title={svc.title} description={svc.description} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="font-medium text-brand underline-offset-4 hover:underline">
            Explore all services
          </Link>
        </div>
      </Container>
    </section>
  );
};
