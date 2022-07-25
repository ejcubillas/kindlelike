/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import MainStack from './src/navigation/Main';

const App = () => {
 

  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#fff',
   
  },
  
});

export default App;
