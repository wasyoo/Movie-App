import React, { Component } from 'react'
import { View,Text, Image } from 'react-native'
import { styles } from '../styles/style'
import MovieRating from '../component/RatingStars'
export default class MovieList extends Component {
    render(){
        const movie = this.props.movie
        return (<View style={styles.movieItem}>
            <Image source={{uri : movie.image}} style={styles.imageCover}/>
            <View style={styles.infoMovie}>
                <MovieRating rating={movie.rating}/>
                <Text style={styles.titleMovie}>{movie.name}</Text>
                <Text>{movie.year}</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</Text>
            </View>
            
            
        </View>)
    }
}