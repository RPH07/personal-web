import React from "react";
import UserInfo from "../../components/UserCard/UserInfo";

const About = () => {
  return (
    <div className="w-full max-w-full mt-10 ">
      <div className="w-full flex flex-col md:flex-row gap-5 p-10  md:max-w-15xl mt-8">
        {/* About Section */}
        <div className="bg-[#F7FBFC] rounded-lg shadow-lg p-4 mb-4 dark:bg-gray-700 dark:text-white">
          <UserInfo />
          <div > 
            <p className="mt-4 text-gray-800 dark:text-white ">
                Hi 🙌, I’m Reynaldi Putra Hasli, currently in my 7th semester
                studying Information Technology at Universitas Bina Sarana
                Informatika. With a passion for front-end web development and web
                design, I spend a lot of my time honing my skills in these
                areas. I enjoy the creative and technical aspects of building
                websites and applications, and I'm always looking for new
                challenges to improve my expertise.
                <br />
                <br />
                I love learning new things ,
                whether it's a new programming language, design trend, or
                development tool. This drive to continuously improve helps me
                stay up-to-date with the latest industry standards and best
                practices. I believe that the best way to grow is by sharing
                knowledge and collaborating with others, which is why I enjoy
                working in teams.
                <br />
                <br />
                Being part of a team allows me to contribute
                to collective goals, bringing my unique perspective and skills
                to the table. Whether it's brainstorming ideas, troubleshooting
                issues, or celebrating successes, I thrive in environments where
                collaboration and mutual support are key. I'm excited about the
                future and the opportunities to create innovative solutions that
                can make a difference.
          </p>
          </div>
          
        </div>
        

        {/* Education section */}
        <div className="w-full md:w-[200vh] md:h-[50%] max-w-4xl rounded-lg border shadow-lg p-7 md:p-5 mb-4 dark:bg-gray-700 dark:text-red">
          <UserInfo/>
              <div className="mt-4">
                <h4 className="font-bold text-lg mb-2">Education Road map🏫</h4>
                <div className="border-l-2 border-zenblue pl-4">
                  <div className="relative mb-4">
                    <div className="absolute -left-6 top-1 w-4 h-4 bg-zenblue rounded-full"></div>
                    <h5 className="font-bold">
                      Universitas Bina Sarana Informatika
                    </h5>
                    <p>Teknologi Informasi</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      September 2021 - Sekarang{" "}
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 top-1 w-4 h-4 bg-zenblue rounded-full"></div>
                    <h5 className="font-bold">
                      Smk Nusantara 1 Kota Tangerang
                    </h5>
                    <p>Multimedia</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Juli 2017 - April 2020{" "}
                    </p>
                  </div>
                </div>
              </div>
        </div>
              
      </div>
    </div>
  );
};

export default About;
