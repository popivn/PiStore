import React, { useState } from 'react';

function AddImages({ handleImageChange, image }) {
    const [previewImage, setPreviewImage] = useState(null);

    const handlePreviewImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            // Do nothing if no file is selected
        }
    };

    return (
        <div>
            <label className="label-styling" htmlFor="images">
                Images:
            </label>
            <input
                type="file"
                id="images"
                name="Images"
                className="images input-styling"
                onChange={(event) => {
                    handleImageChange(event);
                    handlePreviewImage(event);
                }}
            />
            {previewImage !== null ? (
                <div className="text-center mb-3">
                    <img
                        className="rounded rounded-3"
                        src={previewImage}
                        alt="Preview"
                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                    />
                </div>
            ) : (
                <div className="text-center mb-3">
                    <img
                        className="rounded rounded-3"
                        src={image} // Display the default image if previewImage is null
                        alt="Preview"
                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                    />
                </div>
            )}
        </div>
    );
}

export default AddImages;
