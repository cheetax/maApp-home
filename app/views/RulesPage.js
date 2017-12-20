import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent } from "../actions/actionUsers";
import { Header } from 'react-native-elements';

import {
  Button,
  Card,
  List,
  ListItem,
} from 'react-native-elements';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
} from 'react-native';

import ItemClanView from './ItemClanView';


function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    nav: state.nav,
  }
}

// function mapDispatcherToProps(dispatch) {
//   return {

//   }
// }

class RulesPage extends Component {
  static navigationOptions = {
    title: 'Основной',
    headerBackTitle: 'test',
    headerStyle: {
      backgroundColor: '#03A9F4',
      height: 40,
      //marginHorizontal:0,
      //justifyContent: 'center',
      //alignItems: 'center'
    },
    headerTitleStyle: {
      fontSize: 18,
      color: '#fff',
      marginHorizontal:0,
      //textAlign: 'center',
      //justifyContent: 'center',
     // alignItems: 'center',
      //alignSelf: 'center'
      //   margin: 5,

    },

  }
  
  render() {
    //console.log('map', this.props.items);

    return (
      <View >

        <Text>Rules</Text>

      </View>
    );
  }
}

export default connect(mapStateToProps)(RulesPage);