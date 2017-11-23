import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
//import mapStateToProps from "./ShellView";

function mapStateToProps(state) {
  console.log(state.userInfo.user);
  return {
    user: state.userInfo.user
  }
}

 class MainView extends Component {
   render() {
    console.log(this.props.user);
    return (
      <View style={styles.container}>
        <Text >
          {this.props.user} это myApp!!! 
        </Text>    
        <Text/>
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

export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);