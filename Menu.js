
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon , Button } from 'native-base';
import styles from './styles'

export default class Menu_ extends Component {
  
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <View>
        <List>
          <ListItem>
            <Button transparent onPress={() => this.props.navigation.navigate('Fighter_')}>
              <Text>
                Partie contre l'IA
              </Text>
            </Button>
          </ListItem>
          <ListItem>
            <Button transparent onPress={() => this.props.navigation.navigate('Fighter_')}>
              <Text>
                Partie contre un(e) ami(e)
              </Text>
            </Button>
          </ListItem>
          <ListItem>
            <Button transparent onPress={() => this.props.navigation.navigate('Fighter_')}>
              <Text>
                Profil
              </Text>
            </Button>
          </ListItem>
          <ListItem>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text>
                Quitter
              </Text>
            </Button>
          </ListItem>
        </List>
      </View>
    );
  }
}


