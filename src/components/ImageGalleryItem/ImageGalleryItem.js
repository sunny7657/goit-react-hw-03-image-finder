export const ImageGalleryItem = ({ imageData }) => {
  return (
    <li className="gallery-item">
      <img src={imageData.webformatURL} alt={imageData.tags} />
    </li>
  );
};
