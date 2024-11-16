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
      institution: "Smk Nusantara 1 Kota Tangerang",
      major: "Multimedia",
      dates: "Juli 2017 - April 2020",
    },
    {
      institution: "Universitas Bina Sarana Informatika",
      major: "Teknologi Informasi",
      dates: "September 2021 - Sekarang",
    },
  ];
  return (
    <div className="mt-10">
      <div className="w-full flex justify-center flex-col md:flex-row gap-5 p-10 mt-8">
        {/* About Section */}
        <div className="bg-[#F7FBFC] w-full md:max-w-2xl rounded-lg shadow-lg p-4 mb-4 dark:bg-gray-700 dark:text-white">
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

        <div className=" flex flex-col gap-5">
        {/* Education Section */}
        <div className="w-full md:h-[50%] rounded-lg border shadow-lg p-7 md:p-5 mb-4 dark:bg-gray-700 dark:text-red">
          <UserInfo />
          <div className="mt-4">
            <h4 className="font-bold text-lg mb-2">Education Road map🏫</h4>
            <div className="pl-4">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Titik bulat untuk setiap item */}
                  <div className="absolute -left-7 top-0 w-5 h-5 bg-zenblue rounded-full border-4 border-white dark:border-gray-700"></div>
                  <div className="ml-4 mb-5">
                    <h5 className="font-bold">{edu.institution}</h5>
                    <p>{edu.major}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.dates}</p>
                  </div>
                  
                  {/*Set garis timeline agar hanya tampil 1 */}
                  {index < educationData.length - 1 && (
                    <div className="absolute -left-5 top-5 h-full w-1 bg-zenblue dark:bg-gray-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full md:h-[50%] rounded-lg border shadow-lg p-7 md:p-5 mb-4 dark:bg-gray-700 dark:text-red">
          <UserInfo />
          <div className="mt-4">
            <h4 className="font-bold text-lg mb-2">Experience Road map 💻</h4>
            <div className="pl-4">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Titik bulat untuk setiap item */}
                  <div className="absolute -left-7 top-0 w-5 h-5 bg-zenblue rounded-full border-4 border-white dark:border-gray-700"></div>
                  <div className="ml-4 mb-5">
                    <h5 className="font-bold">{edu.institution}</h5>
                    <p>{edu.major}</p>
                    <p className="text-gray-500 dark:text-gray-400">{edu.dates}</p>
                  </div>
                  
                  {/*Set garis timeline agar hanya tampil 1 */}
                  {index < educationData.length - 1 && (
                    <div className="absolute -left-5 top-5 h-full w-1 bg-zenblue dark:bg-gray-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default About;
