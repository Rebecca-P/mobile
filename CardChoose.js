import CardFlip from 'react-native-card-flip';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image, 
  TouchableOpacity,
  Text, 
} from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import styles from './styles'
export default class CardChoose extends Component {

  constructor(props) {
    super(props);
    this.state = {
      choix: this.props.navigation.getParam('choixpotentielle', 'RIEN'),
      //choix:props.name
    };
  }
 
  render() {
     let card = <Image_Picker name={this.state.choix}></Image_Picker>
     let verso = <Image_Picker name='verso'></Image_Picker>
      return (
      <Container>
        <Text>{this.state.choix}</Text>
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
            <TouchableOpacity style={styles.card_use} onPress={() => this.card.flip()} >
                {card}
            </TouchableOpacity>
            <TouchableOpacity style={styles.card_use} onPress={() => this.card.flip()} >
                {verso}
            </TouchableOpacity>
        </CardFlip>
      </Container>
        
      
    );
  }
}

function Image_Picker(props)
{
    const nom = props.name;
    const stone = './Card/rock.png';
    const paper = './Card/paper.png';
    const scissors = './Card/scissors.png';
    const verso = './Card/choice.png';

    if(nom === 'Pierre')
        return  <Image style={styles.card_use}  source={require('./Card/rock.png')}></Image>; 
    if(nom === 'Feuille')
        return <Image style={styles.card_use} source={require('./Card/paper.png')}></Image>;  
    if(nom === 'Ciseau')
        return <Image style={styles.card_use} source={require('./Card/scissors.png')}></Image>; 
    return <Image style={styles.card_use} source={require('./Card/choice.png')}></Image>;
}