import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Keep this import statement here
import './index.css'; // Import file CSS at the top of the file
import interactDataRemoveGame from 'components/Action/InteractDataRemoveGame';

function Render({ games }) {
    const [deleteConfirmation, setDeleteConfirmation] = useState(null); // State to confirm Delete

    const handleDelete = (gameID) => {
        setDeleteConfirmation(gameID); // Save the gameID to be deleted in state to show Confirm
    };

    const handleConfirmDelete = (gameID) => {
        interactDataRemoveGame(gameID, (responseData, error) => {
            if (error) {
                console.error('Error deleting game:', error);
            } else {
                window.location.reload();
            }
        });
        setDeleteConfirmation(null); // Close Confirm after deleting
    };

    return (
        <div>
            <h2>All Games</h2>
            <div className="table-container-admin">
                {/* Use class table-container */}
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Release Date</th>
                            <th>Image</th>
                            <th>Action</th> {/* Add Action column */}
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game) => (
                            <tr key={game.GameID}>
                                <td>{game.GameID}</td>
                                <td>{game.Name}</td>
                                <td>{game.Price === '0.00' ? 'Free Game' : game.Price}</td>
                                <td>{game.DateTimeRelease}</td>
                                <td>
                                    <img src={game.Image} alt={game.name} style={{ width: '100px' }} />
                                </td>
                                <td className="link-and-span-container">
                                    {/* Create link to specific route */}
                                    <Link
                                        style={{ color: 'black', fontSize: '10px' }}
                                        to={`/admin/modify/detail?gameID=${game.GameID}`}
                                    >
                                        Modify
                                    </Link>
                                    <span
                                        style={{ color: 'black', fontSize: '10px' }}
                                        className="delete-action"
                                        onClick={() => handleDelete(game.GameID)}
                                    >
                                        Delete
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Show Confirm when Delete is clicked */}
            {deleteConfirmation && (
                <div className="confirm-modal">
                    <div className="confirm-modal-content">
                        <p>Are you sure you want to delete this game?</p>
                        <div>
                            <button onClick={() => handleConfirmDelete(deleteConfirmation)}>OK</button>
                            <button onClick={() => setDeleteConfirmation(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Render;
