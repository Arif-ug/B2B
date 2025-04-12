import Head from 'next/head'; // 
// Import Head from Next.js
import Header from '../components/Header'; // Ensure this is a valid React component
import Footer from '../components/Footer'; // Ensure this is a valid React component
// import { useEffect } from 'react';
import FeedbackForm from '../components/Feedback';
import Partners from '../components/Partners';
import Services from '../components/Services';
import ChooseUs from '../components/WhyChooseUs';
import Link from 'next/link'; // Import Link from Next.js

export default function Home() {
  return (
    <div>
      {/* Page Metadata */}
      <Head>
        <title>B2B IT & Hardware Solutions | Smart Admin Tools for Modern Businesses</title>
        <meta
          name="description"
          content="Explore our B2B IT and hardware services platform – your central hub for managing tech infrastructure, client orders, inventory, and real-time analytics with a powerful admin dashboard."
        />
        <meta
          name="keywords"
          content="B2B IT services, hardware solutions, tech infrastructure, business IT platform, enterprise hardware, admin dashboard, inventory management, client orders, analytics"
        />
        <meta name="author" content="Your Company Name" />
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
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/profile.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold">Your IT Challenges,<span className="text-sky-500">Our End-to-End Solutions</span></h1>
            <p className="mt-4 text-lg md:text-xl">We specialize in delivering reliable IT hardware services and infrastructure solutions, so you can focus on growing your business with confidence.</p>
            <div className="mt-6 flex justify-center space-x-4">
              <Link href="/Contact" className="bg-sky-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-orange-600 transition">Contact Now</Link>
            </div>
          </div>
      </section>
      {/* <main className="flex-grow bg-gray-100 sm:p-8 mt-8 overflow-auto"> */}
      <main className="dark:bg-gray-900 bg-gray-100 min-h-screen  items-center justify-center pb-4">
          <Services />

        <div className="py-6">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex mx-4">
            <div className="flex-1 w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="w-full h-auto rounded-lg"
                alt="ICT Solutions Image"
              />
            </div>
            <div className="max-w-xl lg:px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl dark:bg-gray-900">
              <h3 className="text-indigo-600 font-semibold">
                Professional services
              </h3>
              <p className="text-gray-800 lg:text-3xl font-semibold text-2xl lg:text-justify text-start  dark:text-gray-300">
                &ldquo;Leading ICT Infrastructure Solutions Provider in North Eastern India.&#8221;
              </p>
              <p className="mt-3 text-gray-600 text-justify dark:text-gray-600">
                We are a leading solution provider of ICT infrastructure in the field of Hardware Specifications, Networking, Video Conferencing, EPABX, Electrification etc. in North Eastern India. Our inception has been based on constant innovation through leadership, to ensure that our customers are always able to better manage their operational costs, productivity and time management, and keep-up with today's fast paced business environment.
              </p>
            </div>
          </div>
        </div>
        <ChooseUs />
        <FeedbackForm />
        <div className="align-center justify-center mt-4">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Our <span className='text-sky-400'>Partners</span></h1>
        </div>
        <Partners />
      </main>
      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}

