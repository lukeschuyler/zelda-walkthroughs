import React, { Component } from 'react';
import styles from '../styles/searchStyles.js'
import WalkthroughView from './walkthrough'
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
      searchview: true,
      loading: false,
      walkview: false,
      notFound: false,
      walkthrough: ''
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
    let notFound = this.state.notFound ? <Text>Not Found! Please Try Again</Text> : ''
    if(this.state.searchview) {
      return (
        <View style={styles.searchSection}>
          <Text>
            {notFound}
          </Text>
          <Text style={styles.inputHeader}>
            Game
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={ (game) => { this.setState({ game }) } }
            value={this.state.game}
          />
          <Text style={styles.inputHeader}>
            Dungeon
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={ (dungeon) => { this.setState({ dungeon }) } }
            value= {this.state.dungeon}
          />
         <TouchableHighlight style={styles.button} onPress={this.search}>
            <Image
              style={styles.sword}
              source={require('../IMG/mastersword.png')}
            />
          </TouchableHighlight>
        </View>
      );
    } else if(this.state.loading) {
        return (
          <View style={styles.searchSection}>
            <Text>Loading...</Text>
          </View>
        );     
    } else if(this.state.walkview) {
      return (
        <View style={styles.searchSection}>
          <ScrollView>
            { this.state.walkthrough.map((p, i) => {
              return <Text key={i}> {p} </Text> 
            })} 
          </ScrollView>
        </View>
      );
    }
  }
}
