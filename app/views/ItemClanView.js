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

export default class ItemClanView extends Component {
  render() {
    //console.log(this.props.keyVal)
    return (
      <View style={styles.container} key={this.props.keyVal}>
        <View style={styles.listItem}>
          <View style={styles.column1} >
            <View style={styles.nameView}>
              <Text style={styles.textPrimary}>
                {this.props.item.name}
              </Text>
              {/* <Icon style={styles.icon} name='ios-star' size={13} /> */}
              <Text style={styles.textSecondary}>
                {this.props.item.rank}
              </Text>
            </View>            
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
          </View>
        </View>
        <View style={{height: 1, backgroundColor: 'lightgray', marginVertical: 16}} />
        <View style={styles.column1row2}>
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
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 8,
    
    marginBottom: 2,
    padding: 0,
    flex: 0,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 2,
    elevation: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    //backgroundColor: '#fff'
    //backgroundColor: 'red'
  },
  listItem: { 
    flex: 1,
    flexDirection: 'row',
    margin: 16,
    padding: 0,
    marginBottom: 0,
    justifyContent: "space-between",
    alignItems: 'center',
    alignSelf: 'stretch',
    //backgroundColor: 'orange'
  },
  textPrimary: {
    fontSize: 24,
    textAlign: 'left',
    alignItems: 'center',
    margin: 0,
    padding:0,
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
    alignItems: 'center',
    margin: 0,
  },
  img: {
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    margin: 0,
  },
  textSecondary: {
    fontSize: 14,
    textAlign: 'left',
    alignItems: 'center',
    margin: 0,
    marginLeft: 0,
  },
  nameView: {
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    marginLeft: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    //backgroundColor:'transparent'
  },
  column1row2: {
    flex: 1,
    flexDirection: 'row',
    margin: 16,
    marginTop: 0,
    //backgroundColor: 'blue',
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
    //backgroundColor: 'transparent'
  },

});

//export default connect(mapStateToProps)(MainView);
//AppRegistry.registerComponent('MainView', () => MainView);