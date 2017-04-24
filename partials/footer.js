import React, { Component } from 'react';
import styles from '../styles/searchStyles.js'
import {
  Text,
  View
} from 'react-native';

const Header = ({ walkthroughP, game, dungeon }) => 
  (
    <View style={styles.footer}>
      <Text style={styles.instructions}>
        Powered by ZeldaDungeon.net
      </Text>
    </View>
  );

export default Header
