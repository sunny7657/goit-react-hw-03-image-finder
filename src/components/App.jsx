import styled from 'styled-components';
import { ImageGallery } from './ImageGallery/ImageGallery.styled';
import { Searchbar } from './Searchbar/Searchbar.styled';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const App = () => {
  return (
    <StyledApp>
      <Searchbar />
      <ImageGallery />
    </StyledApp>
  );
};
