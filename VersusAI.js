import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import styles from './styles'
import { Image } from 'react-native';
import { Container, Text, Button} from 'native-base';

import AI_Choise from'./AI_Choise'
import ThisistheWinner from'./ThisistheWinner'

export default class VersusAI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerChoice:this.props.navigation.getParam('choixfinal_index', 0),
            opposantChoice:0,
            nom:this.props.navigation.getParam('choixfinal', 'RIEN'),
            msgResultat : 'nul',
        };
        this.resultat=this.resultat.bind(this);
    }

    resultat(){
      let ai_hoice = AI_Choise();
      let donc = ThisistheWinner(this.state.playerChoice,ai_hoice)
      this.setState({msgResultat : donc});
      this.setState({opposantChoice : ai_hoice}); 
  }

  render() {
    return (
        <Container>
            <Button transparent
                onPress={this.resultat}
            >
                <Text>Jouer</Text>
            </Button>
            <Text>Ordi : {this.state.opposantChoice} </Text>
            <Text>Joueur : {this.state.playerChoice} ou {this.state.nom}</Text>
            <Text>{this.state.msgResultat}</Text>
        </Container>
          
    );
  }
} 

