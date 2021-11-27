import React, { useEffect } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

export const SettingsScreen = ( { navigation } ) => {

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        
        if ( width < 768 ) {
            navigation.setOptions({
                headerLeft: () => (
                    <TouchableOpacity 
                        style={{
                            marginLeft: 10, 
                            marginRight: 10, 
                            width: 60,
                            height: 35,
                            backgroundColor: 'red',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={ () => { navigation.toggleDrawer() } }
                    >
                        <Text style={ { fontSize: 15, color: 'white', fontWeight: 'bold' } }> Menu </Text>
                    </TouchableOpacity>
                ),
                    
            });
        }

    }, []);


    return (
        <View style={ styles.globalMargin }>
            
            <Text 
                style={{
                    marginTop: 20,
                    fontSize: 30
                }}
            > 
                Settings Screen 
            </Text>

            <TouchableOpacity
                style={{ padding: 10, borderRadius: 10, backgroundColor: 'red', marginTop: 20 }}
                onPress={ () => navigation.navigate( "StackNavigation" ) }
            >
                <Text> { "<- Volver al Stack Principal" } </Text>
            </TouchableOpacity>

        </View>
    )
}
