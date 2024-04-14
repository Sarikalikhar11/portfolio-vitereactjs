import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../assets/frontEnd-sarika.pdf';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const banner = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const expertise = useRef(null);
  const contact = useRef(null);

  const scrollToPage = (ele) => {
    window.scroll({
      top: ele.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="h-20 main flex justify-between items-center border px-16 bg-gray-100">
        <Link to="/" className="brand-name text-3xl font-bold">
          Sarika
        </Link>
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:block lg:flex lg:items-center lg:space-x-6`}
        >
          <Link
            onClick={() => scrollToPage(banner)}
            ref={banner}
            to="/"
            className="active hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            onClick={() => scrollToPage(about)}
            ref={about}
            to="/about"
            className="hover:text-gray-400"
          >
            About
          </Link>
          <Link
            onClick={() => scrollToPage(services)}
            ref={services}
            to="/services"
            className="hover:text-gray-400"
          >
            Services
          </Link>
          <Link
            onClick={() => scrollToPage(expertise)}
            ref={expertise}
            to="/expertise"
            className="hover:text-gray-400"
          >
            Expertise
          </Link>
          <Link
            onClick={() => scrollToPage(contact)}
            ref={contact}
            to="/contact"
            className="hover:text-gray-400"
          >
            Contact
          </Link>
          <div>
            <Link to={Resume} target="_blank" rel="noreferrer">
              <button
                className="bg-orange-500 py-2 px-4 font-bold rounded-full text-white"
                type=""
              >
                Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
