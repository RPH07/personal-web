import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilFileDownload } from '@iconscout/react-unicons'
import About from "../About/About";
import Portfolio from "../Project/Portfolio";
import Tech from "../Tech/Tech";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  const profileImg = [
    "https://avatars.githubusercontent.com/u/44026483?v=4"
  ]

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "tech":
        return <Tech />
    }
  };

  const [isFollowing, setIsFollowing] = useState(false);

  // Mengambil status awal dari localStorage
  useEffect(() => {
    const storedStatus = localStorage.getItem('isFollowing');
    if (storedStatus === 'true') {
      setIsFollowing(true);
    }
  }, []);

  const handleFollowClick = () => {
    const newStatus = !isFollowing;
    setIsFollowing(newStatus);
    localStorage.setItem('isFollowing', newStatus);
    window.open('https://www.linkedin.com/in/reynaldi-putra-hasli/', '_blank');
  };


  return (
    <div className="min-h-screen flex flex-col items-center py-3 bg-[#F7FBFC] dark:bg-gray-800 dark:text-white">
      {/* Profile Card */}
      <div className="w-full md:w-[70%] max-w-8xl rounded-lg overflow-hidden shadow-md flex flex-col items-start">
        <div className="w-full h-48 bg-cover bg-center flex items-end pl-2 justify-start relative border-b" style={{ backgroundImage: `url('https://scontent.fcgk29-1.fna.fbcdn.net/v/t1.6435-9/114248511_1254465121390823_621707280663699724_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeG5n6ypvS3TnVnlXAEDrhDuDEpSipRwhA4MSlKKlHCEDkbYe-K_b_AIAjrfkdq2LjHAOhSC9oae0rMUkkBvGliE&_nc_ohc=WqnOUU8qjGAQ7kNvgHVdmGW&_nc_ht=scontent.fcgk29-1.fna&oh=00_AYCsQDKYS5mLJfYAcq1QjiyV0krPHfNDlneI0CtFzg2eyg&oe=66C60CF3')` }}>
          <img
            src= {profileImg}
            alt="Profile image"
            className="w-32 h-32 rounded-full border-4 border-white absolute bottom-0 transform translate-y-1/2"
          />
        </div>
        <div className="w-full flex justify-end space-x-4 mt-4 mb-2 pr-2">
          <button
            className={`px-4 py-1 rounded-full hover:drop-shadow-md border-2 transition-all duration-300 ${isFollowing
              ? 'bg-transparent text-zenblue border-zenblue'
              : 'bg-zenblue text-white hover:bg-zenblue hover:text-white'
              }`}
            onClick={handleFollowClick}
          >
            {isFollowing ? 'Ikuti' : 'Mengikuti'}
          </button>
          <button className="bg-slate-400 text-white px-4 py-1 transition-all duration-300 rounded-md hover:drop-shadow-md dark:bg-gray-600">Pesan</button>
        </div>

        {/* Name section */}
        <div className="mb-3 px-4 pt-3">
          <h1 className="text-3xl text-gray-900 dark:text-white font-bold">Reynaldi Putra Hasli</h1>
          <div className="mb-5 text-gray-400">
            <a href="https://www.linkedin.com/in/reynaldi-putra-hasli/">@reynaldi_putra_hasli</a>
          </div>
          <div className="text-lg text-gray-700 dark:text-white mt-1">
            <Typewriter
              options={{
                strings: ["Front-end Web", "UI/UX Designer", "Photographer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex items-center mt-4">
          <UilFileDownload size="20" className="text-zenblue" />
            <p className="text-gray-400 ml-2">
              <a href="google.com">Download my CV</a>
            </p>
          </div>
          <div className="mt-3 mb-4 flex items-center">
            <div className="flex items-center mr-4">
              <UilLocationPoint size="20" className="text-zenblue" />
              <p className="text-gray-400 ml-2">Tangerang Regency, Banten</p>
            </div>
            <div className="flex items-center">
              <UilBriefcaseAlt size="20" className="text-zenblue" />
              <p className="text-gray-400 ml-2">Open To work</p>
            </div>
          </div>
          
        </div>
      </div>


      {/* Navigation Buttons */}
      <div className="w-[70%] max-w-8xl mt-10 text-center border-b">
        <div className="mb-6">
          <button
            onClick={() => setActiveSection("about")}
            className={`mx-4 p-4 ${activeSection === "about" ? "bg-zenblue outline outline-offset-2 outline-gray-300 text-white rounded-lg shadow-lg" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => setActiveSection("portfolio")}
            className={`mx-4 p-4 ${activeSection === "portfolio" ? "bg-zenblue outline outline-offset-2 outline-gray-300  text-white rounded-lg shadow-lg" : ""}`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveSection("tech")}
            className={`mx-4 p-4 ${activeSection === "tech" ? "bg-zenblue outline outline-offset-2 outline-gray-300  text-white rounded-lg shadow-lg" : ""}`}
          >
            Tech
          </button>

        </div>
      </div>

      {/* Dynamic Section Rendering */}
      <div className="w-full max-w-4xl mt-6">
        {renderSection()}
      </div>
    </div>
  );
};

export default Home;
