/* eslint-disable react/prop-types */
import React from 'react';
import UserInfoCard from './UserInfoCard';
import './skeletongrid.css';

const PortofolioCard = ({ numPhotographs, numProjects }) => {
    return (
        <div className="animate-pulse">
            {/* Skeleton Photography */}
            <div className="bg-white rounded-lg border shadow-lg p-4 mb-4 dark:bg-gray-700 dark:text-white">
                <UserInfoCard />
                <h1 className="text-center text-2xl font-bold"><div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mt-24"></div></h1>
                <div className="text-center text-lg pt-4 "><div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div></div>
                <div className="photo-grid mt-4 mb-4">
                    {Array.from({ length: numPhotographs }).map((_, index) => (
                        <div key={index} className={`item-photo item-photo-${index + 1}`}>
                            <div className="w-full h-64 bg-gray-200 rounded border-red-600"></div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-gray-200 text-white rounded p-8 px-28 dark:bg-gray-600">
                    </button>
                </div>
            </div>

            {/* Skeleton Frontend Project */}
            <div className="bg-white rounded-lg border shadow-lg p-4 mb-4 dark:bg-gray-700 dark:text-white">
                <UserInfoCard />
                <div className="w-full bg-antiquewhite p-5 md:p-10 mt-1 text-center rounded-lg">
                    <h2 className="text-xl md:text-2xl font-bold mb-5">
                        <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
                    </h2>
                    <div className="flex justify-center">
                        {Array.from({ length: numProjects }).map((_, index) => (
                            <div key={index} className="m-2 dark:bg-gray-900 border border-gray-300 rounded-lg bg-white w-full sm:w-72 md:w-80 lg:w-96 overflow-hidden">
                                <div className="w-full h-32 bg-gray-200 rounded cursor-pointer"></div>
                                <div className="flex flex-col items-center mt-5 p-4">
                                    <h3 className="text-lg md:text-xl font-bold mb-2"><div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div></h3>
                                    <p className="text-base md:text-lg text-gray-700 dark:text-white mb-3">
                                        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                                    </p>
                                    <div className="flex space-x-2 mt-3">
                                        {Array.from({ length: 3 }).map((_, idx) => (
                                            <div key={idx} className="h-8 w-8 bg-gray-200 rounded"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortofolioCard;
