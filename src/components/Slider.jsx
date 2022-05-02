import React from 'react'
import { useState } from 'react';

import '../css/Slider.css'

const Slider = () => {

    const images = ['imagen1.jpeg', 'imagen2.jpeg', 'imagen3.jpeg', 'imagen4.jpg']
    const [selectedIndex, setSelectedIndex] =  useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    /**
     * 
     * @param {string[]} images this is the array of images that are going to be displayed
     * @param {boolean} next this is a boolean that indicates if the image is going to be selected next or previous
     */
    const selectNewImage = (images, next = true) => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1);
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex)
     }

    const prevImage = () => selectNewImage(images, false);

    const nextImage = () => selectNewImage(images);

  return (
    <div className='Slider'>
      <div className='sliderImgContainer'>
        <img src={require(`../images/${selectedImage}`)} alt={selectedImage} />
      </div>
      <div className='btnContainer'>
        <button onClick={prevImage}>{"<"}</button>
        <button onClick={nextImage}>{">"}</button>
      </div>
    </div>
  )
}

export default Slider
