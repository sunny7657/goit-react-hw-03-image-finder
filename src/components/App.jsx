import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as ImageService from 'Service/image-service';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    total: 0,
    error: null,
    isLoading: false,
  };

  onFormSubmit = value => {
    this.setState({
      query: value,
      page: 1,
      images: [],
      total: 0,
      error: null,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getApi(query, page);
    }
  }

  getApi = async (query, page) => {
    if (this.state.query === '') return;
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await ImageService.getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onClickLoadMore = e => {
    // e.preventDefault();
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, total, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onFormSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && total > images.length && (
          <Button onClick={this.onClickLoadMore} />
        )}
      </div>
    );
  }
}
