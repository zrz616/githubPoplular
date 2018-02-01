/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


const RootTabs = TabNavigator(
  {
    TbPopular: {
      screen: () => (<View style={styles.page1}></View>),
      navigationOptions: {
        tabBarLabel: '最热',
        tabBarIcon: ({ tintColor }) => (
          <Image style={[styles.image, {tintColor: tintColor}]} source={require('./res/images/ic_polular.png')} />
        )
      }
    },
    TbTrending: {
      screen: () => (<View style={styles.page2}></View>),
      navigationOptions: {
        tabBarLabel: '趋势',
        tabBarIcon: ({tintColor}) => (
          <Image style={[styles.image, { tintColor: tintColor } ] } source={require('./res/images/ic_trending.png')}/>
        )
      }
    },
    TbFavorite: {
      screen: () => (<View style={styles.page1}></View>),
      navigationOptions: {
        tabBarLabel: '收藏',
        tabBarIcon: ({ tintColor }) => (
          <Image style={[styles.image, { tintColor}]} source={require('./res/images/ic_favorite.png')} />
        )
      }
    },
    TbMy: {
      screen: () => (<View style={styles.page2}></View>),
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
          <Image style={[styles.image, { tintColor } ]} source={require('./res/images/ic_my.png')} />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#e91e63',
      inactiveTintColor: '#808080',
      style: {
        backgroundColor: '#fff'
      }
    }
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tb_popular'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <RootTabs></RootTabs>
        {/* <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            selectedTitleStyle={{color: 'red'}}
            title="最热"
            renderIcon={() => <Image style={ styles.image } source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}] } source={require('./res/images/ic_polular.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={ styles.page1 }></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            selectedTitleStyle={{color: 'red'}}
            title="趋势"
            renderIcon={() => <Image style={ styles.image } source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}] } source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={ styles.page2 }></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            selectedTitleStyle={{color: 'red'}}
            title='收藏'
            renderIcon={() => <Image style={ styles.image } source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}] } source={require('./res/images/ic_polular.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={ styles.page1 }></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            selectedTitleStyle={{color: 'red'}}
            title="我的"
            renderIcon={() => <Image style={ styles.image } source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}] } source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={ styles.page2 }></View>
          </TabNavigator.Item>
        </TabNavigator> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  page1: {
    flex: 1,
    backgroundColor: 'rgba(223, 106, 95, .3)'
  },
  page2: {
    flex: 1,
    backgroundColor: 'rgba(223, 106, 95, .9)'
  },
  image: {
    height: 22,
    width: 22
  }
});
