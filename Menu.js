
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  BackHandler,
  Image,
  ImageBackground
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon , Button} from 'native-base';
import styles from './styles'

export default class Menu_ extends Component {
  
  constructor(props) {
    super(props);
    
  }
 

  render() {
    console.disableYellowBox = true;
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.standar_box}>
        <ImageBackground source={require('./Background/choix_menu.png')} style={styles.background}>
        <Image style={styles.logo}  source={require('./Background/logo.png')}></Image>
          <List style={styles.standar_box}>
            <ListItem>
              <Button transparent onPress={() => this.props.navigation.navigate('Fighter_')}>
                <Text style={{color: 'white'}}>
                  Partie contre l'IA
                </Text>
              </Button>
            </ListItem>
            
            <ListItem>
              <Button transparent onPress={() =>BackHandler.exitApp()}>
                <Text style={{color: 'white'}}>
                  Quitter
                </Text>
              </Button>
            </ListItem>
          </List>
          
        </ImageBackground>
        
      </View>
    );
  }
}


