
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Container, Header,Footer, Content, Button, Text, Image } from 'native-base';
import styles from './styles'
import ButtonChoice from './ButtonChoice'

export default class Fighter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      playerChoice:0,
      opposantChoice:0,
      nom:'nul',
      msgResultat : 'nul',
    };
    this.handlechoice=this.handlechoice.bind(this);
    // this.resultat=this.resultat.bind(this);
  }

  // resultat(){
  //     let ai_hoice = AI_Choise();
  //     let donc = ThisistheWinner(this.state.playerChoice,ai_hoice)
  //     this.setState({msgResultat : donc});
  //     this.setState({opposantChoice : ai_hoice}); 
  // }
  
  handlechoice(evt){
    let require_;
    this.setState({playerChoice : evt});
    if(evt==0) 
    {
      this.setState({nom : 'Pierre'});
      require_= require('./Card/rock.png');
    }  
    if(evt==1)
    {
      this.setState({nom : 'Feuille'});
      require_= require('./Card/paper.png');
    }
    if(evt==2) 
    {  
      this.setState({nom : 'Ciseau'});
      require_= require('./Card/scissors.png');
    }
      
      this.props.navigation.navigate('Question_', {
        choixpotentielle: this.state.nom,
        image: require_,
        choixpotentielle_index : this.state.playerChoice,
      });
  } 

  
  render() {
    return (
      <Container >
        <Text>Choose your fighter</Text>
        <Container style={styles.contener_card}>
          <ButtonChoice
            changement={this.handlechoice}
            name="Pierre"
          />
          <ButtonChoice
            name="Feuille"
            changement={this.handlechoice}
          />
          
        </Container>
        <Container style={styles.standar_box}>
          <ButtonChoice
            name="Ciseau"
            changement={this.handlechoice}
          /> 
        </Container> 
      </Container>
    );
  }
}

