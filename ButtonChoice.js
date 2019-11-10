
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image 
  
} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import styles from './styles'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class ButtonChoice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      choix: props.name,
      
    };
    this.handlePlayerChoice=this.handlePlayerChoice.bind(this);
  }
  
  handlePlayerChoice(event) {
    if(this.state.choix === 'Pierre')
      this.props.changement(0); 
    if(this.state.choix === 'Feuille')
      this.props.changement(1); 
    if(this.state.choix === 'Ciseau')
      this.props.changement(2);
    event.preventDefault();
  }

  // handlePlayerChoice(event) {
  //   if(this.state.choix === 'Pierre')
  //     this.setState({choix_index : 0});
  //   if(this.state.choix === 'Feuille')
  //     this.setState({choix_index : 1}); 
  //   if(this.state.choix === 'Ciseau')
  //     this.setState({choix_index : 2});
  //   event.preventDefault();
  // }
  render() {
    let card = <Image_Picker name={this.state.choix}></Image_Picker>
      return (
      
        <Button transparent  style={styles.card}
        onPress={this.handlePlayerChoice}
        // onPress={() => this.props.navigation.navigate('CardChoose_')}
        >
          {card} 
          
      </Button>
      
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
        return  <Image style={styles.card}  source={require('./Card/rock.png')}></Image>; 
    if(nom === 'Feuille')
        return <Image style={styles.card} source={require('./Card/paper.png')}></Image>;  
    if(nom === 'Ciseau')
        return <Image style={styles.card} source={require('./Card/scissors.png')}></Image>; 
    

    return <Image style={styles.card} source={require('./Card/choice.png')}></Image>;
}


