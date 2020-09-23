import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from '@shopify/restyle';
import {theme, Text, Box} from './app/theme';

declare const global: {HermesInternal: null | {}};

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 200});
  }, []);

  return (
    <ThemeProvider {...{theme}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Box padding="l" backgroundColor="white" height="auto" flex={1}>
          <Box
            marginVertical="l"
            backgroundColor="primary"
            padding="m"
            borderRadius="xl">
            <Text variant="hero">Welcome to Fuel</Text>
          </Box>
          <Text variant="default">
            An opinionated starter kit for React Native
          </Text>
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
