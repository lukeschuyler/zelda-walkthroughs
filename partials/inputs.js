import React, { Component } from 'react';
import styles from '../styles/walkthroughStyles.js'
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';

const Walkthrough = ({ walkthrough, game, dungeon }) => 
  (
    <View style={styles.walkSection}>
        <View>
          <Text style={styles.walkHeader}>{game}  -  {dungeon}</Text>
        </View>
        <ScrollView style={styles.walkScroll}>
          {walkthrough.map((p, i) => {
            return <Text style={styles.walkText} key={i}> {p} </Text> 
          })} 
        </ScrollView>
    </View>
  );
  


export default Walkthrough
