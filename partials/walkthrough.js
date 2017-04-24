
import React, { Component } from 'react';
import styles from '../styles/walkthroughStyles.js'
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';

const WalkthroughView = ({ walkthroughP, game, dungeon }) => 
  (
    <View style={styles.searchSection}>
      <ScrollView>
        <Text> {walkthrough} </Text>
      </ScrollView>
    </View>
  );
  


export default WalkthroughView
