import {
    
    StyleSheet,
  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
      logo:{
        width: 200,
        height: 200,
      },
      background:{
        width: '100%', height: '100%' , justifyContent: 'center',
        alignItems: 'center',
        alignContent : 'center',
      },
      
      contener_card:{//use in app? TEMPORAIRE
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'flex-end'
      },
      counter :{
        backgroundColor: '#FFFFFF', 
        borderWidth: 2, 
        borderColor: '#5465FF'
      },
      card:{//use in app? TEMPORAIRE
        width: 110,
        height: 150,
      },
      standar_box:{//use in app? TEMPORAIRE
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent : 'center',
      },
      msg: {//use in Versus
        width: 150,
        height: 50,
      },
      
      cardContainer: {//use in Versus
        width: 110,
        height: 150,
      },
      
      card_use:{//use in Versus
        width: 110,
        height: 150,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity:0.5,
      },
      
      
      
    })