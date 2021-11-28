import React, { useEffect } from 'react'
import { Button, Text, useWindowDimensions, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
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

            <Text style={ styles.secundary_title }> Navegar con argumentos </Text>

            <View style={ { flexDirection: 'row' } }>

                <TouchableOpacity
                    style={ { 
                        ...styles.botonGrande, 
                        backgroundColor: '#5856D6',
                    } }
                    onPress={ () => navigation.navigate( 'PersonaScreen', { 
                        id: 1,
                        nombre: 'Pedro'
                        } ) }
                >
                    <Icon style={ { margin: 10 } } name="person-outline" size={30} color="black"/>
                    <Text style={ styles.botonGrandeTexto }>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.botonGrande }
                    onPress={ () => navigation.navigate( 'PersonaScreen', { 
                        id: 2,
                        nombre: 'María'
                    } ) }
                >
                    <Icon style={ { margin: 10 } } name="person-outline" size={30} color="black"/>
                    <Text style={ styles.botonGrandeTexto }>Maria</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
