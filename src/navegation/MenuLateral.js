import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { StackNavigation } from './StackNavigation';
import { StackSettings } from './StackSettings';
import { BottomTabNavigation } from './BottomTabNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

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
            initialRouteName="BottomTabNavigation"
        >
            <Drawer.Screen name="StackNavigation" component={ StackNavigation } />
            <Drawer.Screen name="StackSettings"  component={ StackSettings } />
            <Drawer.Screen name="BottomTabNavigation"  component={ BottomTabNavigation } />

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

                {/* HOME */}
                {/* <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate( "StackNavigation" ) }
                >
                    <Text style={ styles.menuText }> Navegation </Text>
                </TouchableOpacity> */}

                {/* TabNavigation */}
                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate( "BottomTabNavigation" ) }
                >
                    <Icon style={{ marginRight: 10 }} name="albums-outline" size={25} color="black"/>
                    <Text style={ styles.menuText }> TabNavigation </Text>
                </TouchableOpacity>

                {/* SETTINGS */}
                <TouchableOpacity 
                    style={ styles.menuBoton }
                    onPress={ () => navigation.navigate( "StackSettings" ) }
                >
                    <Icon style={{ marginRight: 10 }} name="cog-outline" size={25} color="black"/>
                    <Text style={ styles.menuText }> Settings </Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>

    );

}