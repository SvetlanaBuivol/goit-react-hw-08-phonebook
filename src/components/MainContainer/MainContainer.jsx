import { Container } from '@chakra-ui/react';
import { container } from 'theme';

function MainContainer({ children }) {
  return <Container sx={container}>{children}</Container>;
}

export default MainContainer;
