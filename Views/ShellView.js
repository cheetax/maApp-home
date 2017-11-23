import React, { Component } from 'react';
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
        <MainView user={this.props.user} />
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

export default connect(mapStateToProps)(ShellView);