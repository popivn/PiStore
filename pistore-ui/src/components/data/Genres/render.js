const Render = ({ genres }) => {
    return (
        <div className="container">
            <div className="hold-genres row justify-content-center mx-0 ">
                <h2 className="styleH2 rounded-bottom rounded-0">Genres</h2>
                {genres.map((genre) => (
                    <div className="genres-div rounded-bottom rounded-10 col-lg-3 col-sm-6" key={genre.genresID}>
                        <div className="genre-item d-flex flex-column justify-content-center align-items-center">
                            <img src={genre.imagesUrl} alt={genre.name} />
                            <h3>{genre.Name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Render;
