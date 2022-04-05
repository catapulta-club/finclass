import React from 'react';
//import { useTheme } from 'styled-components';
import Text from './components/Text';
import Button from './components/Button'
import { Container } from './styles'

const App: React.FC = () => {
    return <Container>
    <Text>Hello</Text>
    <Button> Press Me</Button>
  </Container>;
};

export default App;