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
            account: {...props.account}
        } 
        
    }
    // static navigationOptions = ({ navigation }) => ({
    //     // headerTitle: (navigation.state.params.type === 'add') ? 'Новая норма' : 'Редактирование нормы',
    //     // headerLeft: (<Icon
    //     //     name={'cross'}
    //     //     size={20}
    //     //     style={{ color: '#fff', marginLeft: 16 }}
    //     //     onPress={() => { navigation.goBack() }} />),
    //     // headerRight: (<Button
    //     //     title='Записать'
    //     //     //borderRadius={20}
    //     //     backgroundColor='transparent'
    //     //     //containerViewStyle={{borderRadius: 20}}
    //     //     buttonStyle={styles.buttonRes}
    //     //     textStyle={styles.buttonTextStyle}
    //     //     onPress={navigation.state.params.btnSave ? navigation.state.params.btnSave : () => null}
    //     // />

    //     // ),
    //     // headerTitleStyle: {
    //     //     fontSize: 20,
    //     //     color: '#fff',
    //     //     marginLeft: 0,
    //     //     textAlign: 'left',
    //     //     alignSelf: 'stretch'
    //     // },
    //     //headerTitle: <Text>test</Text>
    // });

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
                <Text style={styles.headerText} >Вход</Text>
                <View style={{ marginHorizontal: 16, }}>
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

                        onPress={this.onBtnLoginClick.bind(this)}
                    >
                        <Text>Войти</Text>
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
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 16,
        marginTop: 24,
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