import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { getAllImages } from 'components/api/images';
import { Component } from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export class ImageGallery extends Component {
  state = {
    data: null,
    isLoading: false,
    error: '',
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    try {
      this.setState({ isLoading: true, error: '' });
      const response = await getAllImages();
      this.setState({ data: response.hits });
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { data, isLoading, error } = this.state;
    return (
      <StyledGallery>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}

        {data &&
          data.map(el => (
            <ul className="gallery">
              <ImageGalleryItem imageData={el} key={el.id} />
            </ul>
          ))}
      </StyledGallery>
    );
  }
}
