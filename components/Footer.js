import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="dark:bg-gray-800 bg-white text-black dark:text-gray-400 py-6">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Links Section */}
        

        {/* Social Media Icons */}
        {/* <div className="flex justify-center space-x-6 text-xl mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="/" aria-label="Instagram" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="/" aria-label="Linkedin" className="hover:text-gray-700 dark:hover:text-white transition-colors">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div> */}

        {/* Copyright Section */}
        <div className="text-center text-sm md:text-base">
        Copyright &copy; 2015 B2B Systems and Solutions
        </div>
      </div>
    </footer>
  );
}
