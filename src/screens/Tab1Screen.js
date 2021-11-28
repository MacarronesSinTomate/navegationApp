import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log( "Tab1Screen" );
    }, [])

    return (
        <View style={ { padding: 30, flex: 1, backgroundColor: 'white' } }>
            
            <Text style={{ fontSize: 30, marginVertical: 20, borderBottomWidth: 2 }}> Iconos </Text>

            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="add-outline" />
                <TouchableIcon iconName="alarm-outline" />
                <TouchableIcon iconName="backspace-outline" />
            </View>

            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableIcon iconName="bookmarks-outline"/>
                <TouchableIcon iconName="car-sport-outline"/>
                <TouchableIcon iconName="chatbox-ellipses-outline"/>
                <TouchableIcon iconName="cellular-outline"/>
            </View>

            <View
                style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableIcon iconName="cloud-upload-outline"/>
                <TouchableIcon iconName="download-outline"/>
                <TouchableIcon iconName="document-outline"/>
                <TouchableIcon iconName="game-controller-outline"/>
            </View>

        </View>
    )
}
