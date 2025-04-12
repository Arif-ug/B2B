
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Case from "/components/CaseStudies";

const Clients = () => {
  const categories = [
    {
      title: "Educational Institutions",
      clients: [
        {
          name: "Jorhat Engineering College, Jorhat",
          image: "/images/jec.jpeg",
          backContent: "Jorhat Engineering College is a premier engineering institute in Assam.",
        },
        {
          name: "Institute of Co-operative Management, Guwahati",
          image: "/images/ncct.png",
          backContent: "ICM Guwahati offers management education with a focus on cooperatives.",
        },
        {
          name: "Indian Institute of Technology, Guwahati",
          image: "/images/IITG_logo.png",
          backContent: "IIT Guwahati is a renowned technical institute.",
        },
        {
          name: "Assam Engineering Institute, Guwahati.",
          image: "/images/aec.png",
          backContent: "IIT Guwahati is a renowned technical institute.",
        },
      ],
    },
    {
      title: "Banking & Finance",
      clients: [
        {
          name: "Indian Overseas Bank, Regional Office, Guwahati",
          image: "/images/iob.png",
          backContent: "Indian Overseas Bank is a major public sector bank.",
        },
        {
          name: "Office of the Principal Accountant General, Guwahati",
          image: "/images/ag.png",
          backContent: "The PAG's office manages government accounts and audits.",
        },
        {
          name: "Finance Department, Govt. of Assam",
          image: "/Client/Finance Department Assam.png",
          backContent: "The Finance Department manages the state's finances.",
        },
      ],
    },
    {
      title: "Government & Public Sector",
      clients: [
        {
          name: "Employee's Provident Fund Organisation, Guwahati",
          image: "/Client/Emlpoyees provident fund.png",
          backContent: "EPFO manages provident fund accounts for employees.",
        },
        {
          name: "Guwahati High Court",
          image: "/Client/GHC.png",
          backContent: "The Guwahati High Court serves Assam and neighboring states.",
        },
        {
          name: "Central Silk Board",
          image: "/Client/Cental Silk Board.png",
          backContent: "The Central Silk Board promotes silk industry development.",
        },
      ],
    },
    {
      title: "Industry & Business",
      clients: [
        {
          name: "Bureau of Indian Standard, Guwahati Branch",
          image: "/Client/Bereaue of india.png",
          backContent: "BIS sets standards for products and services in India.",
        },
        {
          name: "Khadi and Village Industries Commission, Guwahati",
          image: "/Client/Khadi india.png",
          backContent: "KVIC promotes khadi and village industries.",
        },
        {
          name: "Rural Electrification Corporation Limited, Guwahati",
          image: "/Client/REC.png",
          backContent: "REC finances rural electrification projects.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>B2B Systems and Solutions - Profile | Trusted B2B Partnerships Across Industries</title>
        <meta
          name="description"
          content="Explore our diverse portfolio and trusted client base spanning multiple industries. Discover why businesses choose our B2B solutions."
        />
        <meta
          name="keywords"
          content="B2B clients, client portfolio, business profiles, partnerships, trusted companies, industry clients, client showcase"
        />
        <meta name="author" content="B2B Systems and Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>
      <div className="sm:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-md">
        <div className="flex  items-center justify-center gap-2 py-4 px-4">
          <img
            src="/images/msme-logo.png"
            alt="MSME Logo"
            className="h-12 w-auto"
          />
          <img
            src="/images/gem-logo.png"
            alt="GEM Logo"
            className="h-12 w-auto"
          />
        </div>
      </div>
  {/* Prevent Overlap */}
  <div className="pt-32 sm:hidden" />

      {/* Main Content */}
      <main className="flex-grow overflow-auto  ">
        <Case/>
       <div className="container mx-auto px-4 bg-white-50 shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Valued Clients</h1>
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.clients.map((client, index) => (
                  <FlippingCard key={index} client={client} />
                ))}
              </div>
            </div>
          ))}
        </div> 
        

      </main>
      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
};

// 🃏 Flipping Card Component
const FlippingCard = ({ client }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-64 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Card Wrapper */}
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${isFlipped ? "rotate-y-180" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side - Image */}
        <div className="absolute w-full h-full bg-white-50 shadow-lg rounded-lg overflow-hidden flex items-center justify-center backface-hidden">
          <Image
            src={client.image}
            alt={client.name}
            width={250}
            height={250}
            className="w-full h-full contain px-6 py-2"
          />
        </div>

        {/* Back Side - Content */}
        <div className="absolute w-full h-full bg-blue-100 shadow-lg rounded-lg flex items-center justify-center p-4 transform rotate-y-180 backface-hidden">
          <p className="text-gray-700 text-center font-semibold">{client.backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;

