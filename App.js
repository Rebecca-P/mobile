
import React, { Component } from 'react';

import { Container, Header,Footer, Content, Button, Text, Image } from 'native-base';
import styles from './styles'
import Fighter from './Fighter'
import Menu from './Menu'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import VersusAI from './VersusAI';


const MainNavigator = createStackNavigator(
  {
    Menu_: {screen: Menu},
    Fighter_: {screen: Fighter},
    VersusAI_:{screen:VersusAI}
  },
  {
    headerMode: 'none',
    initialRouteName: 'Menu_',
  }
);

const Game = createAppContainer(MainNavigator);

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
     nothing : 'nul',
    };

  }


  
  render() {
    return (
      <Game/>
    );
  }
}

