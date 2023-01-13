import React, { useState } from 'react';
import { Modal, Image } from 'react-bootstrap';

const images = [
  {
    src: 'image1.jpg',
    alt: 'Image 1'
  },
  {
    src: 'image2.jpg',
    alt: 'Image 2'
  },
  {
    src: 'image3.jpg',
    alt: 'Image 3'
  }
];

const ImageGallery = (props) => {

    const { images } = props;

  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleClose = () => {
    setShowModal(false);
  }

  const handleShow = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  }

  return (
    <div>
      {images.map((image, index) => (
        <Image src={image} alt={image} onClick={() => handleShow(image)} key={image.src} 
        className='img-fluid'
        />
      ))}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          <img src={currentImage ? currentImage : ''} alt={currentImage ? currentImage : ''} style={{ width: '100%' }}
          className='img-fluid'
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ImageGallery;