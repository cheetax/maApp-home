import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import  MainView from './MainView';

export default class ShellView extends Component {
  render() {
    return (
      <View >
        <Text>
          ShellView!
        </Text>
        <MainView />
      </View>
    );
  }
}

AppRegistry.registerComponent('ShellView', () => ShellView);
