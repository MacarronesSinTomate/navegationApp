import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { TopTabNavigation } from './TopTabNavigation';
import { StackNavigation } from './StackNavigation';
import { BorderlessButton } from 'react-native-gesture-handler';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigation = () => {

    const [ backColor, setBackColor ] = useState( colores.primary );

    return (
        <Tab.Navigator

            barStyle={{
                backgroundColor: colores.primary,
                margin: 10,
                overflow: 'hidden',
                borderRadius: 30,
            }}

            shifting={ true }

            screenOptions={ ( { route } ) => ({

                tabBarLabelStyle:{
                    fontSize: 15,
                },

                tabBarIcon: ( { color, focused } ) => {

                    let iconName = "";
                    switch ( route.name ) {

                        case 'Tab1Screen':
                            iconName = "add-outline"
                            break;
                        case 'TopTabNavigation':
                            iconName = "tablet-landscape-outline"
                            break;
                        case 'StackNavigation':
                            iconName = "file-tray-stacked-outline"
                            break;
                        default:
                            iconName = "";
                            break;

                    }

                    return(
                        <Icon name={ iconName } size={20} color={ color } />
                    )
                }
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1', tabBarIcon: ( props ) => seticon( props )  }} component={ Tab1Screen } /> */}
            <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={ Tab1Screen } />
            <Tab.Screen name="TopTabNavigation" options={{ title: 'TT' }} component={ TopTabNavigation } />
            <Tab.Screen name="StackNavigation" options={{ title: 'Stack' }} component={ StackNavigation } />
        </Tab.Navigator>
    );
}

const seticon = ( props ) => {

    return(
        <Text
            style={{
                color: props.color
            }}
        >
            T1
        </Text>
    )

}