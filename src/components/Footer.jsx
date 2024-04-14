const Footer = () => {
  return (
    <>
      <div className="py-5 border bg-gray-200 flex justify-between px-40">
        <div>
          <p>
            @2024 Sarika K Likhar <span>All Rights Reserved</span>{' '}
          </p>
          <p></p>
        </div>
        <div className="flex space-x-6 items-center">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/licence" className="hover:underline">
            Licencing
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
