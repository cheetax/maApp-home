import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";

import {
  Button,
  Card,
  List,
  ListItem,
} from 'react-native-elements';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
} from 'react-native';

import ItemRulesView from './ItemRulesView';


function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  return {
    nav: state.nav,
    items: ds.cloneWithRows(state.rules.Exp),
  }
}

// function mapDispatcherToProps(dispatch) {
//   return {

//   }
// }

class RulesPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Нормы',
    headerLeft: (<Icon
      name={'chevron-thin-left'}
      size={18}
      style={{ color: '#fff', marginLeft: 10 }}
      onPress={() => { navigation.goBack() }} />),
    headerTitleStyle: {
      fontSize: 18,
      color: '#fff',
      marginLeft: -20,
      textAlign: 'center',
      alignSelf: 'stretch'
    },
    //headerTitle: <Text>test</Text>
  });

  _renderRow(item) {
    return <ItemRulesView key={item} keyVal={item} item={item} />
    // return <View>
    //   <Text>{item.minParam} </Text>
    //   <Text>{item.maxParam} </Text>
    //   <Text>{item.exp} </Text>
    // </View>
  }

  render() {
    //console.log('map', this.props.items);

    return (
      <View >

        <ListView dataSource={this.props.items}
          renderRow={this._renderRow}
          enableEmptySections={true}>
        </ListView>

      </View>
    );
  }
}

export default connect(mapStateToProps)(RulesPage);