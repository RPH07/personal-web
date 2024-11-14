/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import UserInfo from "../../components/UserCard/UserInfo";
// import UserInfoCard from "../../components/Skeleton/UserInfoCard";
import { UilJavaScript, UilCss3Simple } from '@iconscout/react-unicons';
import { BiLogoJquery } from 'react-icons/bi';

const myTech = [
    {
        language: "Web Language",
        skills: [
            { icon: <UilCss3Simple />, name: "CSS" },
            { icon: <UilJavaScript />, name: "JavaScript" },
            { icon: <BiLogoJquery />, name: "JQuery" },
            { name: "HTML" }, // Jika tidak ada ikon, tetap bisa ditambahkan
            { name: "Bootstrap" },
            { name: "SCSS" },
            { name: "Tailwind CSS" },
            { name: "React Js" },
            { name: "Vue Js" },
        ],
    },
    {
        language: "Tools",
        skills: [
            { name: "Git" },
            { name: "GitHub" },
            { name: "Figma" },
        ],
    },
];

const Tech = () => {
    return (
        <div className="w-full max-w-4xl mt-10 ">
            <div className="w-full md:max-w-5xl mt-8">
                <div className="bg-white rounded-md border shadow-lg p-4 mb-4 dark:bg-gray-700 dark:text-white">
                    <UserInfo />

                    {myTech.map((category, techIndex) => (
                        <div key={techIndex} className="mt-4 text-center">
                            <h2 className="text-lg font-semibold mb-2">{category.language}</h2>
                            <div className="flex flex-wrap justify-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="bg-zenblue mx-2 my-1 px-4 py-2 rounded-[10px] text-white flex items-center"
                                    >
                                        {skill.icon && <span className="mr-2">{skill.icon}</span>}
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tech;
