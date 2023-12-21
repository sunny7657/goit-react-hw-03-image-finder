import styled from 'styled-components';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import { Loader } from 'components/Loader/Loader';

const StyledGallery = styled.ul`
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

export const ImageGallery = ({
  data,
  isLoading,
  error,
  isShowImages,
  onSelect,
}) => {
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}

      {isShowImages && data && (
        <>
          <StyledGallery className="gallery">
            {data.map(el => (
              <ImageGalleryItem
                imageData={el}
                key={nanoid()}
                onClick={onSelect}
              />
            ))}
          </StyledGallery>
        </>
      )}
    </>
  );
};
