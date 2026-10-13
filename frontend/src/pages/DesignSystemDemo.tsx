
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

/**
 * Demo page showcasing the core design‑system components.
 * This page is temporary and will be replaced by real app pages later.
 */
export default function DesignSystemDemo() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <Container>
        <SectionHeading
          title="EthixWeb Design System"
          subtitle="Premium, reusable UI components built with Tailwind CSS and React"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="font-heading text-xl mb-2 text-brand">Container</h3>
            <p className="text-gray-600 mb-4">A responsive wrapper that centers content.</p>
            <Button variant="primary">Primary</Button>
          </Card>
          <Card>
            <h3 className="font-heading text-xl mb-2 text-brand">Button</h3>
            <p className="text-gray-600 mb-4">Various variants & sizes.</p>
            <div className="flex space-x-2">
              <Button variant="primary" size="sm">Sm</Button>
              <Button variant="secondary" size="md">Md</Button>
              <Button variant="ghost" size="lg">Lg</Button>
            </div>
          </Card>
          <Card>
            <h3 className="font-heading text-xl mb-2 text-brand">Card</h3>
            <p className="text-gray-600 mb-4">Simple content container.</p>
            <Button variant="secondary">Learn More</Button>
          </Card>
        </div>
      </Container>
    </div>
  );
}
