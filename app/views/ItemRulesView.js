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

//import MenuButton from 'react-native-menu-button'
import { MenuContextRulesItem } from './MenuContextRulesItem';

//import mapStateToProps from "./ShellView";

export default class ItemRulesView extends Component {
  render() {
    //console.log(this.props.keyVal)
    return (
      // <Card containerStyle={styles.container} >
      <View style={styles.listItem}>
        <View style={styles.column1} >
          <View style={styles.nameView}>
            <Text style={styles.textPrimary}>
              Min: {this.props.item.minParam}
            </Text>
            <Text>  </Text>
            <Text style={styles.textPrimary}>
              Max: {this.props.item.maxParam}
            </Text>
            <Text>  </Text>
            <Text style={styles.textPrimary}>
              Норма: {this.props.item.value}
            </Text>


          </View>
          <View style={{ justifyContent: 'center' }}>
            <MenuContextRulesItem onPress={this.props.onPress} item={this.props.item} />
          </View>

        </View>
      </View>
      // </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 5,
    paddingVertical: 5,
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  listItem: {
    flex: 1,
    height: 48,
    //borderBottomWidth: 0.5,
    //borderColor: '#c9c9c9',
    //borderColor: 'red',
    flexDirection: 'row',
    padding: 0,
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
    fontSize: 16,
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
  img: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 0,
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
    paddingTop: 5,
    marginLeft: 0,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  column1: {
    flex: 1,
    flexDirection: 'row',

    marginVertical: 0,
    marginHorizontal: 16,
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
  rightButton: {
    width: 100,
    height: 37,
    position: 'absolute',
    bottom: 8,
    right: 2,
    padding: 8
  },


});

//export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);