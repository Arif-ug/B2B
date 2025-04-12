import React from "react";
import { FaUserShield, FaStar, FaHeadset, FaTools, FaClock, FaHandshake } from "react-icons/fa";

const points = [
  {
    title: "Trusted by Institutions",
    icon: <FaUserShield size={28} className="text-blue-600" />,
    description: "Working with top government bodies, universities, and enterprises across Northeast India."
  },
  {
    title: "Proven Expertise",
    icon: <FaStar size={28} className="text-blue-600" />,
    description: "Years of experience delivering end-to-end IT infrastructure and hardware solutions."
  },
  {
    title: "Customer Support",
    icon: <FaHeadset size={28} className="text-blue-600" />,
    description: "Always here for our clients—quick response times and dedicated service engineers."
  },
  {
    title: "Complete Hardware Solutions",
    icon: <FaTools size={28} className="text-blue-600" />,
    description: "From sourcing to setup to servicing, we handle all your IT hardware needs."
  },
  {
    title: "On-Time Delivery",
    icon: <FaClock size={28} className="text-blue-600" />,
    description: "We value your time and ensure timely project execution, always."
  },
  {
    title: "Strong Vendor Partnerships",
    icon: <FaHandshake size={28} className="text-blue-600" />,
    description: "Authorized partners with leading IT brands to give you reliable and certified products."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-orange-50 py-11 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {points.map((point, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="mb-4">{point.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h3>
            <p className="text-sm text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
