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

  render() {
    const exp = (_exp) => {
      if (Math.round(_exp) > 1000000) {
        return (Math.round(_exp) / 1000000).toFixed(1).toString() + 'm';
      }
      else {
        return (Math.round(_exp) / 1000).toFixed(1).toString() + 'k';
      }
    }
    //const iconOnOff = (_OnOff) => { <Icon style={styles.icon} name='ios-checkmark' size={13} />
    var iconOnOff = <Icon style={styles.iconOnOff} name='ios-checkmark' size={32} />
    if (parseInt(this.props.item.exp) >= parseInt(this.props.item.ruleExp.value)) {
      iconOnOff = <Icon style={styles.iconOnOff} name='ios-checkmark' size={32} />
    }
    //console.log(rulesUser)
    return (
      <Card containerStyle={styles.container} key={this.props.keyVal}>
        <View style={styles.listItem}>
          <View style={(parseInt(this.props.item.exp) >= parseInt(this.props.item.ruleExp.value)) ? styles.onImplement : styles.offImplement}>
            {iconOnOff}
            {/* <Icon style={styles.icon} name='ios-checkmark' size={13} /> */}
          </View>
          <View style={styles.column1} >
            <View style={styles.nameView}>
              <Text style={styles.textPrimary}>
                {this.props.item.name}
              </Text>
              {/* <Icon style={styles.icon} name='ion-checkmark' size={13} /> */}
              <Text style={styles.textSecondary}>
                {this.props.item.rank}
              </Text>
            </View>
            <View style={styles.column1row2} >
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Icon style={styles.icon} name='ios-calendar-outline' size={18} />
                <Text style={styles.textSecondary}>
                  {this.props.item.dayOfClan}
                </Text>
              </View>
              <View style={styles.column2row}>
                <Icon style={styles.icon} name='ios-school-outline' size={18} />
                <Text style={styles.textSecondary}>
                  {this.props.item.option}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.column2} >
            <View style={styles.column2row}>
              <Icon style={[styles.icon,]} name='ios-ribbon-outline' size={18} />
              <Text style={styles.textSecondary}>{exp(this.props.item.exp)}</Text>
            </View>
            <View style={styles.column2row}>

            </View>
            <View style={styles.column2row}>
              
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
    margin: 8,
    padding: 0,
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  listItem: {
    flex: -1,
    flexDirection: 'row',
    margin: 16,
    padding: 0,
    justifyContent: "space-between",
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
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
    flex: 0,
    fontSize: 24,
    textAlign: 'left',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: -5,
    paddingTop: -5,
    //backgroundColor: 'blue'
  },
  textSecondary: {
    fontSize: 14,
    textAlign: 'left',
    alignItems: 'center',
    margin: 0,
    marginLeft: 0,
  },
  textOther: {
    fontSize: 14,
    textAlign: 'left',
    alignItems: 'center',
    margin: 0,
    marginLeft: 0,
  },
  icon: {
    justifyContent: 'center',
    marginRight: 5,
    alignItems: 'center',
    margin: 0,
  },
  iconOnOff: {
    justifyContent: 'center',
    marginHorizontal: 0,
    alignItems: 'center',
    margin: 0,
    color: '#fff'
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
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    marginLeft: 16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //alignSelf: 'stretch',
    //backgroundColor: 'yellow'
  },
  column1row2: {
    flex: 1,
    flexDirection: 'row',
    margin: 0,
    paddingTop: 0,
    marginLeft: 16,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  onImplement: {
    flex: 0,
    flexDirection: 'column',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'green',
    //height: 5,
    margin: 0,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    //alignSelf: 'center'
  },
  offImplement: {
    flex: 0,
    flexDirection: 'column',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    //height: 5,
    margin: 0,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
    //alignSelf: 'center'
  },
  column1: {
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    marginLeft: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'red'
    //alignSelf: 'stretch'
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