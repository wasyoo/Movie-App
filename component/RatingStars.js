import React, { Component } from 'react'
import { Text,View } from 'react-native'
import { styles } from '../styles/style'

export default class MovieRating extends Component{
    render(){
        return (
            <View style={styles.movieRating}>
                {Array(Number(this.props.rating))
                .fill(<Text style={[styles.stars, { color: "#ffd700" }]}>★</Text>)
                .concat(Array(5).fill(<Text style={[styles.stars, { color: "#ababab" }]}>★</Text>))
                .slice(0, 5)}
            </View>
            
        )
    }
}