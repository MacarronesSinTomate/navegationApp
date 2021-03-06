import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pagina2Screen = ( { navigation } ) => {

    useEffect(() => {
        
        navigation.setOptions({
            title: 'Página 2'
        });

    }, [])
    
    return (
        <View style={ styles.globalMargin }>

            <Text style={ styles.title }> Pagina2Screen </Text>

            <Button 
                title="Ir a pagina 3"
                onPress={ () => navigation.navigate( "Pagina3Screen" ) }
            />

        </View>
    )
}
