
import React, { Component } from 'react';
import styles from './styles/searchStyles.js'
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

export default class nativereact extends Component {
  constructor(props) {
    super(props);
    this.state = { game: '', dungeon: '' };
    this.search = this.search.bind(this)
  }

  search() {
    let game = this.state.game.split(' ').join('-')
    let dungeon = this.state.dungeon.split(' ').join('-')
    fetch(`http://localhost:8080/${game}/${dungeon}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson.walkthrough;
      })
      .catch((error) => {
        console.error(error);
      });  
    }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Image
              style={styles.triforce}
              source={require('./IMG/1200px-Triforce.svg.png')}
            />
          <Text style={styles.welcome}>
            Zelda Walkthrough Finder
          </Text>
        </View>
        <View style={styles.searchSection}>
          <Text style={styles.inputHeader}>
            Game
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(game) => this.setState({game})}
            value={this.state.game}
          />
          <Text style={styles.inputHeader}>
            Dungeon
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(dungeon) => this.setState({dungeon})}
            value={this.state.dungeon}
          />
         <TouchableHighlight style={styles.button} onPress={this.search}>
            <Image
              style={styles.sword}
              source={require('./IMG/mastersword.png')}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.footer}>
          <Text style={styles.instructions}>
            Powered by ZeldaDungeon.net
          </Text>
        </View>
      </View>
    );
  }
}


AppRegistry.registerComponent('walkthroughs', () => nativereact);
