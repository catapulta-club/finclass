import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'styled-components';

import { Container } from './styles'

const App: React.FC = () => {
  const {typography} = useTheme()
  return <Container>
    <Text style={{
      fontSize: 24,
      fontFamily: typography.bold.fontFamily,
      letterSpacing: typography.bold.letterSpacing
    }}>Hello theme</Text>
  </Container>;
};

export default App;