import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';
import { StackNavigation } from './src/navegation/StackNavigation';
import { MenuLateralBasico } from './src/navegation/MenuLateralBasico';
import { MenuLateral } from './src/navegation/MenuLateral';

const App = () => {
    return (
        <NavigationContainer>

            <MenuLateral />
            {/* <MenuLateralBasico /> */}
            {/* <StackNavigation /> */}

        </NavigationContainer>
    )
}

export default App;