import React, { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../screens/SettingsScreen";
import { Button, TouchableOpacity, useWindowDimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

export const StackSettings = ( { navigation } ) => {

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        


    }, [])

    return (

        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    
                },
                headerTitleAlign: 'center',
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen 
                name="SettingsScreen"
                component={ SettingsScreen }
            />
        </Stack.Navigator>

    );

}