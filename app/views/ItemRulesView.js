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

export default class ItemRulesView extends Component {
  render() {
    //console.log(this.props.keyVal)
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
            </View>

            {/* <View style={styles.column1row2}>
              <Image source={require('../img/dmg.png')} style={styles.img} />
              <Text style={styles.textSecondary}>
                {this.props.item.force}
              </Text>
              <Image source={require('../img/hp.png')} style={styles.img} />
              <Text style={styles.textSecondary}>
                {this.props.item.health}
              </Text>
              <Image source={require('../img/armor.png')} style={styles.img} />
              <Text style={styles.textSecondary}>
                {this.props.item.armor}
              </Text>
            </View> */}
          </View>
          {/* <View style={styles.column2} >
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
          </View> */}
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
    marginLeft: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor:'transparent'
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