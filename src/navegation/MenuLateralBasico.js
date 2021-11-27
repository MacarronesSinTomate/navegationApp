import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { StackNavigation } from './StackNavigation';
import { StackSettings } from './StackSettings';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width, height } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: ( width > 768 ) ? "permanent" : "front" ,
            }}
        >
            <Drawer.Screen name="StackNavigation" options={{ headerShown: false, title: 'Home' }} component={ StackNavigation } />
            <Drawer.Screen name="StackSettings"  options={{ headerShown: false, title: 'Settings' }} component={ StackSettings } />
        </Drawer.Navigator>
  );
}