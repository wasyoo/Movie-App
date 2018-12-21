import React, { Component } from 'react'
import {View,FlatList,Text} from 'react-native'
import {styles} from '../styles/style'

import MovieItem from './MovieItem'

const movies = [
    {
        id:1,
        name: "Inception",
        image: "http://fr.web.img3.acsta.net/c_210_280/medias/nmedia/18/72/34/14/19476654.jpg",
        year: "2010",
        rating: 3
    },
    {
        id:2,
        name: "Imitation Game",
        image: "http://fr.web.img6.acsta.net/c_215_290/o_club300a.png_0_se/pictures/15/01/09/16/14/573252.jpg",
        year: "2014",
        rating: 5
    },
    {
        id:3,
        name: "Lion",
        image: "http://fr.web.img4.acsta.net/c_210_280/pictures/17/01/25/09/36/363964.jpg",
        year: "2016",
        rating: 4
    },
    {
        id:4,
        name: "A STAR IS BORN",
        image: "http://fr.web.img6.acsta.net/c_215_290/pictures/18/09/25/14/20/0923171.jpg",
        year: "2018",
        rating: 4
    }
  ];

export default class MoviesList extends Component{
    render(){
        return (<View>
                <FlatList
                    data={movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <MovieItem movie={item}/>}
                />
        </View>)
    }
}