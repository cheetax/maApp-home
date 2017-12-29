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

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers,
} from 'react-native-popup-menu';

import MenuButton from 'react-native-menu-button'


//import mapStateToProps from "./ShellView";

export default class ItemRulesView extends Component {
  render() {
    //console.log(this.props.keyVal)
    menuGroup = [
      { key: "0", value: "edit", text: "edit" },
      { key: "1", value: "delete", text: "delete" },
    ]

    return (
      <Card containerStyle={styles.container} key={this.props.keyVal}>
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
                Норма: {this.props.item.exp}
              </Text>

              <Menu renderer={renderers.SlideInMen} >
                <MenuTrigger>
                  <Icon
                    name={'md-more'}
                    size={18}
                    style={{ color: 'red', marginLeft: 10 }} />                  
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption text='edit' />
                  <MenuOption text='delete' />
                </MenuOptions>
              </Menu>


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
    paddingVertical: 5,
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  listItem: {
    flex: -1,
    flexDirection: 'row',
    marginVertical: 5,
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
    fontSize: 18,
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
    flexDirection: 'column',
    margin: 0,
    marginLeft: 0,
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