export const ImageGalleryItem = ({ url, tags, largeImg }) => (
  <li className="ImageGalleryItem">
    <img src={url} alt={tags} className="ImageGalleryItem-image" />
  </li>
);
