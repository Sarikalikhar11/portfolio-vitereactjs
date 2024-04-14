import bannerBackground from '../assets/banner_wallpaper.svg';

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className="text-4xl text-center font-bold underline mb-16">
          My Expertise
        </h1>
        <div className="flex my-16">
          <div
            className="flex items-center py-16"
            style={{
              backgroundImage: `url(${bannerBackground})`,
              backgroundSize: 'cover',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <div className="flex text-white justify-center items-center me-3 w-3/5">
              <div className="w-2/3 text-center space-y-8">
                <h3 className="text-3xl font-semibold">
                  I Love these Technologies
                </h3>
                <p>
                  Welcome! I'm dedicated to crafting innovative digital
                  solutions that push boundaries and delight users. With
                  expertise in HTML5, CSS3, JavaScript, and React.js, I bring
                  creative visions to life with seamless digital experiences.
                  Let's collaborate and unlock the full potential of technology
                  together!
                </p>
                <button className="text-1xl px-5 py-2 bg-orange-600 rounded-full text-white font-semibold shadow-lg">
                  Hire Me
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
                <p className="bg-gray-300 px-5 py-2 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  Html
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  CSS
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  Tailwind CSS
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  Bootstrap
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  JavaScript
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  ES6
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  ReactJS
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  ViteJS
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  NodeJS
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  ExpressJS
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  MongoDB
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  Wordpress
                </p>
                <p className="bg-gray-300 px-3 py-3 rounded-full w-fit mt-1 cursor-pointer hover:bg-orange-500">
                  Shopify
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
