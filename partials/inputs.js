import React, { Component } from 'react';
import styles from '../styles/searchStyles.js'
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';

const Inputs = ({ game, dungeon, onChangeGame, onChangeDungeon, notFound, search }) => 
  (
    <KeyboardAvoidingView behavior="padding" style={styles.searchSection}>
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
    </KeyboardAvoidingView>
  );
  


export default Inputs
