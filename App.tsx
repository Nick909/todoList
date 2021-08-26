import React from 'react';

import { 
  StyleSheet, 
  View, 
  Platform, 
  UIManager
} from 'react-native';

import { useFonts, Lato_300Light, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import Store from './src/redux/app';

import { theme } from './src/global/styles/styles';

import { Home } from './src/screens/Home';
import { AppRoutes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Merriweather_700Bold,
  });

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Provider store={Store} >
        <StatusBar 
          style={'light'}
          backgroundColor={theme.colors.black}
          translucent

        />
        <AppRoutes />

      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grayW,
  },
});
