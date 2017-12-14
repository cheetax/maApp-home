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
  //console.log('mapStateToProps', state);
  
}

function mapDispatcherToProps(dispatch) {
  return {

  }
}

class RulesPage extends Component {

  
  render() {
    //console.log('map', this.props.items);

    return (
      <View >

        <Text>Rules</Text>

      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(RulesPage);