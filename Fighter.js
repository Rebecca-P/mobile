
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { Container, Header,Title,Body, Content, Button, Text, Image } from 'native-base';
import styles from './styles'
import ButtonChoice from './Component/ButtonChoice'
import CountDown from 'react-native-countdown-component';
import AI_Choise from'./Component/AI_Choise'

export default class Fighter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      playerChoice:-1,
      playerCard:null,
      nom:'nul',
    };
    this.handlechoice=this.handlechoice.bind(this);
    this.rehandleNextsultat=this.handleNext.bind(this);
  }
  

  handleNext(){
    if(this.state.playerChoice===-1)
    {
      this.handlechoice(AI_Choise());
    }
    
    this.props.navigation.navigate('VersusAI_', {
      choixfinal_index: this.state.playerChoice,
      choixfinal: this.state.nom,
      choixfinal_image : this.state.playerCard,
  })
  } 
  

  handlechoice(evt){
    this.setState({playerChoice : evt});

    if(evt==0) 
    {
      this.setState({
        nom : 'Pierre',
        playerCard : require('./Card/rock.png')
      });
      
    }  
    if(evt==1)
    {
      this.setState({
        nom : 'Feuille',
        playerCard : require('./Card/paper.png')
      });
      
    }
    if(evt==2) 
    {  
      this.setState({
        nom : 'Ciseau',
        playerCard :require('./Card/scissors.png'),
      });
      
    }
  } 

  
  render() {
    let text_choice;
    if(this.state.nom === 'nul')
      text_choice='Vous n\'avez rien choisi'
    else
      text_choice='Vous avez choisi '+ this.state.nom;
    return (
      <View style={{justifyContent: 'space-around'}}>
        <ImageBackground source={require('./Background/choix_menu.png')} style={styles.background}>
        
          <Title>{text_choice}</Title>
          <View style={styles.contener_card}>
            <ButtonChoice
              changement={this.handlechoice}
              name="Pierre"
            />
            <ButtonChoice
              name="Feuille"
              changement={this.handlechoice}
            />
          </View>
          <CountDown
            until={5}
            onFinish={() => this.handleNext()}
            onPress={() => alert('Choissez votre combattant !')}
            timeToShow={['S']}
            timeLabels={{ s: 'S'}}
            size={20}
          />
          <View style={styles.standar_box}>
            <ButtonChoice
              name="Ciseau"
              changement={this.handlechoice}
            /> 
          </View>
          
          <Button dark  
          onPress={() => this.props.navigation.navigate('Menu_')}
          >
            <Text style={{color: 'white'}}>Quitter</Text>
        </Button>
        
        </ImageBackground>
      </View>
      
    );
  }
}

