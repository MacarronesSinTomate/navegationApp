import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { StackNavigation } from './StackNavigation';
import { StackSettings } from './StackSettings';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width, height } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: ( width > 768 ) ? "permanent" : "front" ,
                headerShown: false,
            }}
            drawerContent={ ( props ) => <MenuInterno { ...props } /> }
        >
            <Drawer.Screen name="StackNavigation" component={ StackNavigation } />
            <Drawer.Screen name="StackSettings"  component={ StackSettings } />
        </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation } ) => {



    return (
        
        <DrawerContentScrollView>

            {/* CONTENEDOR DEL AVATAR */}
            <View style={ styles.avatarContainer }>

                <Image 
                    source={ { 
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                     } }
                     style={ styles.avatar }
                />

            </View>

            {/* OPCIONES DE MENU */}
            <View style={ styles.menuContainer }>

                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate( "StackNavigation" ) }
                >
                    <Text style={ styles.menuText }> Navegation </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate( "StackSettings" ) }
                >
                    <Text style={ styles.menuText }> Settings </Text>
                </TouchableOpacity>
                     
            </View>

        </DrawerContentScrollView>

    );

}