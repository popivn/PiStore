import AddImages from './images';
function InputForGame({ handleSubmit, handleChange, handleImageChange, gameData }) {
    return (
        <form className="border-bottom border-dark mb-5" onSubmit={handleSubmit}>
            <h3 className="styleH2 rounded rounded-0">Game Information</h3>

            {/* <div>
                <label className="label-styling" htmlFor="gameID">
                    GameID:
                </label>
                <input
                    type="text"
                    id="gameID"
                    name="gameID"
                    className="input-styling gameID"
                    value={gameData.gameID}
                    onChange={handleChange}
                />
            </div> */}
            <div>
                <label className="label-styling" htmlFor="name">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-styling"
                    value={gameData.name}
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
                    name="type"
                    className="input-styling"
                    value={gameData.type}
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
                    name="price"
                    className="input-styling"
                    value={gameData.price}
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
                    name="dateTimeRelease"
                    className="input-styling"
                    value={gameData.dateTimeRelease}
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
                    name="publisher"
                    className="input-styling"
                    value={gameData.publisher}
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
                    name="developer"
                    className="input-styling"
                    value={gameData.developer}
                    onChange={handleChange}
                />
            </div>
            <div class="description-wrapper">
                <label className="label-styling" htmlFor="description">
                    Description:
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="input-styling"
                    value={gameData.description}
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
                    name="quantitySold"
                    className="input-styling"
                    value={gameData.quantitySold}
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
                    name="addedDate"
                    className="input-styling"
                    value={gameData.addedDate}
                    onChange={handleChange}
                />
            </div>
            <AddImages handleImageChange={handleImageChange} image={'${rootURL}uploads/logo.jpg'} />
            <button className="styleSubmit-Admin" type="submit">
                Submit
            </button>
        </form>
    );
}

export default InputForGame;
