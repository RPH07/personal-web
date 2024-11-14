/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import './photogrid.css';
import UserInfo from "../../components/UserCard/UserInfo";
import { UilJavaScript, UilReact, UilCss3Simple } from '@iconscout/react-unicons';
import { BiLogoJquery } from "react-icons/bi";
import PortofolioCard from "../../components/Skeleton/PortofolioCard";
import { Tooltip } from 'react-tooltip';

const imageUrls = [
  "https://reyzen.netlify.app/image/img/full/puncak.jpg",
  "https://reyzen.netlify.app/image/img/full/pedesaan.jpg",
  "https://reyzen.netlify.app/image/img/full/gunung.jpg",
  "https://reyzen.netlify.app/image/img/full/pantai3.jpg",
  "https://reyzen.netlify.app/image/img/full/puncak.jpg",
];

const projects = [
  {
    name: "Project 1 || Web filter image",
    description: "Project ini saya buat untuk menyelesaikan kelas javascript",
    imageUrl: "https://reyzen.netlify.app/image/img/full/puncak.jpg",
    url: "http://reyzen-galeri.netlify.app/",
    tech: [
      { icon: <UilJavaScript />, name: "JavaScript" },
      { icon: <BiLogoJquery />, name: "JQuery" },
      { icon: <UilCss3Simple />, name: "CSS" }
    ],
  },
  {
    name: "Project 2",
    description: "Description of Project 2",
    imageUrl: "https://reyzen.netlify.app/image/img/full/puncak.jpg",
    url: "http://reyzen-galeri.netlify.app/",
    tech: [
      { icon: <UilJavaScript />, name: "JavaScript" },
      { icon: <UilReact />, name: "React" },
      { icon: <UilCss3Simple />, name: "CSS" }
    ],
  },
  {
    name: "Project 3",
    description: "Description of Project 3",
    imageUrl: "https://reyzen.netlify.app/image/img/full/puncak.jpg",
    url: "http://reyzen-galeri.netlify.app/",
    tech: [
      { icon: <UilJavaScript />, name: "JavaScript" },
      { icon: <UilReact />, name: "React" },
      { icon: <UilCss3Simple />, name: "CSS" }
    ],
  },
  {
    name: "Project 3",
    description: "Description of Project 3",
    imageUrl: "https://reyzen.netlify.app/image/img/full/puncak.jpg",
    url: "http://reyzen-galeri.netlify.app/",
    tech: [
      { icon: <UilJavaScript />, name: "JavaScript" },
      { icon: <UilReact />, name: "React" },
      { icon: <UilCss3Simple />, name: "CSS" }
    ],
  },
];

const TechIcons = ({ tech }) => (
  <div className="flex space-x-2 mt-3">
    {/* Mengatur array tooltip sesuai project */}
    {tech.map((techItem, index) => (
      <div key={index} className="tech-icon" data-tooltip-content={techItem.name}>
        {techItem.icon}
        <Tooltip place="bottom" anchorSelect=".tech-icon" />
      </div>
    ))}
  </div>
);

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Deklarasi variabel loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // atur waktu loading

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="p-4">

        <PortofolioCard numPhotographs={imageUrls.length} numProjects={projects.length} />
      </div>
    );
  }

  return (
    <>
     {/* Portofolio front-end */}
      <div className="bg-white rounded-lg border shadow-lg p-4 mb-4 dark:bg-gray-700 dark:text-white">
        <UserInfo />
        <div className="w-full bg-antiquewhite p-5 md:p-10 mt-1 text-center rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-5">
            Front-end Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-4 mb-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="m-2 dark:bg-gray-900 rounded-lg bg-white w-full sm:w-72 md:w-80 lg:w-96 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => window.open(project.url, "_blank")}
                  />
                </div>
                <div className="p-4 border-black">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-base md:text-lg text-gray-700 dark:text-white mb-3">
                    {project.description}
                  </p>
                  <TechIcons tech={project.tech} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Section Photography */}
      <div className="bg-white rounded-lg border shadow-lg p-4 mb-4 dark:bg-gray-700 dark:text-white">
        <UserInfo />
        <h1 className="text-center text-2xl font-bold mt-24">Portfolio</h1>
        <p className="text-center text-lg">Explore my latest photographs</p>
        <div className="photo-grid mt-4 mb-4">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className={`photo photo-item-${index + 1}`}>
              <img className="w-full h-full object-cover rounded-md" src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-zenblue text-white rounded p-4 dark:bg-gray-600">
            <a href="https://reyzen-galeri.netlify.app/">Explore more photo</a> 
          </button>
        </div>
      </div>


    </>
  );
};

export default Portfolio;
