import React from 'react';
import { StyleSheet, View,TextInput } from 'react-native';
import {styles} from '../styles/style'

export default class SearchBar extends React.Component{
    render(){
        return (<View>
            <TextInput style={styles.textinput} placeholder="Type movie name to search"/>
        </View>)
    }
}

