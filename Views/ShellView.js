import React, { Component } from 'react';
//import { Provider } from "react-redux";
//import { createStore } from "redux";
//import rootReducer from "../reducers/index";
import { connect } from "react-redux";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainView from './MainView';


export function mapStateToProps(state) {
  console.log(state.userInfo.user);
  return {
    user: state.userInfo.user
  }
}

class ShellView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Привет {this.props.user}!
        </Text>
        <MainView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



//const myMainView = connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('ShellView', () => ShellView);
export default connect(mapStateToProps)(ShellView);