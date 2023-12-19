import { BallTriangle } from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Loader = () => {
  return (
    <StyledLoader>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </StyledLoader>
  );
};
