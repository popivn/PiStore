import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Carousel, Button } from 'react-bootstrap';
import interactDataGetGame from 'components/Action/InteractDataGetGame';
import './index.css';
import interactDataGetImages from 'components/Action/InteractDataGetImages';
import InteractDataGetGenres from 'components/Action/InteractDataGetGenres';
import interactDataGetFeatures from 'components/Action/InteractDataGetFeatures';
import RenderFollowUs from './followus';
import SystemRequirement from './systemRequirement';
import GameDetailSideBar from './gameDetailSidebar';
import Header from './Header';
import interactDataUser from 'components/Action/InteractDataUser';

function GameDetail() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = localStorage.getItem('loggedInEmail');
    const gameID = searchParams.get('gameID');
    const [gameName, setGameName] = useState(null);
    const [gameDescription, setGameDescription] = useState(null);
    const [images, setImages] = useState([]);
    const [gameimage, setGameImage] = useState();
    const [genres, setGenres] = useState([]);
    const [features, setFeatures] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [gameType, setGameType] = useState();
    const [gamePrice, setGamePrice] = useState();
    const [gameDeveloper, setGameDeveloper] = useState();
    const [gamePublisher, setGamePublisher] = useState();

    const [gameDateTimeRelease, setDataTimeRelease] = useState();
    const [UserData, setUserData] = useState([]);
    useEffect(() => {
        interactDataUser(email, (userData) => {
            setUserData(userData);
        });

        interactDataGetGame(gameID, (gameData) => {
            if (gameData) {
                setGameName(gameData.Name);
                setGameDescription(gameData.Description);
                setGameImage(gameData.Image);
                setGameType(gameData.Type);
                setGamePrice(gameData.Price);
                setGameDeveloper(gameData.Developer);
                setGamePublisher(gameData.Publisher);
                setDataTimeRelease(gameData.DateTimeRelease);
            } else {
                console.error('Failed to fetch game data');
            }
        });

        interactDataGetImages(gameID, (imageData) => {
            if (Array.isArray(imageData)) {
                setImages(imageData);
            } else {
                console.error('Image data is not an array');
            }
        });

        InteractDataGetGenres(gameID, (genresData) => {
            if (Array.isArray(genresData)) {
                setGenres(genresData);
            } else {
                console.error('Genres data is not an array');
            }
        });

        interactDataGetFeatures(gameID, (featuresData) => {
            if (Array.isArray(featuresData)) {
                setFeatures(featuresData);
            } else {
                console.error('Features data is not an array');
            }
        });
    }, [gameID]);
    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div>
            <h1 className="styleH1">{gameName}</h1>
            <Header />
            <div className="row" style={{ marginTop: 10 }}>
                <div className="col-lg-9 content-detail">
                    <div className="image-slider">
                        <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={3000}>
                            {images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img src={image.imageUrl} alt={`Image ${index}`} className="sidebar-image" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className="image-slider-sidebar text-center">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.imageUrl}
                                alt={`Image ${index}`}
                                className="slider-image"
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                    <div className="game-description">
                        <h4 className="styleH4">Game Description:</h4>
                        <p className="styleH5">{gameDescription}</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="genres-div-detail col-lg-6">
                                <h4 className="styleH4">Genres</h4>
                                <div className=" d-flex">
                                    {genres.map((genre, index) => (
                                        <p className="styleH5" key={index}>
                                            {genre + ', '}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="genres-div-detail col-lg-6">
                                <h4 className="styleH4">Features</h4>
                                <div className=" d-flex">
                                    {features.map((feature, index) => (
                                        <p className="styleH5" key={index}>
                                            {feature.Name + ', '}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <RenderFollowUs gameID={gameID} />
                    <SystemRequirement gameName={gameName} />
                </div>
                <div className="col-lg-3">
                    <GameDetailSideBar
                        gameID={gameID}
                        gameImage={gameimage}
                        gameType={gameType}
                        gamePrice={gamePrice}
                        Developer={gameDeveloper}
                        Publisher={gamePublisher}
                        DataTimeRelease={gameDateTimeRelease}
                        UserID={UserData.UserID}
                    />
                </div>
            </div>
        </div>
    );
}

export default GameDetail;
