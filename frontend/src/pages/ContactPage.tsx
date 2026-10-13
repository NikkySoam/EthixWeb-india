import React, { useState } from "react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { api } from "../lib/api";

/**
 * ContactPage – accessible enquiry form connected to the enquiries API.
 */
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.service) newErrors.service = "Select a service";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (honeypot.trim()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        service: formData.service,
        message: formData.message.trim(),
      };

      await api.post('/enquiries', payload);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setHoneypot('');
    } catch (error) {
      console.error('Enquiry submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <section className="min-h-[70vh] bg-gray-50 py-16 sm:py-20" id="contact">
      <Container>
        <SectionHeading
          className="mb-12"
          title="Let's talk about what's next"
          subtitle="Tell us a little about your business and the kind of growth you have in mind."
        />
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-5 text-gray-700">
            <h3 className="font-heading text-2xl text-gray-900">A good project starts with a conversation.</h3>
            <p className="leading-7">
              Share your goals, current challenges, or early ideas. We’ll review your enquiry and get back to you shortly.
            </p>
            <div className="border-l-2 border-brand pl-4 text-sm leading-6 text-gray-600">
              Web Development · Performance Marketing · Brand Strategy
            </div>
          </div>
          <Card className="p-5 sm:p-7">
          {status === 'success' ? (
            <div className="text-center text-green-600">
              <h3 className="text-2xl font-heading mb-4">Thank you!</h3>
              <p>Your enquiry has been received. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="phone"
                className="hidden"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                aria-hidden="true"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border rounded px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border rounded px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block font-medium mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border rounded px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block font-medium mb-1">Interested Service *</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border rounded px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select…</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="Brand Strategy">Brand Strategy</option>
                  </select>
                  {errors.service && <p className="text-sm text-red-600">{errors.service}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block font-medium mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border rounded px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === 'loading'}
                    className="min-w-[120px]"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send'}
                  </Button>
                  {status === 'error' && (
                    <p className="text-sm text-red-600 mt-2">Something went wrong. Please try again.</p>
                  )}
                </div>
              </div>
            </form>
          )}
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
