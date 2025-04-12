import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const caseStudies = [
  {
    title: "Modernizing IT Infrastructure at IIT Guwahati",
    client: "IIT Guwahati",
    challenge: [
      "Requirement for high-performance computing systems for research",
      "Need for a secure and scalable campus network infrastructure",
      "Inefficient IT asset tracking across departments",
    ],
    solution: [
      "Supplied and deployed high-end workstations and servers for labs",
      "Structured campus-wide LAN with fiber-optic backbone",
      "Installed centralized asset monitoring and inventory management tools",
    ],
    results: [
      "Boosted computing capacity for research-intensive projects",
      "100% coverage of network connectivity in academic blocks",
      "Reduced asset loss and improved IT management",
    ],
  },
  {
    title: "Powering Public Works Department (PWD), Assam",
    client: "PWD Assam",
    challenge: [
      "Outdated IT systems in district offices",
      "Lack of a centralized communication network",
      "Limited real-time monitoring of project progress",
    ],
    solution: [
      "Delivered and installed computers, networking gear, and UPS systems",
      "Implemented cloud-based file sharing and communication tools",
      "Trained PWD staff for optimal hardware usage and maintenance",
    ],
    results: [
      "Reduced hardware downtime by 70%",
      "Enhanced communication between HQ and remote offices",
      "Faster project coordination and reporting",
    ],
  },
  {
    title: "Digitizing the Assam Secretariat",
    client: "Assam Secretariat",
    challenge: [
      "Legacy desktop systems and unreliable network connections",
      "Insecure document handling and data loss risks",
      "Demand for high-availability systems for critical departments",
    ],
    solution: [
      "Upgraded departments with secured workstations and printers",
      "Installed redundant networking systems and backup solutions",
      "Deployed centralized document management systems",
    ],
    results: [
      "Improved employee productivity across departments",
      "Ensured 99.9% uptime for critical services",
      "Enhanced cybersecurity with role-based access controls",
    ],
  },
  {
    title: "Strengthening IT Systems at Guwahati High Court",
    client: "Guwahati High Court",
    challenge: [
      "Obsolete servers affecting e-court systems",
      "Data backup inconsistencies",
      "Need for courtroom IT enhancements",
    ],
    solution: [
      "Supplied high-reliability servers with RAID-enabled storage",
      "Implemented automated daily backup systems",
      "Set up courtroom tech: displays, conferencing systems, and digital filing tools",
    ],
    results: [
      "Seamless functioning of e-court systems",
      "Improved data recovery and backup reliability",
      "Faster access to legal documents and digital proceedings",
    ],
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-orange-50 py-20 px-4 sm:px-6 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300">
          Our Work
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
          Case Studies
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Discover how we’ve helped government and institutional clients modernize infrastructure, improve operations, and achieve measurable results with reliable B2B solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-1">{study.title}</h3>
              <p className="text-sm text-gray-500 font-medium mb-4">
                <span className="font-semibold text-gray-600">Client:</span> {study.client}
              </p>

              <div className="mb-4">
                <h4 className="text-md font-semibold text-gray-700 mb-2">Challenges</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {study.challenge.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-semibold text-gray-700 mb-2">Solutions</h4>
                <ul className="space-y-2">
                  {study.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheckCircle size={16} className="mt-0.5 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-md font-semibold text-gray-700 mb-2">Results</h4>
                <ul className="space-y-2">
                  {study.results.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <FaCheckCircle size={16} className="mt-0.5 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
