import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import {
  Button,
  Card
} from 'react-native-elements';

//import mapStateToProps from "./ShellView";

export default class ItemStaticView extends Component {
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
          <View style={styles.column1} >
            <View style={styles.nameView}>
              <Text style={styles.textPrimary}>
                {this.props.item.name}
              </Text>
              <Icon style={styles.icon} name='ios-star' size={15} />
              <Text style={styles.textSecondary}>
                {this.props.item.rank}
              </Text>
            </View>

            <View style={styles.column1row2}>
              <Text style={styles.textOther}>Выполнение нормы:</Text>
            </View>
            
            <Text style={styles.textSecondary}>
                {this.props.item.rank}
              </Text>
          </View>
          <View style={styles.column2} >
            <View style={styles.column2row}>
              <Icon style={styles.icon} name='ios-ribbon-outline' size={20} />
              <Text style={styles.textSecondary}>
                {this.props.item.expClan}
              </Text>
            </View>
            <View style={styles.column2row}>
              <Icon style={styles.icon} name='ios-calendar-outline' size={20} />
              <Text style={styles.textSecondary}>
                {this.props.item.dayOfClan}
              </Text>
            </View>
            <View style={styles.column2row}>
              <Icon style={styles.icon} name='ios-calendar-outline' size={20} />
              <Text style={styles.textSecondary}>
                {this.props.item.option}
              </Text>
            </View>
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
    padding: 0,
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  listItem: {
    flex: -1,
    flexDirection: 'row',
    margin: 5,
    padding: 2,
    justifyContent: "space-between",
    alignItems: 'center',
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
  textSecondary: {
    fontSize: 15,
    textAlign: 'left',
    alignItems: 'center',
    margin: 0,
    marginLeft: 10,
  },
  textOther: {
    fontSize: 12,
    textAlign: 'left',
    alignItems: 'center',
    margin: 0,
    marginLeft: 0,
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
    margin: 0,
  },
  img: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 0,
    alignItems: 'center',
    margin: 0,
  },

  nameView: {
    flex: 1,
    flexDirection: 'row',
    margin: 0,
    marginLeft: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent'
  },
  column1row2: {
    flex: 1,
    flexDirection: 'row',
    margin: 0,
    paddingTop: 0,
    marginLeft: 5,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  column1: {
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    marginLeft: 5,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignSelf: 'stretch'
  },
  column2: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  column2row: {
    flex: 1,
    flexDirection: 'row',
    margin: 0,
    marginLeft: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent'
  },

});

//export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);