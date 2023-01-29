import React from 'react';
import { Box, NativeBaseProvider } from 'native-base';
import { theme } from "./src/styles/themes/index";

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box
        flex={1}
        bg={theme.colors.primary[100]}
      >
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}

