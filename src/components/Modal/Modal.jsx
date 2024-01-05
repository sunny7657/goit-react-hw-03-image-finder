import { Component } from 'react';

export class Modal extends Component {
  handleEsc = e => {
    if (e.code === 'Escape') {
      this.props.hideModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }

  render() {
    const { imageUrl, hideModal } = this.props;
    return (
      <div className="Overlay" onClick={hideModal}>
        <div className="Modal">
          <img src={imageUrl} alt="big_image" />
        </div>
      </div>
    );
  }
}
