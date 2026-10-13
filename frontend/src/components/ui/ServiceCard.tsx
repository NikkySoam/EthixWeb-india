import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <h3 className="font-heading text-xl text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <Link
        to="/services"
        className="mt-auto text-brand font-medium underline underline-offset-2 hover:text-brand/80 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};
