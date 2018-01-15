import React, { Component } from 'react';

import {
  Button,
  Card,
  List,
  ListItem,
} from 'react-native-elements';

import Icon from "react-native-vector-icons/Entypo";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
  FlatList,
  SectionList,
  TouchableHighlight,
  Clipboard,
} from 'react-native';

import ItemStaticView from './ItemStaticView';
import MoreStatisticView from './MoreStatisticView'


class StatisticViewItems extends Component {

  _keyExtractor = (item, index) => item.uid = index;

  _renderRow({ item }) {
    return <ItemStaticView key={item.uid} keyVal={item.uid} item={item} />
  }
  _renderSectionHeader({ section }) {
    return (
      <View style={
        {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 16,
          marginBottom: 8
        }} >
        <Text style={{ fontSize: 20, }} >{section.title}: {section.data.length} </Text>
        <TouchableHighlight style={{padding: 8}} onPress={() => this._MoreStatisticView(section.data)} >
          <Text style={{ fontSize: 16, }} >КОПИР.</Text>
        </TouchableHighlight>

      </View>
    )
  }

  _MoreStatisticView = (data) => {
    //console.log(data)
    var str = ''
    data.forEach(element => {
      str = str + element.name + ' ⋆ ' + element.exp + ' ⋆ >' + parseInt(element.ruleExp.value)/1000 + ' ⋆ дней: ' + element.dayOfClan + '\n'
    });
    Clipboard.setString(str);
    //return {}
  }
  
  
  //</View>


  render() {
    const performs = this.props.items.filter((value, index, array) => {
      return parseInt(value.exp) >= parseInt(value.ruleExp.value)
    })
    const notPerforms = this.props.items.filter((value, index, array) => {
      return parseInt(value.exp) < parseInt(value.ruleExp.value)
    })
    //console.log('map', this.props.items);


    return (
      <View style={styles.container}>
        <SectionList
          renderItem={this._renderRow.bind(this)}
          renderSectionHeader={this._renderSectionHeader.bind(this)}
          keyExtractor={this._keyExtractor}
          sections={[
            {
              data: notPerforms, title: 'Не выполняющие норму'
            },
            {
              data: performs, title: 'Выполняющие норму'
            },
          ]}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    margin: 10,
  },
  item: {
    alignItems: 'center',
    margin: 10,
  },
  buttonRes: {
    width: 100,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 5,
  },
  header: {
    backgroundColor: '#03A9F4',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default StatisticViewItems;