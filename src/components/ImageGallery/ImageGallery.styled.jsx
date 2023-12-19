import axios from 'axios';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
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

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '40411285-e0a8815789142127d1d60a3c2';

export class ImageGallery extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    axios(
      `?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(response => this.setState({ data: response.data.hits }));
  }

  render() {
    const { data } = this.state;
    return (
      <StyledGallery>
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
