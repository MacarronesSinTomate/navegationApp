import React from 'react';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigation } from './StackNavigation';
import { BorderlessButton } from 'react-native-gesture-handler';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import { TopTabNavigation } from './TopTabNavigation';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigation = () => {



    return (
        <Tab.Navigator

            barStyle={{
                backgroundColor: colores.primary,
                margin: 10,
                overflow: 'hidden',
                borderRadius: 30
            }}

            screenOptions={ ( { route } ) => ({

                tabBarActiveTintColor: colores.primary,

                tabBarLabelStyle:{
                    fontSize: 15
                },

                tabBarIcon: ( { color, focused } ) => {

                    let iconName = "";
                    switch ( route.name ) {

                        case 'Tab1Screen':
                            iconName = "T1"
                            break;
                        case 'Tab2Screen':
                            iconName = "T2"
                            break;
                        case 'StackNavigation':
                            iconName = "St"
                            break;
                        default:
                            iconName = "BR";
                            break;

                    }

                    return(
                        <Text
                            style={{
                                color: color
                            }}
                        >
                            { iconName }
                        </Text>
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