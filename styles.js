import {
    
    StyleSheet,
  } from 'react-native';

export default StyleSheet.create({
      contener_card:{//use in app? TEMPORAIRE
        flexDirection: 'row',
        justifyContent: 'space-around',
         alignItems:'flex-end'
      },
      card:{//use in app? TEMPORAIRE
        width: 110,
        height: 150,
      },
      
      standar_box:{//use in app? TEMPORAIRE
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

      },
      
      cardContainer: {//use in cardchoose
        width: 220,
        height: 300,
      },
      
      card_use:{//use in cardchoose
        width: 220,
        height: 300,
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity:0.5,
      },
      
      
      
    })