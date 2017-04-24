import React, { Component } from 'react';
import styles from '../styles/searchStyles.js'
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';

const Inputs = ({ game, dungeon, onChangeGame, onChangeDungeon, notFound, search }) => 
  (
    <View style={styles.searchSection}>
      <Text>
        {notFound}
      </Text>
      <Text style={styles.inputHeader}>
        Game
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeGame}
        value={game}
      />
      <Text style={styles.inputHeader}>
        Dungeon
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeDungeon}
        value= {dungeon}
      />
     <TouchableHighlight style={styles.button} onPress={search}>
        <Image
          style={styles.sword}
          source={require('../IMG/mastersword.png')}
        />
      </TouchableHighlight>
    </View>
  );
  


export default Inputs
