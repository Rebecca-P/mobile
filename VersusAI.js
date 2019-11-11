import React, { Component } from 'react';
import {
  View,
  ImageBackground
} from 'react-native';
import styles from './styles'
import { Image } from 'react-native';
import { Container, Text, Button} from 'native-base';

import CountDown from 'react-native-countdown-component';
import CardFlip from 'react-native-card-flip';


import AI_Choise from'./Component/AI_Choise'
import ThisistheWinner from'./Component/ThisistheWinner'

export default class VersusAI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerChoice:this.props.navigation.getParam('choixfinal_index', 0),
            nom:this.props.navigation.getParam('choixfinal', 'RIEN'),
            opposantChoice:0,
            nom_opposantChoice:'nul',
            msgResultat : 'nul',

            useless : true,
        };
        this.resultat=this.resultat.bind(this);
    }

    resultat(){
      let ai_hoice = AI_Choise();
      let donc = ThisistheWinner(this.state.playerChoice,ai_hoice)

      this.setState({msgResultat : donc});
      this.setState({opposantChoice : ai_hoice}); 
      if(ai_hoice==0) 
        {
            this.setState({nom_opposantChoice : 'Pierre',});
        }  
        if(ai_hoice==1)
        {
            this.setState({nom_opposantChoice : 'Feuille'});
        }
        if(ai_hoice==2) 
        {  
            this.setState({nom_opposantChoice : 'Ciseau'});
        }
    }

  render() {
    let card_Me = <Image_Picker name={this.state.nom}></Image_Picker>
    let verso = <Image_Picker name='verso'></Image_Picker>
    let card_Adv = <Image_Picker name={this.state.nom_opposantChoice}></Image_Picker>
    let win = <Image style={styles.msg} source={require('./emote/win.png')}></Image>;
    let lose = <Image style={styles.msg} source={require('./emote/lose.png')}></Image>;
    let match_nul = <Image style={styles.msg} source={require('./emote/match_nul.png')}></Image>
    let msg_Me;
    let msg_Adv;
    if(this.state.msgResultat === 'You win')
    {
        msg_Me = win;
        msg_Adv = lose;
    }
    if(this.state.msgResultat === 'You lose')
    {
        msg_Me = lose;
        msg_Adv = win;
    }
    if(this.state.msgResultat === 'No one win')
    {
        msg_Me = match_nul;
        msg_Adv = match_nul;
    }
    return (
        <View>
            <ImageBackground source={require('./Background/Vs.png')} style={styles.background}>
            <View style={styles.backgroun_vs}>       
                <View style={styles.standar_box} >
                    <CardFlip style={styles.cardContainer} ref={(carde) => this.carde = carde} >
                        <View style={styles.card_use}>
                            {verso}
                        </View>
                        <View style={styles.card_use}>
                            {card_Adv}
                        </View>
                    </CardFlip>
                    <View>
                        <Text style={{color: 'white'}}>Opponent</Text>
                        {msg_Adv}
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>

                    <CountDown
                        until={3}
                        onFinish={() => {this.resultat(); this.card.flip(); this.carde.flip() ; this.setState({useless : false})}}
                        timeToShow={['S']}
                        timeLabels={{ s: null}}
                        size={40}
                        digitStyle={styles.counter}
                    />
                    <Button  disabled={this.state.useless}
                    onPress={() => this.props.navigation.navigate('Menu_')}>
                        <Text style={{color: 'white'}}>
                            Menu
                        </Text>
                    </Button> 
                </View>
                <View style={styles.standar_box}>
                    <View>
                        {msg_Me}
                        <Text style={{color: 'white'}}>Me</Text>
                    </View>
                    
                    <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
                        <View style={styles.card_use}>
                            {verso}
                        </View>
                        <View style={styles.card_use}>
                            {card_Me}
                        </View>
                    </CardFlip>
                </View>
            </View>
            </ImageBackground>
        </View>
        
          
    );
  }
} 

function Image_Picker(props)
{
    const nom = props.name;
    if(nom === 'Pierre')
        return  <Image style={styles.card_use}  source={require('./Card/rock.png')}></Image>; 
    if(nom === 'Feuille')
        return <Image style={styles.card_use} source={require('./Card/paper.png')}></Image>;  
    if(nom === 'Ciseau')
        return <Image style={styles.card_use} source={require('./Card/scissors.png')}></Image>; 
    return <Image style={styles.card_use} source={require('./Card/choice.png')}></Image>;
}
