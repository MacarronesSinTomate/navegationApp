import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colores } from '../theme/appTheme';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={ ( { route } ) => ({
                tabBarStyle:{
                    elevation: 0
                },
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle:{
                    height:5,
                    backgroundColor: colores.primary
                },
                tabBarIcon: ( { color } ) => {

                    let iconName = "";

                    switch ( route.name ) {

                        case "ChatScreen":
                            iconName = "Ch";
                            break;
                        case "ContactsScreen":
                            iconName = "Co";
                            break;
                        case "AlbumsScreen":
                            iconName = "Al";
                            break;

                    }

                    return (
                        <Text
                            style={{
                                color: color
                            }}
                        >
                            { iconName }
                        </Text>
                    );
                }
            })}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
        >
            <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ ChatScreen} />
            <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts' }} component={ ContactsScreen } />
            <Tab.Screen name="AlbumsScreen" options={{ title: 'Album' }} component={ AlbumsScreen } />
        </Tab.Navigator>
    );
}