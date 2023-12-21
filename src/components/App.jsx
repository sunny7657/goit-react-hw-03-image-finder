import styled from 'styled-components';
import { ImageGallery } from './ImageGallery/ImageGallery.styled';
import { Searchbar } from './Searchbar/Searchbar.styled';
import { Component } from 'react';
import { getAllImages } from 'components/api/images';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export class App extends Component {
  state = {
    data: null,
    isLoading: false,
    error: '',
    query: '',
    page: 1,
    total: 0,
    largeImageURL: '',

    isShowImages: false,
  };

  componentDidMount() {
    // this.getImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.isShowImages !== prevState.isShowImages &&
      this.state.isShowImages
    ) {
      this.getImages();
    }

    if (
      this.state.isShowImages !== prevState.isShowImages &&
      !this.state.isShowImages
    ) {
      this.setState({ data: null });
    }
    if (prevState.page !== this.state.page) {
      this.getImages();
    }
  }

  getImages = async () => {
    const { query, page } = this.state;
    if (!query) return;

    try {
      this.setState({ isLoading: true, error: '' });
      const response = await getAllImages(query, page);
      this.setState(prev => ({
        data: prev.data ? [...prev.data, ...response.hits] : response.hits,
        total: response.totalHits,
      }));
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = query => {
    this.setState(prev => ({
      data: null,
      query,
      page: 1,
      isShowImages: !prev.isShowImages,
    }));
  };

  onLoadMoreClick = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  openModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    console.log(this.state);
    const { data, isLoading, error, isShowImages, total, largeImageURL } =
      this.state;
    console.log(total);
    return (
      <StyledApp>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          data={data}
          isLoading={isLoading}
          error={error}
          isShowImages={isShowImages}
          onSelect={this.openModal}
          // total={total}
        />

        {isShowImages && data && data.length < total && (
          <Button onClick={this.onLoadMoreClick} />
        )}
        {largeImageURL && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </StyledApp>
    );
  }
}
