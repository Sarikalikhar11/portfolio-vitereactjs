const Services = () => {
  return (
    <>
      <div className="py-14">
        <h1 className="text-4xl text-center font-bold underline">
          My Services
        </h1>
        <div className="flex mt-12 space-x-5 px-10">
          <div className="cursor-pointer hover:bg-gray-100 space-y-4 p-5 text-center shadow-lg rounded-xl bg-slate-200">
            <div className="flex items-center justify-center">
              <i className="ri-global-line text-3xl"></i>
            </div>

            <h1 className="text-2xl font-semibold">Web Development</h1>
            <p>
              Welcome to my portfolio! With a keen eye for detail, I craft
              exceptional digital experiences. Proficient in HTML5, CSS3,
              JavaScript, and React.js, I specialize in front-end development.
              Also skilled in back-end development.
            </p>
            <button className="px-5 py-2 bg-orange-600 rounded-full text-white font-semibold shadow-lg">
              Check
            </button>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 space-y-4 p-5 text-center shadow-lg rounded-xl bg-slate-200">
            <div className="flex items-center justify-center">
              <i className="ri-window-line text-3xl"></i>
            </div>
            <h1 className="text-2xl font-semibold">Frontend Development</h1>
            <p>
              Crafting immersive digital experiences that captivate and engage
              users is my passion. With expertise in HTML5, CSS3, JavaScript,
              and ReactJS, I specialize in turning design mockups into stunning,
              responsive layouts.
            </p>
            <button className="px-5 py-2 bg-orange-600 rounded-full text-white font-semibold shadow-lg">
              Check
            </button>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 space-y-4 p-5 text-center shadow-lg rounded-xl bg-slate-200">
            <div className="flex items-center justify-center">
              <i className="ri-pages-fill text-3xl"></i>
            </div>
            <h1 className="text-2xl font-semibold">UI Development</h1>
            <p>
              I'm a UI developer passionate about creating visually stunning
              interfaces that resonate with users. With expertise in UI design
              principles, color theory, and layout composition, I specialize in
              transforming design concepts into captivating digital experiences.
            </p>
            <button className="px-5 py-2 bg-orange-600 rounded-full text-white font-semibold shadow-lg">
              Check
            </button>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 space-y-4 p-5 text-center shadow-lg rounded-xl bg-slate-200">
            <div className="flex items-center justify-center">
              <i className="fa-solid fa-book-atlas text-3xl"></i>
            </div>

            <h1 className="text-2xl font-semibold">Web Designer</h1>
            <p>
              Welcome! I specialize in crafting visually stunning websites with
              intuitive interfaces. Using HTML, CSS, and JavaScript, I bring
              designs to life that engage and inspire. Let's collaborate to
              create digital experiences that leave a lasting impression.
            </p>
            <button className="px-5 py-2 bg-orange-600 rounded-full text-white font-semibold shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
