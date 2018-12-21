import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './styles/style'
import SearchBar from './component/SearchBar'
import MoviesList from './component/MoviesList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContaine}>
        <SearchBar />
        <MoviesList />
      </View>
    );
  }
}
