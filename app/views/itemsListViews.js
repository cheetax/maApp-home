import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainView from './MainView';

export default class ItemsListView extends Component {

  render() {
    console.log('map', this.props.items);
    return (
      <View > {
        this.props.items.map((item, index) => {
          console.log('item', item);
          return (
            //<Text key={index}> {item.user} </Text>
            <MainView key={index} keyVal={index} item={item} setYearUp={this.props.setYearUp} setYearDown={this.props.setYearDown} />
          );
        })
      }
      </View>
    );
  }
}
