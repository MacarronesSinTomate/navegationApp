import React, { useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../screens/SettingsScreen";
import { useWindowDimensions } from "react-native";

const Stack = createStackNavigator();

export const StackSettings = ( { navigation } ) => {

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        
        if ( width < 768 ) {
            navigation.setOptions({
                headerLeft: () => (
                    <Button 
                        title="Menú"
                        onPress={ () => { navigation.toggleDrawer() } }
                    />
                )
            })
        }

    }, [])

    return (

        <Stack.Navigator>
            <Stack.Screen 
                name="SettingsScreen"
                component={ SettingsScreen }
            />
        </Stack.Navigator>

    );

}