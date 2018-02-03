import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class Girl extends Component {
  static navigationOptions = {
    title: 'Girl',
  }
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    };
  }
  render() {
    const { word, onCallBack } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I am girl</Text>
        <Text style={styles.text}
          onPress={() => {
            onCallBack('两盒巧克力');
            this.props.navigation.goBack();
          }}>{word}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'grey',
      justifyContent: 'center'
    },
    text: {
      fontSize: 20
    }
  }
);
