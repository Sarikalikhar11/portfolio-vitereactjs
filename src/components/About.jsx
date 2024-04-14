import { useState } from 'react';
import girlImage1 from '../assets/girl1.png';
import { Link } from 'react-router-dom';
const About = () => {
  const [aboutData, setAboutData] = useState({
    image: girlImage1,
    title: 'Front End Developer',
    para1: `A passionate developer with over 1.2 years of experience in web
                development and designing user interfaces for A passionate
                developer with experience in building responsive and interactive
                web applications.`,
    para2: `Skilled in collaboration, HTML5, Css, Javascript, ReactJS and
                Tailwind CSS, and problem-solving. Committed to delivering
                quality results and staying abreast of industry trends.
                Passionate about making a positive impact.`,
  });

  return (
    <>
      <div className="py-14 bg-gray-100">
        <h1 className="mb-6 text-4xl font-bold text-center underline">
          <Link to="/about">About Me</Link>
        </h1>
        <div className="w-full flex justify-center mt-16">
          <div className="w-full md:w-2/3 flex flex-col items-center mt-5">
            <img
              className="rounded-full shadow-lg w-fit"
              src={aboutData.image}
              alt=""
            />
          </div>
          <div className="w-full mt-5 flex justify-center ">
            <div className="w-2/3 flex flex-col">
              <h2 className="text-3xl font-bold mb-5">{aboutData.title}</h2>
              <p className="mt-3 mb-5">{aboutData.para1}</p>

              <p className="mb-10">{aboutData.para2}</p>

              <div className="mt-4">
                <a
                  href="/contact"
                  className="px-5 py-3 bg-orange-600 rounded-full text-white font-semibold shadow-lg"
                >
                  Read More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
