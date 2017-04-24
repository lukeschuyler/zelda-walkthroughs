import React, { Component } from 'react';
import styles from '../styles/searchStyles.js'
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

const Loading = ({ walkthroughP, game, dungeon }) => 
  (
    <View style={styles.searchSection}>
      <Text style={styles.loading_text}>Loading...</Text>
      <Image 
        style={styles.loading_gif}
        source={require('../IMG/zelda_spin.gif')}>      
      </Image>
    </View>
  );

export default Loading
