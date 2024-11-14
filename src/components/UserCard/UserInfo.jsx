import React from 'react';
import PropTypes from 'prop-types';




const UserInfo = () => {
    const userCard = [{
        name: "Reynaldi Putra Hasli",
        imageUrl: "https://avatars.githubusercontent.com/u/44026483?v=4",
        username: "@reynaldi_putra_hasli",
        url: "https://www.linkedin.com/in/reynaldi-putra-hasli/",
        time: "2h",
    }];

    const user = userCard[0];
    return (
        <>
            {/* Post */}
                <div className="flex items-start">
                    <img
                        src={user.imageUrl}
                        alt={user.altProfile}
                        className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="flex-grow">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-m text-gray-600 dark:text-white font-bold">{user.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-white">
                                    <a href={user.url}>{user.username}</a>
                                </p>
                            </div>
                            <p className="text-xs text-gray-600 dark:text-white">{user.time}</p>
                        </div>

                    </div>
                </div>
        </>
    );
};

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileLink: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default UserInfo;
