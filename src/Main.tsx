import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomTabNavigation } from './presentation/navigators/BottomTabNavigation';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  )
}
