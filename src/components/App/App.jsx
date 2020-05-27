import React, { Component } from 'react';
import { App as box } from './App.module.css';
import MoonLoader from 'react-spinners/MoonLoader';
import { overrideLoader } from '../../utils/overrideLoader';
import { fetchImages } from '../../service/fetchImagesAPI';
import warningInput from '../../utils/warningInput';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import mapperImages from '../../utils/mapperImages';
import Button from '../Button/Button';
import scroll from '../../utils/scroll';

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    largeImageURL: '',
    tags: '',
    isLoading: false,
    isModalOpen: false,
    error: null,
  };

  fetchImagesAPI = query => {
    this.setState({ isLoading: true });

    fetchImages(query)
      .then(({ data }) => {
        this.setState({
          images: mapperImages(data.hits),
          query,
        });
        warningInput(data.hits);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleLoadMore = e => {
    this.setState({ isLoading: true });

    fetchImages(this.state.query, this.state.page + 1)
      .then(({ data }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...mapperImages(data.hits)],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        scroll();
        this.setState({ isLoading: false });
      });
  };

  openModal = ({ target: { alt, dataset } }) => {
    this.setState({
      isModalOpen: true,
      largeImageURL: dataset.source,
      tags: alt,
    });
  };

  closeModal = () => this.setState({ isModalOpen: false, largeImageURL: '' });

  render() {
    const { images, isLoading, isModalOpen, largeImageURL, tags } = this.state;

    return (
      <div className={box}>
        <Searchbar onSubmit={this.fetchImagesAPI} />

        {isLoading && (
          <MoonLoader css={overrideLoader} size={100} color={'#000'} />
        )}

        {!!images.length && (
          <>
            <ImageGallery images={images} onOpenModal={this.openModal} />
            <Button onClick={this.handleLoadMore} isLoading={isLoading} />
          </>
        )}

        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onCloseModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
