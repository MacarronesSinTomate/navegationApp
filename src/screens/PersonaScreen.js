import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const PersonaScreen = ( { navigation, route } ) => {
    
    const params = route.params;

    useEffect(() => {
        
        navigation.setOptions({

            title: params.nombre

        });

    }, [])

    return (
        <View style={ styles.globalMargin }>

            <Text style={ styles.title}>{ JSON.stringify( params, "", 2 ) }</Text>

            <Button
                title="Volver"
                onPress={ () => navigation.navigate( "Pagina1Screen" ) }
            />

        </View>
    )
}
