import React from "react";

const Contact = () => {
  return (
    <>
      <div className="h-150 mx-5 my-35">
        <h2 className="md:text-center my-5">
          You can contact me in any of the links below:
        </h2>
        <h3 className="text-center font-bold md:text-2xl">
          Social Media Links
        </h3>
        <ul className="flex space-x-10 justify-center my-3 md:my-10">
          <li>
            <a href="https://www.facebook.com/pranaya.ghimire.9">
              <i className="fa-brands fa-facebook text-blue-700 text-2xl cursor-pointer md:text-3xl hover:text-4xl"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pranaya_ghimire/">
              <i className="fa-brands fa-square-instagram text-pink-500 text-2xl cursor-pointer md:text-3xl hover:text-4xl"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pranaya-ghimire-8774a7253/">
              <i className="fa-brands fa-linkedin text-blue-700 text-2xl cursor-pointer md:text-3xl hover:text-4xl"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/Pranaya_ghimire">
              <i className="fa-brands fa-x-twitter text-black text-2xl cursor-pointer md:text-3xl hover:text-4xl"></i>
            </a>
          </li>
        </ul>
        <div className="my-75">
          <h3 className="text-center my-2 font-bold md:text-2xl">Phone No.</h3>
          <p className="text-center">
            <i className="fa-solid fa-phone mx-3 text-green-600"></i>
            9779840505684
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
