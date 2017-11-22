import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { connect } from "react-redux";

import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import MainView from './MainView';


function mapStateToProps(state) {
  return {
    user: "state"
  }
}
const myMainView = connect(mapStateToProps)(MainView);

class ShellView extends Component {

  render() {
    return (
      <View >
        <Text>
          ShellView! {this.props.user}
        </Text>
        <MainView />
      </View>
    );
  }
}




//const myMainView = connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('ShellView', () => ShellView);
export default connect(mapStateToProps)(ShellView);