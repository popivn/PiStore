function Avatar({ avatar }) {
    return (
        <div className="col-lg-12 mb-3 text-center">
            {avatar && <img src={avatar} alt="Avatar" className="avatar rounded-circle m-0" />}
        </div>
    );
}

export default Avatar;
