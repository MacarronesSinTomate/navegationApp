import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const TouchableIcon = ( { iconName } ) => {
    
    const { changeFavoriteicon } = useContext( AuthContext )

    return (
        <TouchableOpacity
            onPress={ () => changeFavoriteicon( iconName ) }
        >
            <Icon style={ styles.iconsScreen } name={ iconName } size={40} color="#900" />
        </TouchableOpacity>
    )
}
