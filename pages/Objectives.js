import { 
  FaHandshake, FaEye, FaUsers, FaClipboardCheck, FaShieldAlt, FaLightbulb, 
  FaHeadset, FaChartLine, FaCogs, FaTools 
} from "react-icons/fa";
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const objectivesData = [
  { 
    title: "Facilitate Seamless B2B Interactions", 
    description: "Develop a robust digital ecosystem that streamlines communication, fosters collaboration, and enables efficient transactions between businesses.", 
    icon: <FaHandshake className="text-blue-600 text-4xl" /> 
  },
  { 
    title: "Enhance Procurement Efficiency", 
    description: "Simplify sourcing processes by providing businesses with faster, transparent, and cost-effective procurement solutions.", 
    icon: <FaClipboardCheck className="text-green-600 text-4xl" /> 
  },
  { 
    title: "Empower MSMEs and Startups", 
    description: "Bridge the gap between small enterprises and large-scale buyers, encouraging inclusive growth and fair market opportunities.", 
    icon: <FaUsers className="text-purple-600 text-4xl" /> 
  },
  { 
    title: "Promote Digital Transformation", 
    description: "Accelerate the adoption of innovative technologies and automation in B2B workflows to drive operational excellence.", 
    icon: <FaLightbulb className="text-yellow-500 text-4xl" /> 
  },
  { 
    title: "Ensure Trust and Compliance", 
    description: "Uphold strict standards of data security, regulatory adherence, and ethical conduct across all business engagements.", 
    icon: <FaShieldAlt className="text-orange-600 text-4xl" /> 
  },
  { 
    title: "Foster Economic Growth", 
    description: "Enable partnerships that contribute to sustainable development and stimulate economic activity across industries.", 
    icon: <FaChartLine className="text-teal-600 text-4xl" /> 
  },
  { 
    title: "Customer Support & Service", 
    description: "Deliver prompt and reliable support through a dedicated team, ensuring high levels of client satisfaction.", 
    icon: <FaHeadset className="text-indigo-600 text-4xl" /> 
  },
  { 
    title: "Strategic Consultancy", 
    description: "Provide expert guidance to businesses for planning, implementation, and optimization of B2B strategies.", 
    icon: <FaEye className="text-gray-700 text-4xl" /> 
  },
  { 
    title: "Operational Reliability", 
    description: "Guarantee uninterrupted performance through dependable warranty and maintenance services tailored to enterprise needs.", 
    icon: <FaCogs className="text-gray-600 text-4xl" /> 
  },
  { 
    title: "Sustainable Infrastructure", 
    description: "Maintain scalable and resilient B2B systems through proactive infrastructure management and support.", 
    icon: <FaTools className="text-blue-800 text-4xl" /> 
  },
];

const Objectives = () => {
  return (
    <div>
      <Head>
        <title>B2B Systems and Solutions - Objectives | Transforming Business-to-Business Experiences</title>
        <meta
          name="description"
          content="Explore our strategic B2B objectives focused on enhancing operations, improving client relationships, and delivering scalable solutions for business growth."
        />
        <meta
          name="keywords"
          content="B2B objectives, business goals, strategic planning, enterprise growth, B2B development, business-to-business strategy"
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
      <main className="flex-grow bg-orange-50 p-8 lg:mt-16 overflow-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-300">Strategic Direction</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Our Core B2B Objectives</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Our objectives are focused on creating impactful, efficient, and sustainable business relationships. Through innovation, trust, and strategic growth, we aim to redefine the B2B experience for our partners and clients.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectivesData.map((objective, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              {objective.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{objective.title}</h3>
              <p className="text-gray-600 mt-2">{objective.description}</p>
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

export default Objectives;
