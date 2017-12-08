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
          <View style={styles.parameterView}>
          {/* <Image source={require('../img/dmg.png')} />   */}
            <Text style={styles.textSecondary}>
              {this.props.item.force}
            </Text>
            <Text style={styles.textSecondary}>
              {this.props.item.health}
            </Text>
            <Text style={styles.textSecondary}>
              {this.props.item.armor}
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
    alignItems: 'stretch'
  },
  listItem: {
    flexDirection: 'column',
    margin: 5,
    padding: 2,
    flex: -1,
    justifyContent: "space-around",
    alignItems: 'stretch',
    alignSelf: 'stretch'
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
  parameterView: {
    flex: -1,
    flexDirection: 'row',
    margin: 0,
    marginLeft: 0,
    backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-start'
  },
});

//export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);