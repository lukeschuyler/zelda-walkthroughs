
import React, { Component } from 'react';
import styles from './styles/searchStyles.js'
import WalkthroughView from './partials/walkthrough'
import SearchView from './partials/search'
import Header from './partials/header'
import Footer from './partials/footer'

import {
  AppRegistry,
  View
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

        <Header />

        <SearchView /> 
        
        <Footer />

      </View>
    );
  }
}


AppRegistry.registerComponent('walkthroughs', () => Walkthroughs);
