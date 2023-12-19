import styled from 'styled-components';
import { ImageGallery } from './ImageGallery/ImageGallery.styled';
import { Searchbar } from './Searchbar/Searchbar.styled';
import { Component } from 'react';
import { getAllImages } from 'components/api/images';
import { Button } from './Button/Button';

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
  }

  getImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true, error: '' });
      const response = await getAllImages(query, page);
      this.setState({ data: response.hits });
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

  render() {
    console.log(this.state);
    const { data, isLoading, error, isShowImages } = this.state;
    return (
      <StyledApp>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          data={data}
          isLoading={isLoading}
          error={error}
          isShowImages={isShowImages}
        />
        {isShowImages && data && <Button />}
      </StyledApp>
    );
  }
}
