import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { UilSpinner } from '@iconscout/react-unicons';
import { useForm, ValidationError } from '@formspree/react';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilBriefcaseAlt } from '@iconscout/react-unicons';
import { UilFileDownload } from '@iconscout/react-unicons';
import { UisMultiply } from '@iconscout/react-unicons-solid';
import About from "../About/About";
import Portfolio from "../Project/Portfolio";
import Tech from "../Tech/Tech";


const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  }

  const handleOpenLightbox = () => {
    setIsLightboxOpen(true);
  }

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
      <div className="w-full md:max-w-6xl rounded-lg overflow-hidden shadow-md flex flex-col items-start">
        <div className="w-full h-48 bg-cover bg-center flex items-end pl-2 justify-start relative border-b" style={{ backgroundImage: `url('https://res.cloudinary.com/ddcoyppww/image/upload/v1732247013/header_profile_aupukq.jpg')` }}>
          <img
            src={profileImg}
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
          <button className="bg-slate-400 text-white px-4 py-1 transition-all duration-300 rounded-md hover:drop-shadow-md dark:bg-gray-600" onClick={handleOpenLightbox}>Pesan</button>
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
      <div className="w-full max-w-6xl mt-6">
        {renderSection()}
      </div>

      {/* Lightbox form */}
      {isLightboxOpen && (
        <div 
        onClick={handleCloseLightbox}
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 transition-all duration-200">
          <div 
          onClick={(e) => e.stopPropagation()}
          className="relative w-6/12 md:w-1/3 bg-white rounded-lg p-6">
            <button
              onClick={handleCloseLightbox}
              className="absolute -top-0 -right-14 bg-red-500 text-white rounded-full p-2 flex items-center justify-center"
            >
              <UisMultiply />
            </button>

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Kirim Pesan</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

function ContactForm() {
  const [state, handleSubmit] = useForm("moqbyape");
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitDelay, setSubmitDelay] = useState(2000);

  useEffect(() => {
    // cek kecepatan internet user
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
      // set durasi loading
      let delay = 2000;
      switch (connection.effetiveType) {
        case 'slow-2g': delay = 4000; break;
        case '2g': delay = 3000; break;
        case '3g': delay = 2500; break
        case '4g': delay = 1500; break;
        default:
          delay = 2000;
      }
      setSubmitDelay(delay);
    }
  }, []);

  if (state.succeeded) {
    return <p className="text-green-600">Terima Kasih! pesan kamu telah terkirim</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full">
      <div className="relative">
        <div className={`
          absolute transition-all duration-200 z-10
          ${(emailFocused || email)
            ? 'text-sm top-0 left-3 -translate-y-1/2 bg-white px-1 text-zenblue' :
            'top-1/2 left-3 -translate-y-1/2 text-gray-400'
          }
          `}>
          Email Address
        </div>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          required
          className={`
          w-full p-3 border rounded-md outline-none transition-all duration-200
          ${emailFocused || email ? 'border-zenblue' : 'border-gray-400'}
          `}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className="relative">
        <div className={`
          absolute transition-all duration-200 z-10
          ${(messageFocused || message)
            ? 'text-sm top-0 left-3 -translate-y-1/2 bg-white px-1 text-zenblue' :
            'top-1/2 left-3 -translate-y-1/2 text-gray-400'
          }
          `}>
          Pesan
        </div>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setMessageFocused(true)}
          onBlur={() => setMessageFocused(false)}
          required
          className={`
          w-full p-3 border rounded-md outline-none transition-all duration-200
          ${emailFocused || email ? 'border-zenblue' : 'border-gray-400'}
          `}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        className="bg-zenblue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300"
        disabled={state.submitting}
      >
        {state.submitting ? (
          <div className="flex items-center">
            <UilSpinner className="animate-spin mr-2" />
            Mengirim...
          </div>
        ) : (
          'Kirim Pesan'
        )}
      </button>
      {/* Tambahan Informasi Koneksi (opsional) */}
      {navigator.connection && (
        <div className="text-xs text-gray-500 mt-2 text-center">
          Koneksi kamu: {navigator.connection.effectiveType}
        </div>
      )}
    </form>
  );
}

export default Home;
