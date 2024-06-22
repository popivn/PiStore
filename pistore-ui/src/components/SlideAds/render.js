import React, { useState, useEffect } from 'react';
import { Container, Carousel, Row, Col, Button } from 'react-bootstrap';

const GameCarousel = ({ games }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex + 1) % 6);
        }, 3000); // Đặt thời gian chuyển slide tự động

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleObjectClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <Container>
            <Row className="justify-content-between">
                <Col sm={9}>
                    <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                        {games.slice(0, 6).map((game, index) => (
                            <Carousel.Item key={index}>
                                <img src={game.Image} alt={game.Name} className="carousel-image" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col className="slideAdsSideBar" sm={3}>
                    <div className="sidebar">
                        {games.slice(0, 6).map((game, index) => (
                            <Button
                                key={index}
                                //variant={index === activeIndex ? 'primary' : 'light'}
                                onClick={() => handleObjectClick(index)}
                                className={`object-button ${index === activeIndex ? 'active' : ''}`}
                            >
                                {game.Name}
                            </Button>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default GameCarousel;
