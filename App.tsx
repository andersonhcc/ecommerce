import React from 'react';
import { StatusBar } from 'react-native';
import { Box, NativeBaseProvider } from 'native-base';
import { theme } from "./src/styles/themes/index";

import { AppRoutes } from './src/routes/app.routes';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const navigationTheme = DefaultTheme;
navigationTheme.colors.background = theme.colors.primary[100];

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor="transparent"
      />
      <Box
        flex={1}
        bg={theme.colors.primary[100]}
        safeAreaTop
      >
        <NavigationContainer theme={navigationTheme}>
          <AppRoutes />
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}

