import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveRules } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
//import { MKButton } from 'react-native-material-kit';

import {
  Button,
  Card,
  List,
  ListItem,
} from 'react-native-elements';

import { Icon as ButtonIcon } from 'react-native-elements';

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
    rules: state.rules,
  }
}

function mapDispatcherToProps(dispatch) {
  return {
    saveRules: (data) => {
      dispatch(saveRules(data));
    },
  }
}

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

  _iconAdd() {
    return <Text style={styles.headerText} >+</Text>
  }

  onBtnSaveClick() {
    return this.props.saveRules(this.props.rules);
  }

  render() {
    //console.log('map', this.props.items);

    return (
      <View >
        <ListView dataSource={this.props.items}
          renderRow={this._renderRow}
          enableEmptySections={true}>
        </ListView>
        <ButtonIcon
          raised
          size={15}
          name='md-add'
          type='ionicon'
          color='#f50'
          onPress={() => this.props.navigation.dispatch({
            type: 'ADD_RULES_VIEW',
            //payload: ''
          })}
          iconStyle={
            {
              fontSize: 25,
              color: 'grey'
            }
          }
          containerStyle={
            {
              borderColor: 'grey',
              borderWidth: 1,
              backgroundColor: '#ecf0f1',
              alignSelf: 'center'
            }
          }
        />
        <View style={styles.buttonPanel}>

          <Button
            title='Записать'
            //borderRadius={20}
            //backgroundColor='#ecf0f1'
            //containerViewStyle={{borderRadius: 20}}
            buttonStyle={styles.buttonRes}
            textStyle={styles.buttonTextStyle}
            onPress={() => this.props.dispatch(saveRules(this.props.rules))}
          //onPress={this.onBtnSaveClick.bind(this)}
          />

        </View >
      </View>
    );
  }
}

export default connect(mapStateToProps)(RulesPage);

const styles = StyleSheet.create({
  container: {
    flex: -1,
    backgroundColor: '#ecf0f1',
    //justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonPanel: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderColor: 'grey',
    margin: 0,
  },
  footer: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    //height:40,    
    borderTopWidth: 0.5,
    borderColor: 'grey',
    backgroundColor: 'lightgrey',
    alignItems: 'center'
  },
  buttonRes: {
    width: 85,
    height: 35,
    flex: 0,
    padding: 0,
    borderColor: 'grey',
    borderWidth: 1,
    //padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ecf0f1',
    margin: 5,
  },
  buttonTextStyle: {
    color: 'grey',
  },
  buttonCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    margin: 0,
    padding: 0,
    borderColor: 'grey',
    borderWidth: 1,
    //padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    //backgroundColor: 'transparent',

  },
  buttonFooter: {
    width: 100,
    flex: 0,

    //padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 0,
  },
  header: {
    backgroundColor: '#03A9F4',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
});