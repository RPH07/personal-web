import React from "react";
import UserInfo from "../../components/UserCard/UserInfo";

const About = () => {
  const aboutMeData = [
    "Hi 🙌, I’m Reynaldi Putra Hasli, currently in my 7th semester studying Information Technology at Universitas Bina Sarana Informatika. With a passion for front-end web development and web design, I spend a lot of my time honing my skills in these areas.",
    "I love learning new things, whether it's a new programming language, design trend, or development tool. This drive to continuously improve helps me stay up-to-date with the latest industry standards and best practices.",
    "Being part of a team allows me to contribute to collective goals, bringing my unique perspective and skills to the table. Whether it's brainstorming ideas, troubleshooting issues, or celebrating successes, I thrive in environments where collaboration and mutual support are key.",
    "I'm excited about the future and the opportunities to create innovative solutions that can make a difference."
  ];
  const educationData = [
    {
      institution: "Universitas Bina Sarana Informatika",
      major: "Teknologi Informasi",
      dates: "September 2021 - Sekarang",
    },
    {
      institution: "Smk Nusantara 1 Kota Tangerang",
      major: "Multimedia",
      dates: "Juli 2017 - April 2020",
    },
  ];
  return (
    <div className="w-full max-w-full mt-10 ">
      <div className="w-full flex flex-col md:flex-row gap-5 p-10  md:max-w-15xl mt-8">
        {/* About Section */}
        <div className="bg-[#F7FBFC] rounded-lg shadow-lg p-4 mb-4 dark:bg-gray-700 dark:text-white">
          <UserInfo />
          <div className="mt-4">
              {aboutMeData.map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-sm mb-4">
                  {paragraph}
                  <br />
                </p>
              ))}
          </div>

        </div>


        {/* Education Section */}
        <div className="w-full md:w-[200vh] md:h-[50%] max-w-4xl rounded-lg border shadow-lg p-7 md:p-5 mb-4 dark:bg-gray-700 dark:text-red">
          <UserInfo />
          <div className="mt-4">
            <h4 className="font-bold text-lg mb-2">Education Road map🏫</h4>
            <div className="relative border-l-4 border-zenblue dark:border-gray-600 pl-4">
              {educationData.map((edu, index) => (
                <div key={index} className="mb-5 relative">
                  <div className="absolute -left-7 top-0 w-5 h-5 bg-zenblue rounded-full border-4 border-white dark:border-gray-700"></div>
                  <div className="ml-4">
                    <h5 className="font-bold">{edu.institution}</h5>
                    <p>{edu.major}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
