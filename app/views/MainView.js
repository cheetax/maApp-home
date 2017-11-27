import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
//import mapStateToProps from "./ShellView";

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.onBtnUpClick = this.onBtnUpClick.bind(this);
  }

  onBtnUpClick(id) {
    console.log("OnBtnUpClick", id);
    return this.props.setYearUp(this.props.item)

  }
  onBtnDownClick() {
    console.log("OnBtnDownClick", this.props.setYearDown);
    return this.props.setYearDown(this.props.item)

  }
  render() {
    console.log(this.props.item)
    return (
      <View key={this.props.keyVal} style={styles.container}>
        <Button buttonStyle={styles.buttonUpDown} onPress={this.onBtnUpClick} title='Up' />
        <View style={styles.textView}>
          <Text style={styles.text}>
            {this.props.item.user} - {this.props.item.year}
          </Text>
        </View>
        <Button buttonStyle={styles.buttonUpDown} onPress={this.onBtnDownClick.bind(this)} title='Down' />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 0,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonUpDown: {
    width: 100,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textView: {
    flex: 0,
    flexDirection: 'row',
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

//export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);