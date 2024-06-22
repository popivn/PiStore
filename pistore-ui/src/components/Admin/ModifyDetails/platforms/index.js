import React, { useState, useEffect } from 'react';
import './index.css';
import interactDataGetAllPlatforms from 'components/Action/interactDataGetAllPlatforms';
import interactDataAddPlatforms from 'components/Action/InteractDataAddPlatforms';

function AddPlatforms({ gameID }) {
    const [platformsData, setPlatformsData] = useState([]);
    const [addedPlatforms, setAddedPlatforms] = useState([]);
    const [platformName, setPlatformName] = useState('PC');

    useEffect(() => {
        interactDataGetAllPlatforms((platformsData) => {
            setPlatformsData(platformsData);
        });
    }, []);

    const handleSavePlatforms = () => {
        console.log(addedPlatforms);
        interactDataAddPlatforms(addedPlatforms);
    };

    const handleAddPlatforms = () => {
        const selectedPlatformid = platformsData.find((platform) => platform.Name === platformName)?.PlatformID;
        console.log(selectedPlatformid);
        if (!selectedPlatformid) {
            console.error('Platform not found:', platformName);
            return;
        }

        const isPlatformExists = addedPlatforms.some((platform) => platform.platformID === selectedPlatformid);
        if (isPlatformExists) {
            alert('Platform already exists!');
            return;
        }

        const newPlatform = {
            gameID: gameID,
            platformID: selectedPlatformid,
        };
        const updatedAddedPlatforms = [...addedPlatforms, newPlatform];
        setAddedPlatforms(updatedAddedPlatforms);
    };

    const handleRemovePlatform = (index) => {
        const updatedAddedPlatforms = [...addedPlatforms];
        updatedAddedPlatforms.splice(index, 1);
        setAddedPlatforms(updatedAddedPlatforms);
    };

    return (
        <div className="row mb-3">
            <h3 className="styleH2 rounded rounded-0">Add Platform</h3>
            <div className="col-lg-5">
                <select
                    className="select-style"
                    value={platformName}
                    onChange={(e) => {
                        setPlatformName(e.target.value);
                    }}
                >
                    {platformsData
                        ? platformsData.map((platform) => (
                              <option key={platform.platformID} value={platform.Name}>
                                  {platform.Name}
                              </option>
                          ))
                        : null}
                </select>
                <button onClick={handleAddPlatforms} className="styleP-Add-Admin">
                    Add
                </button>
                <button onClick={handleSavePlatforms} className="styleP-Save-Admin">
                    Save
                </button>
            </div>
            <div className="col-lg-7">
                <table className="contact-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addedPlatforms.map((platform, index) => (
                            <tr key={index}>
                                <td>{platformsData.find((c) => c.PlatformID === platform.platformID)?.Name}</td>
                                <td>
                                    <button onClick={() => handleRemovePlatform(index)}>X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddPlatforms;
