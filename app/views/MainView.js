import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Button from 'apsl-react-native-button';
//import mapStateToProps from "./ShellView";

export default class MainView extends Component {

  onBtnUpClick(event) {
    console.log("OnBtnUpClick",this.props.setYear);
    return this.props.setYearUp(this.props.object)
    
  }
  onBtnDownClick(event) {
    console.log("OnBtnDownClick",this.props.object);
    return this.props.setYearDown(this.props.object)
    
  }
  render() {
    console.log("view",this.props.object.user)
    return (
      <View style={styles.container}>
        <Button style={styles.buttonUpDown} onPress={this.onBtnUpClick.bind(this)}>Up</Button>
        <Text style={styles.instructions} >
          {this.props.object.user} - {this.props.object.year}
        </Text>
        <Button style={styles.buttonUpDown} onPress={this.onBtnDownClick.bind(this)}>Down</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flexDirection: 'row',
    margin: 5,
    flex: 0,    
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonUpDown: {
    width: 100,
    height: 40,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 20,
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    flex: 0,
    
    color: '#333333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

//export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);