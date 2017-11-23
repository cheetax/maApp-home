import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
//import mapStateToProps from "./ShellView";

export default class MainView extends Component {
  constructor(props) {
    super(props);
    //this.onBtnClick = this.onBtnClick.bind(this);
  }

  onBtnClick(event) {
    console.log(this);
    return this.props.setYear("1975")
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="1975" onPress={this.onBtnClick.bind(this)} />
        <Text >
          {this.props.year}
        </Text>
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

//export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);