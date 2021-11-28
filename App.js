import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';
import { StackNavigation } from './src/navegation/StackNavigation';
import { MenuLateralBasico } from './src/navegation/MenuLateralBasico';
import { MenuLateral } from './src/navegation/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
    return (
        <NavigationContainer>

            <AppState>

                <MenuLateral />
                {/* <MenuLateralBasico /> */}
                {/* <StackNavigation /> */}
                
            </AppState>

        </NavigationContainer>
    )
}

const AppState = ( { children } ) => {

    return (
        <AuthProvider >
            { children }
        </AuthProvider>
    );

}

export default App;