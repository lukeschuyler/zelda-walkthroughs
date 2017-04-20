import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'darkgreen',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  footer: {
    flex: 2
  },
  searchSection: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 30, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginLeft: 20, 
    marginRight: 20, 
    marginBottom: 15,
    paddingLeft: 5, 
    paddingRight: 5,
    color: 'gray',
    backgroundColor: 'white'
  },
  inputHeader: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Party LET',
    margin: 10
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Party LET',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  button: {
    backgroundColor: 'rgba(255,255,0,.8)',
    height: 70,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  triforce: {
    height: 82,
    width: 100
  },
  sword: {
    height: 50,
    width: 50
  }
});

export default styles;
