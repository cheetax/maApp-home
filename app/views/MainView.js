import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Button,
  Card
} from 'react-native-elements';

//import mapStateToProps from "./ShellView";

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.onBtnUpClick = this.onBtnUpClick.bind(this);
  }

  onBtnUpClick() {
    //console.log("OnBtnUpClick", id);
    return this.props.setYearUp(this.props.keyVal)

  }
  onBtnDownClick() {
    //console.log("OnBtnDownClick", this.props.setYearDown);
    return this.props.setYearDown(this.props.keyVal)

  }
  render() {
    //console.log(this.props.keyVal)
    return (
      <Card containerStyle={styles.container} key={this.props.keyVal}>
        <View style={styles.container}>
          
          <View style={styles.textView}>
            <Text style={styles.text}>
              {this.props.item.name} 
            </Text>
          </View>
          
        </View>
      </Card>
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
    textAlign: 'left',
    margin: 10,
  },
  textView: {
    flex: 0,
    flexDirection: 'row',
    margin: 0,
    justifyContent: 'start',
    alignItems: 'center'
  },
});

//export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);