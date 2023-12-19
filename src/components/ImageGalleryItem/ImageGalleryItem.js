import { nanoid } from 'nanoid';

export const ImageGalleryItem = ({ imageData }) => {
  return (
    <li className="gallery-item" key={nanoid()}>
      <img src={imageData.webformatURL} alt={imageData.tags} />
    </li>
  );
};
