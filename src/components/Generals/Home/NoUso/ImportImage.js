import React, { useState } from "react";

const ImageReport = () => {

  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <section>

      <input type="file" name="images" onChange={onSelectFile} multiple accept="image/png , image/jpeg, image/webp"/>

      <div className="images">
        {selectedImages &&
          selectedImages.map((image) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>Delete</button>
              </div>
            );
          })}
      </div>

    </section>
  );
};

export {ImageReport};
