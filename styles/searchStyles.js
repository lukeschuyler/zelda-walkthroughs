import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'green',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footer: {
    flex: 1
  },
  searchSection: {
    flex: 6,
    alignItems: 'center'
  },
  loading_gif: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    width: 120
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginLeft: 20, 
    marginRight: 20, 
    marginBottom: 15,
    padding: 5,
    color: 'gray',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputHeader: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Bodoni 72 Smallcaps',
    margin: 10
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Bodoni 72 Smallcaps',
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
    height: 41,
    width: 50
  },
  sword: {
    height: 50,
    width: 50
  },
   loading_text: {
    fontSize: 20,
    marginBottom: 10
   }
});

export default styles;
