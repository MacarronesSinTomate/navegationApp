import { StyleSheet } from "react-native";

export const colores = {

    primary: '#5856D6',

}

export const styles = StyleSheet.create({
    
    globalMargin: {

        marginTop: 20,
        marginHorizontal: 20

    },

    title : {
        fontSize: 30,
        marginBottom: 10
    },

    secundary_title : {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    },

    botonGrande : {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 20,
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
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    menuText : {
        fontSize: 20,
        textAlign: 'left'
    },

    iconsScreen : {

        margin: 5

    }

});