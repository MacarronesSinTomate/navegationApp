import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    globalMargin: {

        marginHorizontal: 20

    },

    title : {
        fontSize: 30,
        marginBottom: 10
    },

    botonGrande : {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 20
    },

    botonGrandeTexto : {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

    avatarContainer : {

        marginTop: 20,
        alignItems: 'center'

    },

    avatar : {
        width: 150,
        height: 150,
        borderRadius: 100,
    },

    menuContainer : {

        margin: 30,

    },

    menuBoton : {
        margin: 10
    },

    menuText : {
        fontSize: 20,
        textAlign: 'left'
    }

});