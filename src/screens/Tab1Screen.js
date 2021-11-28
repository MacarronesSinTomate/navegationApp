import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log( "Tab1Screen" );
    }, [])

    return (
        <View style={ { ...styles.globalMargin } }>
            
            <Text style={{ fontSize: 30, marginVertical: 20, borderBottomWidth: 2 }}> Iconos </Text>

            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Icon style={ styles.iconsScreen } name="airplane-outline" size={40} color="#900" />
                <Icon style={ styles.iconsScreen } name="add-outline" size={40} color="#900" />
                <Icon style={ styles.iconsScreen } name="alarm-outline" size={40} color="#900" />
                <Icon style={ styles.iconsScreen } name="backspace-outline" size={40} color="#900" />
            </View>

            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Icon style={ styles.iconsScreen } name="bookmarks-outline" size={40} color="#900" />
                <Icon style={ styles.iconsScreen } name="car-sport-outline" size={40} color="#900" />
                <Icon style={ styles.iconsScreen } name="chatbox-ellipses-outline" size={40} color="#900" />
                <Icon style={ styles.iconsScreen } name="cellular-outline" size={40} color="#900" />
            </View>

            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Icon style={ styles.iconsScreen } name="cloud-upload-outline" size={40} color="#900" />
                <Icon style={ styles.iconsScreen } name="download-outline" size={40} color="#900" />
                <Icon style={ styles.iconsScreen } name="document-outline" size={40} color="#900" />
                <Icon style={ styles.iconsScreen } name="game-controller-outline" size={40} color="#900" />
            </View>

        </View>
    )
}
