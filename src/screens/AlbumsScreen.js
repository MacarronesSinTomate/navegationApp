import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

export const AlbumsScreen = () => {

    const { logout, authState } = useContext( AuthContext );

    return (
<View
            style={{
                paddingTop: 30,
                alignItems: 'center'
            }}
        >
            <Text style={{ fontSize: 30, margin: 20 }}> Album Screen </Text>

            {
                ( authState.isLoggedIn )

                &&

                (

                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            width: 100,
                            height: 30,
                            borderRadius: 10,
                            backgroundColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={ logout }
                    >

                        <Text style={{ color: 'white', fontWeight: 'bold' }}> LOGOUT </Text>

                    </TouchableOpacity>

                )

            }

        </View>
    )
    
}
