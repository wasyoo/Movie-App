import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    textinput:{
        padding:10,
        borderColor:'#000',
        borderWidth: 1, 
    },
    appContaine:{
        paddingTop:50,
        paddingLeft: 20,
        paddingRight: 20
    },
    imageCover:{
        flex:1,
        width:150,
        height:200
    },
    infoMovie:{
        flex:1,
        paddingLeft:10,
        paddingTop:10,
        backgroundColor:'#eee'
    },
    titleMovie:{
        fontSize:20
    },
    movieItem:{
        flexDirection:"row",
        marginTop:10,
        marginBottom:10,
        height:200
    },
    movieRating:{
        flexDirection:"row"
    },
    stars:{
        fontSize:20
    }
})