import bannerImage from '../assets/girl.png';
import bannerBackground from '../assets/banner_wallpaper.svg';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Frontend Developer',
        'Web Developer',
        'UI Developer',
        'Web Designer',
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 60,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '!',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover',
          height: '100vh',
        }}
        className="flex items-center"
      >
        <div className="container mx-auto px-4 py-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full px-10 mb-8  ">
              <h3 className="mt-3 text-3xl  font-semibold">Hi, I am</h3>
              <h1 className="mt-3 text-4xl  font-bold">Sarika K. Likhar</h1>
              <h2 className="mt-3 text-3xl ">
                And I am a{' '}
                <span className="font-bold underline" ref={el}></span>
              </h2>
              <p className="mt-3 mb-5 text-base md:text-lg">
                A passionate developer with over 1.2 years of experience in web
                development and designing user interfaces for A passionate
                developer with experience in building responsive and interactive
                web applications. Skilled in collaboration, HTML5, CSS,
                JavaScript, React.JS and Tailwind CSS, and problem-solving.
                Committed to delivering quality results and staying abreast of
                industry trends. Passionate about making a positive impact.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start space-x-4 space-y-4 md:space-y-0">
                <a
                  className="cursor-pointer border hover:bg-orange-500 px-3 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-900"
                  href="#"
                >
                  <i className="ri-facebook-circle-fill text-3xl"></i>
                </a>
                <a
                  className="cursor-pointer border hover:bg-orange-500 px-3 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-900"
                  href="#"
                >
                  <i className="ri-whatsapp-fill text-3xl"></i>
                </a>
                <a
                  className="cursor-pointer border hover:bg-orange-500 px-3 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-900"
                  href="#"
                >
                  <i className="ri-instagram-fill text-3xl"></i>
                </a>
                <a
                  className="cursor-pointer border hover:bg-orange-500 px-3 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-900"
                  href="#"
                >
                  <i className="ri-linkedin-box-fill text-3xl"></i>
                </a>
                <a
                  className="cursor-pointer border hover:bg-orange-500 px-3 py-3 w-12 h-12 rounded-full flex justify-center items-center bg-gray-900"
                  href="#"
                >
                  <i className="ri-twitter-fill text-3xl"></i>
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="/contact"
                  className="px-5 py-3 bg-orange-600 rounded-full text-white font-semibold shadow-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="w-full py-2 flex justify-center">
              <img
                className="rounded-full shadow-lg"
                src={bannerImage}
                alt="Profile Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
