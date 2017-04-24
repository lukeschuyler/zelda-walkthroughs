import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
      paddingTop: 10,
      marginTop: 20
    },
    walkText: {
      fontFamily: 'Bodoni 72',
      fontSize: 20
    },
    backBtn: {
      fontFamily: 'Bodoni 72',
      fontSize: 20 
    },
    button: {
      backgroundColor: 'rgba(255,255,0,.8)',
      height: 40,
      width: 70,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
});

export default styles;
