import React, { useContext, useEffect } from 'react'
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme'

export const SettingsScreen = ( { navigation } ) => {

    const { width, height } = useWindowDimensions();

    const { authState } = useContext( AuthContext )

    useEffect(() => {
        
        if ( width < 768 ) {
            navigation.setOptions({
                headerLeft: () => (
                    <TouchableOpacity 
                        style={{
                            marginLeft: 10, 
                            marginRight: 10, 
                            width: 40,
                            height: 35,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={ () => { navigation.toggleDrawer() } }
                    >
                        <Icon name="menu-outline" size={30} color="black"/>
                    </TouchableOpacity>
                ),
            })
        }

    }, []);


    return (
        <View style={ { ...styles.globalMargin, alignItems: 'center' } }>
            
            <Text style={ styles.title }> Settings Screen </Text>
            <Text style={ { fontSize: 20 } }> { JSON.stringify( authState, "", 4 ) } </Text>

            {
                authState.favoriteIcon && <Icon name={ authState.favoriteIcon } size={50} color="black"/>
            }

            <TouchableOpacity
                style={{ padding: 10, borderRadius: 10, backgroundColor: 'red', marginTop: 20 }}
                onPress={ () => navigation.navigate( "BottomTabNavigation" ) }
            >
                <Text> { "<- Volver al Stack Principal" } </Text>
            </TouchableOpacity>

        </View>
    )
}
