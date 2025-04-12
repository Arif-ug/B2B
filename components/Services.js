import React from "react";
import { FaNetworkWired, FaServer, FaTools, FaShieldAlt, FaLaptopCode, FaCloud } from "react-icons/fa";

const services = [
  {
    title: "Network Infrastructure",
    icon: <FaNetworkWired size={30} className="text-blue-600" />,
    description: "Designing and deploying secure, scalable network architectures for offices, campuses, and industries."
  },
  {
    title: "Server & Storage Solutions",
    icon: <FaServer size={30} className="text-blue-600" />,
    description: "Supplying and configuring enterprise-grade servers and high-availability storage systems."
  },
  {
    title: "Hardware Maintenance",
    icon: <FaTools size={30} className="text-blue-600" />,
    description: "Comprehensive AMC services and hardware support to keep your systems running smoothly."
  },
  {
    title: "Cybersecurity Services",
    icon: <FaShieldAlt size={30} className="text-blue-600" />,
    description: "Protecting your infrastructure with firewalls, endpoint security, and data protection solutions."
  },
  {
    title: "IT Consultancy",
    icon: <FaLaptopCode size={30} className="text-blue-600" />,
    description: "Guiding businesses with expert advice on IT infrastructure planning and digital transformation."
  },
  {
    title: "Cloud Deployment",
    icon: <FaCloud size={30} className="text-blue-600" />,
    description: "Migrating and managing your workloads on public, private, or hybrid cloud environments."
  },
];

const Services = () => {
  return (
    <section className="  py-10 px-4 sm:px-6 lg:px-20 bg-orange-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our IT Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
