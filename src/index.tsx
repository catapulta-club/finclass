import React from 'react';
//import { useTheme } from 'styled-components';
import Text from './components/Text';
import Button from './components/Button'
import { Container } from './styles'
import Separator from './components/Separator';

const App: React.FC = () => {
    return <Container>
    <Text>Hello</Text>
    <Separator height={20}/>
    <Button textType='bold' title='Assine Agora'> </Button>
  </Container>;
};

export default App;