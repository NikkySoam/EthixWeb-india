import { Link } from "react-router-dom";
import { Container } from "../ui/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 text-sm text-gray-600">
      <Container className="flex flex-col items-center space-y-4">
        <div className="font-heading text-brand text-lg">EthixWeb</div>
        <nav className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Home</Link>
          <Link to="/services" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Services</Link>
          <Link to="/#process" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Process</Link>
          <Link to="/#work" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Work</Link>
          <Link to="/#why-us" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Why Us</Link>
          <Link to="/about" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">About</Link>
          <Link to="/contact" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">Contact</Link>
        </nav>
        <div>© {new Date().getFullYear()} EthixWeb. All rights reserved.</div>
      </Container>
    </footer>
  );
};
