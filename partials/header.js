import React, { Component } from 'react';
import styles from '../styles/searchStyles.js'
import {
  Text,
  View,
  Image
} from 'react-native';

const Header = ({ walkthroughP, game, dungeon }) => 
  (
    <View style={styles.header}>
        <Image
          style={styles.triforce}
          source={require('../IMG/1200px-Triforce.svg.png')}
        />
      <Text style={styles.welcome}>
        Zelda Walkthrough Finder
      </Text>
    </View>
  );

export default Header
