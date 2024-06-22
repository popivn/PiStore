// PlatformsIcon.js
import React, { useState, useEffect } from 'react';
import interactDataGetPlatForms from 'components/Action/InteractDataGetPlatform';
import { FaWindows, FaXbox } from 'react-icons/fa';

function PlatformsIcon({ gameID }) {
    const [platforms, setPlatforms] = useState([]);

    useEffect(() => {
        interactDataGetPlatForms(gameID, (platformsData) => {
            if (Array.isArray(platformsData)) {
                setPlatforms(platformsData);
            } else {
                console.error('Platform data is not an array');
            }
        });
    }, [gameID]);

    return (
        <div>
            {platforms.map((platform, index) => (
                <div key={index}>
                    {platform.Name === 'PC' && <FaWindows />}
                    {platform.Name === 'Xbox' && <FaXbox />}
                </div>
            ))}
        </div>
    );
}

export { FaWindows, FaXbox }; // Chỉ xuất các icon để sử dụng ở nơi khác
export default PlatformsIcon;
