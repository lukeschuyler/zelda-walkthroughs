
import React, { Component } from 'react';
import styles from './styles/searchStyles.js'
import WalkthroughView from './partials/walkthrough'
import SearchView from './partials/search'

import {
  AppRegistry,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

export default class Walkthroughs extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: true
    };
  }

  render() {
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

        <SearchView /> 
        
        <View style={styles.footer}>
          <Text style={styles.instructions}>
            Powered by ZeldaDungeon.net
          </Text>
        </View>
      </View>
    );
  }
}


AppRegistry.registerComponent('walkthroughs', () => Walkthroughs);
