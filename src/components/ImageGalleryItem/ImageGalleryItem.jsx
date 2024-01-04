export const ImageGalleryItem = ({ url, tags }) => (
  <li className="ImageGalleryItem">
    <img src={url} alt={tags} className="ImageGalleryItem-image" />
  </li>
);
