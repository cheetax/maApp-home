import React, { Component } from 'react';
import { connect } from "react-redux";
import { setYearUpAction, setYearDownAction } from "../actions/actionYear";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainView from './MainView';


function mapStateToProps(state) {
  console.log(state);
  return {
    object: state.userInfo
  }
}

function mapDispatcherToProps(dispatcher) {
  return {
    setYearUpFunction: (object) => {
      dispatcher(setYearUpAction(object));
    },
    setYearDownFunction: (object) => {
      dispatcher(setYearDownAction(object));
    }
  }
}

class ShellView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Привет !
        </Text>
        <MainView object={this.props.object[0]} setYearUp={this.props.setYearUpFunction} setYearDown={this.props.setYearDownFunction}/>
        <MainView object={this.props.object[1]} setYearUp={this.props.setYearUpFunction} setYearDown={this.props.setYearDownFunction}/>
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

export default connect(mapStateToProps, mapDispatcherToProps)(ShellView);