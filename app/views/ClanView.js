import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent } from "../actions/actionUsers";
import { Header } from 'react-native-elements';

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
  FlatList,
  ScrollView,
} from 'react-native';

import ItemClanView from './ItemClanView';
import Icon from "react-native-vector-icons/Entypo";

function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  return {    
    status: state.actionStatus,
    //items: ds.cloneWithRows(state.clanInfo.users),
    items: state.clanInfo.users,
    nav: state.nav,
  }
}

class ClanView extends Component {
  constructor(props) {
    super(props);
    this.state = { inAction: false };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerLeft = (<Icon
      name={'menu'}
      size={24}
      style={{ color: '#fff', marginLeft: 16 }}
      onPress={() => navigation.navigate('DrawerOpen')}
    />
    );
    let headerRight = (<Icon
      name={'cw'}
      size={24}
      style={{ color: '#fff', marginRight: 16 }}
      onPress={params.btnRes ? params.btnRes : () => null}
    />
    );
    if (params.inAction) {
      headerRight = (<ActivityIndicator size={24} color='#fff' style={{ marginRight: 16 }} />)
    }
    return {
      headerTitle: 'Battle of Wizards Assistans',
      headerLeft,
      headerRight,
      headerTitleStyle: {
        marginHorizontal: 0,
      },
    };
  }

  onBtnResClick() {
    return this.props.dispatch(getContent(true));
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log();
    if (this.props.status.inAction !== this.state.inAction) {
      this.setState({
        inAction: this.props.status.inAction
      }, () => this.props.navigation.setParams({ inAction: this.state.inAction }));

    }
    // if (!this.props.status.selectedPage) {
    //   this.props.navigation.setParams({title: 'Battle of Wizards Assistans'})
    //   //this.navigationOptions({ headerTitle: 'Test' });
    // }
    // else {
    //   this.props.navigation.setParams({title: 'Статистика'})
    // }
  }
  componentDidMount() {
    this.props.navigation.setParams({ btnRes: this.onBtnResClick.bind(this), inAction: this.state.inAction })

  }

  _keyExtractor = (item, index) => item.uid = index;

  _renderRow({item}) {
    return <ItemClanView key={item.id} keyVal={item.id} item={item} />
  }

  render() {
    //console.log('map', this.props.items);

    return (
      <ScrollView style={styles.container}>

        {/* <List >
          {            
            this.props.items.map((item, index) => (
              <ListItem key={index} 
                        title ={item.name} />
                //<Text key={index}> {item.user} </Text>
                //<MainView key={index} keyVal={index} item={item} />
              ))           
          }
          </List> */}

        {/* <ListView dataSource={this.props.items}
          renderRow={this._renderRow}
          enableEmptySections={true}>

        </ListView> */}
        <FlatList
          data={this.props.items}          
          keyExtractor={this._keyExtractor.bind(this)}
          renderItem={this._renderRow.bind(this)}
          //style={{ backgroundColor: 'red' }}
        >
          
        </FlatList>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
   // backgroundColor: 'red'
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

export default connect(mapStateToProps)(ClanView);