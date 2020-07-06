import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import Navigation from './navigation';

export default function App() {
  return (
    <>
    <statusbar barStyle="light-content" backgroundColor="#fff"/>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </>
  );
}