import React from 'react';

const UserInfoCard = () => {
    return (
        <div >
            <div className="flex items-start animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                <div className="flex-grow">
                    <div className="flex justify-between">
                        <div className="h-8 bg-gray-200 rounded w-1/4 m-1">
                            <h3 className="h-4 bg-gray-200 rounded w-1/2 mb-8"></h3> {/* Skeleton untuk nama */}
                            <p className="h-3 bg-gray-200 rounded w-1/3 mb-2"></p> {/* Skeleton untuk username */}
                        </div>
                        <div className="h-3 bg-gray-200 rounded w-1/5"></div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfoCard;
