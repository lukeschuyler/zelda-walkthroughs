
import React, { Component } from 'react';
import styles from '../styles/walkthroughStyles.js'
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

const Walkthrough = ({ walkthrough, game, dungeon, back }) => 
  (
    <View style={styles.walkSection}>
         <TouchableHighlight style={styles.button} onPress={back}>
            <Text style={styles.backBtn}> Back </Text>
          </TouchableHighlight>
          <Text style={styles.walkHeader}>{game}  -  {dungeon}</Text>
        <ScrollView style={styles.walkScroll}>
          {walkthrough.map((p, i) => {
            return <Text style={styles.walkText} key={i}> {p} </Text> 
          })} 
        </ScrollView>
    </View>
  );
  


export default Walkthrough
