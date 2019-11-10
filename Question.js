import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import styles from './styles'
import { Image } from 'react-native';
import { Container, Header,  DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right } from 'native-base';

export default class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {

        cards : [
            {
                name: this.props.navigation.getParam('choixpotentielle', 'RIEN'),
                image: this.props.navigation.getParam('image', require('./Card/choice.png')),
                index: this.props.navigation.getParam('choixpotentielle_index', 0),
            },
            {
                name: this.props.navigation.getParam('choixpotentielle', 'RIEN'),
                image: this.props.navigation.getParam('image', require('./Card/choice.png')),
                index: this.props.navigation.getParam('choixpotentielle_index', 0),

            },
            
        ]
        
        };
    }

  render() {
    return (
        <Container>
            <Text>Êtes-vous sûr(e)?</Text>
            <View style={styles.contener_card}>
                <Text>
                    Non
                </Text>
                <Text>
                    Oui
                </Text>
            </View>
                
            
            <DeckSwiper
            dataSource={this.state.cards}
            renderItem={item =>
              <Card style={styles.cardContainer}>
                
                <CardItem cardBody>
                  <Image style={styles.cardContainer} source={item.image} />
                </CardItem>
                
              </Card>
            }
            onSwipeLeft={() => this.props.navigation.goBack()}
            onSwipeRight={() => this.props.navigation.navigate('VersusAI_', {
                choixfinal_index: this.state.cards[0].index,
                choixfinal: this.state.cards[0].name,
            })}
          />
        </Container>
          
    );
  }
} 

