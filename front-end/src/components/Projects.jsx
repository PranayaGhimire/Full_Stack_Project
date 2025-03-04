import React from "react";

const Projects = () => {
  return (
    <>
      <div className="h-150 mx-5 my-35">
        <h2 className="font-bold my-2">Projects:</h2>
        <ul className="space-y-2">
          <li className="hover:text-blue-600 active:text-pink-600">
            <a href="https://clinquant-flan-27a22a.netlify.app/">
              Counter App using React JS and Tailwind CSS
            </a>
          </li>
          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://wonderful-fairy-5f6b64.netlify.app/">
              Background Changer using React JS and Tailwind CSS
            </a>
          </li>
          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://glowing-moonbeam-a03f9b.netlify.app/">
              Password Generator using React JS and Tailwind CSS
            </a>
          </li>
          <li className="hover:text-blue-600  active:text-pink-600">
            <a href="https://transcendent-beignet-4dde5a.netlify.app/">
              Gemini Clone using React JS
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
