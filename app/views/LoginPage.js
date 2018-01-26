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
            account: { ...props.account },
            disabledAccount: false,
        }

    }

    onBtnLoginClick() {
        //this.props.rules.Exp.push(this.state);
        //this.props.navigation.goBack();
        if (this.props.account.statusLogin)
            return this.props.dispatch({
                type: 'UNLOGIN',
                payload: {}
            })
        else
            return this.props.dispatch(actionLogin(this.state.account));
    }

    // componentDidUpdate(prevProps,) {
    //     //this.setState({ account: { ...this.state.account, inAction: this.props.account.inAction } })
    //     console.log(prevProps)
    // }

    componentDidMount() {
        //this.props.navigation.setParams({ btnSave: this.onBtnLoginClick.bind(this) })
    }

    _btnLogin = () => {
        if ((!this.props.account.inActionLogin && !this.props.account.inAction) && !this.props.account.statusLogin) {
            return <Text style={{ color: '#fff', fontSize: 20 }}>ВОЙТИ</Text>
        }
        else if ((this.props.account.inActionLogin && !this.props.account.inAction) && !this.props.account.statusLogin) {
            return <View style={{
                borderColor: 'red',
                borderRadius: 14,
                height: 28,
                borderWidth: 1

            }}  >
                <Icon
                    name={'cross'}
                    size={24}
                    style={{
                        color: 'red',
                        margin: 0,
                        marginLeft: 0,
                        padding: 0,
                    }}
                />
            </View>

        }
        else if ((this.props.account.inActionLogin && !this.props.account.inAction) && this.props.account.statusLogin) {
            return <View style={{
                borderColor: 'green',
                borderRadius: 16,
                height: 32,
                width: 32,
                borderWidth: 2
            }} >
                <Icon
                    name={'check'}
                    size={24}
                    style={{
                        color: 'green',
                        margin: 0,
                        marginLeft: 0,
                        padding: 0,
                    }}
                />
            </View>


        }
        else if ((!this.props.account.inActionLogin && !this.props.account.inAction) && this.props.account.statusLogin) {
            return <Text style={{ color: '#fff', fontSize: 20 }}>ВЫЙТИ</Text>
        }
        else {
            return <ActivityIndicator size={24} />
        }
        return <Text>Test</Text>
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableHighlight
                        style={{
                            margin: 0,
                            marginTop: 8,
                            marginLeft: 8,
                            width: 40,
                            height: 40,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        underlayColor="rgba(0,0,0,0.2)"
                        onPress={() => { this.props.navigation.goBack() }} >
                        <Icon
                            name={'cross'}
                            size={24}
                            style={{
                                color: '#000',
                                margin: 0,
                                marginLeft: 0,
                                padding: 0,
                            }}
                        />
                    </TouchableHighlight>
                </View>
                <Text style={styles.headerText} >Battle of Wizards Assistans</Text>
                <View style={{ marginHorizontal: 24, marginTop: 64 }}>
                    <View >
                        <TextField
                            label={'Логин'}
                            // labelStyle={{color: 'orange'}}
                            //inputStyle={{paddingVertical:8 }}
                            //wrapperStyle={{paddingBottom:8}}
                            autoGrow={true}
                            editable={!this.props.account.statusLogin}
                            highlightColor={'#00BCD4'}
                            onChangeText={(login) => this.state.account.login = login}
                            value={this.state.account.login}
                        //returnKeyType={'next'}                         
                        />
                        <TextField
                            label={'Пароль'}
                            highlightColor={'#00BCD4'}
                            autoGrow={true}
                            secureTextEntry={true}
                            editable={!this.props.account.statusLogin}
                            onChangeText={(password) => this.state.account.password = password}
                            value={this.state.account.password}
                        //returnKeyType={'next'} 
                        />
                    </View>

                    <TouchableHighlight
                        style={{
                            padding: 0,
                            marginVertical: 32,
                            justifyContent: 'space-between',
                            alignItems: 'stretch',
                            backgroundColor: (!this.props.account.inActionLogin && this.props.account.statusLogin) ? 'red' : '#03A9F4',
                            //backgroundColor: this.colorBtn()
                        }}
                        underlayColor="rgba(0,0,0,0.2)"
                        onPress={this.onBtnLoginClick.bind(this)}
                    >
                        <View style={{ flex: 0, height: 48, justifyContent: 'center', alignItems: 'center' }} >
                            {this._btnLogin()}
                        </View>

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
        marginTop: 64,
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