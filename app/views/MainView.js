import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
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
        <View style={styles.listItem}>
          <View style={styles.textView}>
            <Text style={styles.textPrimary}>
              {this.props.item.name}
            </Text>
            <Icon name='ios-star' style={styles.icon} size={15} />
            <Text style={styles.textSecondary}>
              {this.props.item.rank}
            </Text>
            <Icon name='ios-star' style={styles.icon} size={15} />
            <Text style={styles.textSecondary}>
              {this.props.item.dayOfClan}
            </Text>
          </View>
          <View style={styles.textView}>
          {/* <Image source={require('../img/dmg.png')} />   */}
            <Text style={styles.textSecondary}>
              {this.props.item.dayOfClan}
            </Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 5,
    padding: 2,
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  listItem: {
    flexDirection: 'column',
    margin: 5,
    padding: 2,
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  buttonUpDown: {
    width: 100,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 0,
  },

  textPrimary: {
    fontSize: 20,
    textAlign: 'left',
    alignItems: 'center',
    margin: 0,
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
    margin: 0,
  },
  textSecondary: {
    fontSize: 15,
    textAlign: 'left',
    margin: 0,
    marginLeft: 10,
  },
  textView: {
    flex: 0,
    flexDirection: 'row',
    margin: 0,
    marginLeft: 5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
});

//export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);