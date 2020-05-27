import React from 'react';
import {
  ImageGaleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  onOpenModal,
}) => (
  <>
    <li className={ImageGaleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={ImageGalleryItemImage}
        onClick={onOpenModal}
        data-source={largeImageURL}
      />
    </li>
  </>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
