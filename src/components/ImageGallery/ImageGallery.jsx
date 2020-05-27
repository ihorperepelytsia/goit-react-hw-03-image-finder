import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImagesGallery } from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onOpenModal }) => (
  <>
    <ul className={ImagesGallery}>
      {images.map(img => (
        <ImageGalleryItem key={img.id} {...img} onOpenModal={onOpenModal} />
      ))}
    </ul>
  </>
);

ImageGallery.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default ImageGallery;
