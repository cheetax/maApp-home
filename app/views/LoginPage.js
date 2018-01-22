import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionLogin } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
import TextField from 'react-native-md-textinput';
//import { MKButton } from 'react-native-material-kit';

import {
    Button,
    Card,
} from 'react-native-elements';

import { Icon as ButtonIcon, } from 'react-native-elements';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ListView,
    TouchableHighlight,
} from 'react-native';

import ItemRulesView from './ItemRulesView';


function mapStateToProps(state) {
    //console.log('mapStateToProps', state);
    return {
        nav: state.nav,
        account: state.account,
    }
}

function mapDispatcherToProps(dispatch) {
    return {
        saveRules: (data) => {
            dispatch(saveRules(data));
        },
    }
}

class LoginPage extends Component {
    constructor(props) {
        super(props);
        // props.navigation.setParams({btnSave: this.onBtnSaveClick})
        this.state = {
            account: { ...props.account }
        }

    }

    onBtnLoginClick() {
        //this.props.rules.Exp.push(this.state);
        this.props.navigation.goBack();
        return this.props.dispatch(actionLogin(this.state.account));
    }

    componentDidMount() {
        //this.props.navigation.setParams({ btnSave: this.onBtnLoginClick.bind(this) })
    }

    render() {
        //console.log('map', this.props.items);

        return (
            <View style={styles.container}>
                <Text style={styles.headerText} >Battle of Wizards Assistans</Text>
                <View style={{ marginHorizontal: 24, marginTop: 72 }}>
                    <TextField
                        label={'Логин'}
                        // labelStyle={{color: 'orange'}}
                        //inputStyle={{paddingVertical:8 }}
                        //wrapperStyle={{paddingBottom:8}}
                        highlightColor={'#00BCD4'}
                        onChangeText={(login) => this.state.account.login = login}
                        value={this.state.account.login}
                    //returnKeyType={'next'}                         
                    />
                    <TextField
                        label={'Пароль'}
                        highlightColor={'#00BCD4'}
                        secureTextEntry={true}
                        onChangeText={(password) => this.state.account.password = password}
                        value={this.state.account.password}
                    //returnKeyType={'next'} 
                    />
                    <TouchableHighlight
                        style={{
                            padding: 8,
                            marginVertical: 32,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor:'#03A9F4'
                        }}
                        underlayColor="rgba(0,0,0,0.2)"
                        onPress={this.onBtnLoginClick.bind(this)}
                    >
                        <Text style={{color:'#fff', fontSize: 20}} >Войти</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps)(LoginPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 0,
    },
    headerText: {
        fontSize: 32,
        textAlign: 'center',
        marginHorizontal: 16,
        marginTop: 72,
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
        //width: 85,
        //height: 35,
        flex: 1,
        padding: 0,
        //borderColor: 'grey',
        //borderWidth: 1,
        //padding: 0,
        alignItems: 'center',
        alignSelf: 'flex-end',
        //borderRadius: 20,
        backgroundColor: 'transparent',
        marginRight: 16,
    },
    buttonTextStyle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'right',
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