import React from "react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

/**
 * NotFoundPage – fallback screen for unknown routes.
 */
const NotFoundPage: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="not-found">
      <Container className="text-center">
        <p className="text-brand font-semibold uppercase tracking-[0.2em] text-sm mb-4">
          404 Error
        </p>
        <h1 className="font-heading text-5xl md:text-7xl text-gray-900 mb-6">
          Page not found
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          The page you are looking for might have moved, been removed, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" onClick={() => (window.location.href = "/")}>
            Go Home
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NotFoundPage;
