import React, { Component } from 'react';
import {
  Text,
  Button,
  StyleSheet,
  View
} from 'react-native';

export default class Boy extends Component {
  static navigationOptions = {
    title: 'Boy',
  }
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I am boy</Text>
        <Button style={styles.text}
          onPress={
            () => this.props.navigation.navigate('Girl', {
              word: '送给女孩一支玫瑰', onCallBack: (word) => this.setState({ word })
            })
          }
          title='送给女孩一支玫瑰'
        ></Button>
        <Text style={styles.text}>{this.state.word}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 20
    }
  }
);
