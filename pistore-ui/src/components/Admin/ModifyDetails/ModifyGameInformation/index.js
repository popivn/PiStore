import React, { useState, useEffect } from 'react';
import interactDataGetGame from 'components/Action/InteractDataGetGame';
import './index.css';
import interactDataUpdateGame from 'components/Action/InteractDataUpdateGame';
import AddImage from './Image';
import Swal from 'sweetalert2';
import { formatDate } from 'Config';

function MGameinfor({ gameID }) {
    const [gameData, setGameData] = useState([]);
    useEffect(() => {
        interactDataGetGame(gameID, (fetchedGameData) => {
            if (fetchedGameData) {
                setGameData(fetchedGameData);
            } else {
                console.error('Failed to fetch game data');
            }
        });
    }, [gameID]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (gameData) {
            setGameData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleImageChange = async (event) => {
        const imageFile = event.target.files[0];
        if (imageFile) {
            try {
                setGameData((prevData) => ({
                    ...prevData,
                    Image: imageFile,
                }));
            } catch (error) {
                console.error('Failed to convert image to Blob:', error);
            }
        }
        console.log(gameData.Image);
    };

    const handleSaveGameInfor = () => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
            customClass: {
                confirmButton: 'custom-swal-button',
                denyButton: 'custom-swal-button',
            },
        }).then((result) => {
            /* Đọc thêm về isConfirmed, isDenied bên dưới */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success');
                console.log(gameData);
                interactDataUpdateGame(gameData);
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
    };
    console.log(gameData.Image);
    return (
        <div className="MGameInfor">
            <h3 className="styleH2 rounded rounded-0">Game Information</h3>
            <div>
                <label className="label-styling" htmlFor="gameID">
                    GameID:
                </label>
                <input
                    type="text"
                    id="gameID"
                    name="GameID"
                    className="input-styling gameID"
                    value={gameData.GameID}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="label-styling" htmlFor="name">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="Name"
                    className="input-styling"
                    value={gameData.Name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="label-styling" htmlFor="type">
                    Type:
                </label>
                <input
                    type="text"
                    id="type"
                    name="Type"
                    className="input-styling"
                    value={gameData.Type}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="label-styling" htmlFor="price">
                    Price:
                </label>
                <input
                    type="text"
                    id="price"
                    name="Price"
                    className="input-styling"
                    value={gameData.Price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="label-styling" htmlFor="dateTimeRelease">
                    DateTimeRelease:
                </label>
                <input
                    type="datetime-local"
                    id="dateTimeRelease"
                    name="DateTimeRelease"
                    className="input-styling"
                    value={formatDate(gameData.DateTimeRelease)}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="label-styling" htmlFor="publisher">
                    Publisher:
                </label>
                <input
                    type="text"
                    id="publisher"
                    name="Publisher"
                    className="input-styling"
                    value={gameData.Publisher}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="label-styling" htmlFor="developer">
                    Developer:
                </label>
                <input
                    type="text"
                    id="developer"
                    name="Developer"
                    className="input-styling"
                    value={gameData.Developer}
                    onChange={handleChange}
                />
            </div>
            <div className="description-wrapper">
                <label className="label-styling" htmlFor="description">
                    Description:
                </label>
                <textarea
                    id="description"
                    name="Description"
                    className="input-styling"
                    value={gameData.Description}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label className="label-styling" htmlFor="quantitySold">
                    Quantity Sold:
                </label>
                <input
                    type="number"
                    id="quantitySold"
                    name="QuantitySold"
                    className="input-styling"
                    value={gameData.QuantitySold}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label className="label-styling" htmlFor="addedDate">
                    Added Date:
                </label>
                <input
                    type="datetime-local"
                    id="addedDate"
                    name="AddedDate"
                    className="input-styling"
                    value={formatDate(gameData.Addeddate)}
                    onChange={handleChange}
                />
            </div>
            <AddImage handleImageChange={handleImageChange} image={gameData.Image} />
            <button onClick={handleSaveGameInfor} className="styleP-SaveGame-Admin">
                Save
            </button>
        </div>
    );
}

export default MGameinfor;
