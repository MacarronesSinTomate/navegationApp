import React, { useEffect } from 'react'
import { Button, Text, useWindowDimensions, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

export const Pagina1Screen = ( { navigation } ) => {

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

                headerRight: () => (
                    <TouchableOpacity 
                        style={{

                        }}
                        onPress={ () => { navigation.navigate( "StackSettings" ) } }
                    >
                        <Text style={ { fontSize: 22, marginRight: 7 } }> ⚙️ </Text>
                    </TouchableOpacity>
                )
            })
        }

    }, [])

    return (
        <View style={ styles.globalMargin }>

            <Text style={ styles.title }> Pagina1Screen </Text>

            <Button 
                title="Ir a pagina 2"
                onPress={ () => navigation.navigate( "Pagina2Screen" ) }
            />

            <Text> Navegar con argumentos </Text>

            <View style={ { flexDirection: 'row' } }>

                <TouchableOpacity
                    style={ { 
                        ...styles.botonGrande, 
                        backgroundColor: '#5856D6' 
                    } }
                    onPress={ () => navigation.navigate( 'PersonaScreen', { 
                        id: 1,
                        nombre: 'Pedro'
                        } ) }
                >
                    <Text style={ styles.botonGrandeTexto }>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={ () => navigation.navigate( 'PersonaScreen', { 
                        id: 2,
                        nombre: 'María'
                    } ) }
                >
                    <Text style={ styles.botonGrandeTexto }>Maria</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
