import React, { Component } from 'react';
import styles from '../styles/searchStyles.js'
import Walkthrough from './walkthrough'
import Loading from './loading'
import Inputs from './inputs'
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';

export default class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      game: '', 
      dungeon: '',
      walkthrough: '',
      searchview: true,
      loading: false,
      walkview: false,
      notFound: false
    };
    this.search = this.search.bind(this)
  }

  search() {
    this.setState({ loading: true, searchview: false })
    let game = this.state.game.split(' ').join('-')
    let dungeon = this.state.dungeon.split(' ').join('-')
    fetch(`http://localhost:8080/${game}/${dungeon}`)
      .then(response => response.json())
      .then(json => {
        if (json.length <= 0) {
          this.setState({searchview: true, loading: false, notFound: true});
        } else  {
          this.setState({walkthrough: json, searchview: false,  walkview: true, loading: false});
        }
      })
      .catch((error) => {
        this.setState({searchview: true, loading: false, notFound: true});
      });  
    }

  render() {
    let notFound = this.state.notFound ? <Text style={styles.notFound}>Not Found! Please Try Again</Text> : ''
    if(this.state.searchview) {
      return (
        <Inputs 
          game={this.state.game}
          dungeon={this.state.dungeon}
          onChangeGame={ (game) => { this.setState({ game }) } }
          onChangeDungeon={ (dungeon) => { this.setState({ dungeon }) } }
          notFound={notFound}
          search={this.search}
        />
      );
    } else if(this.state.loading) {
        return (
          <Loading />
        );     
    } else if(this.state.walkview) {
      return (
        <Walkthrough 
          walkthrough={this.state.walkthrough}
          game={this.state.game}
          dungeon={this.state.dungeon}
          back={() => { this.setState({
            game: '', 
            dungeon: '',
            walkthrough: '',
            searchview: true,
            loading: false,
            walkview: false,
            notFound: false
          })}}
        />
      );
    }
  }
}
