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
    flex: .5,
    justifyContent: 'center'
  },
  searchSection: {
    flex: 6,
    alignItems: 'center'
  },
  loading_gif: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200
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
    marginBottom: 10,
    fontFamily: 'Bodoni 72 Smallcaps',
   },
   loadingSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
   },
   walkSection: {
    flex: 6,
    alignItems: 'center',
   },
   walkHeader: {
    fontFamily: 'Bodoni 72 Smallcaps',
    fontSize: 20
   },
    walkScroll: {
      backgroundColor: 'white',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10
    },
    walkText: {
      fontFamily: 'Bodoni 72',
      fontSize: 15
    }
});

export default styles;
