import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";

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
  return {
    nav: state.nav,
  }
}

// function mapDispatcherToProps(dispatch) {
//   return {

//   }
// }

class RulesPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Нормы',
    headerLeft: (<Icon
      name={'chevron-thin-left'}
      size={18}
      style={{ color: '#fff', marginLeft: 10 }}
      onPress={() => { navigation.goBack() }} />),
    headerTitleStyle: {      
      fontSize: 18,
      color: '#fff',
      marginLeft: -20,
      textAlign: 'center',
      alignSelf: 'stretch'
    },
    //headerTitle: <Text>test</Text>
  });
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