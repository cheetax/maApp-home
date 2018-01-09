import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveRules } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
import TextField from 'react-native-md-textinput';
//import { MKButton } from 'react-native-material-kit';

import {
    Button,
    Card,
} from 'react-native-elements';

import { Icon as ButtonIcon, FormLabel, FormInput, } from 'react-native-elements';

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
    return {
        nav: state.nav,
        ruleType: state.nav.routes[state.nav.index].params,
        rule: state.editRule,
    }
}

function mapDispatcherToProps(dispatch) {
    return {
        saveRules: (data) => {
            dispatch(saveRules(data));
        },
    }
}

class AddRulesView extends Component {
    constructor(props) {
        super(props);
        // props.navigation.setParams({btnSave: this.onBtnSaveClick})
        this.state = {
            oldRule: {},
            newRule: {}
        }
        //this.state.oldRule = {};
        switch (props.ruleType.index) {
            case 0:
                this.state.oldRule = props.rule.gold;
                this.title = 'Золото';
                break;
            case 1:
                this.state.oldRule = props.rule.exp;
                this.title = 'Опыт';
                break;
            case 2:
                this.state.oldRule = props.rule.crystals;
                this.title = 'Кристаллы';
                break;
        }
        this.state.newRule = {...this.state.oldRule};

    }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (navigation.state.params.type === 'add') ? 'Новая норма' : 'Редактирование нормы',
        headerLeft: (<Icon
            name={'cross'}
            size={20}
            style={{ color: '#fff', marginLeft: 16 }}
            onPress={() => { navigation.goBack() }} />),
        headerRight: (<Button
            title='Записать'
            //borderRadius={20}
            backgroundColor='transparent'
            //containerViewStyle={{borderRadius: 20}}
            buttonStyle={styles.buttonRes}
            textStyle={styles.buttonTextStyle}
            onPress={navigation.state.params.btnSave ? navigation.state.params.btnSave : () => null}
        />

        ),
        headerTitleStyle: {
            fontSize: 20,
            color: '#fff',
            marginLeft: 0,
            textAlign: 'left',
            alignSelf: 'stretch'
        },
        //headerTitle: <Text>test</Text>
    });

    onBtnSaveClick() {
        //this.props.rules.Exp.push(this.state);
        this.props.navigation.goBack();
        return this.props.dispatch({
            type: (this.props.ruleType.type === 'add') ? 'ADD_RULES' : 'EDIT_RULES',
            payload: { index: this.props.ruleType.index, oldRule: this.state.oldRule, newRule: this.state.newRule },
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({ btnSave: this.onBtnSaveClick.bind(this) })
    }

    render() {
        //console.log('map', this.props.items);

        return (
            <View style={styles.container}>
                <Text style={styles.headerText} >{this.title}</Text>
                <View style={{ marginHorizontal: 16, }}>
                    <TextField
                        label={'min Параметр'}
                        // labelStyle={{color: 'orange'}}
                        //inputStyle={{paddingVertical:8 }}
                        //wrapperStyle={{paddingBottom:8}}
                        highlightColor={'#00BCD4'}
                        keyboardType={'numeric'}
                        onChangeText={(minParam) => this.state.newRule.minParam = minParam}
                        value={this.state.newRule.minParam}
                    //returnKeyType={'next'}                         
                    />
                    <TextField
                        label={'max Параметр'}
                        highlightColor={'#00BCD4'}
                        keyboardType={'numeric'}
                        onChangeText={(maxParam) => this.state.newRule.maxParam = maxParam}
                        value={this.state.newRule.maxParam}
                    //returnKeyType={'next'} 
                    />
                    <TextField
                        label={'Значение'}
                        highlightColor={'#00BCD4'}
                        keyboardType={'numeric'}
                        onChangeText={(value) => this.state.newRule.value = value}
                        value={this.state.newRule.value}
                    //returnKeyType={'next'} 
                    />
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps)(AddRulesView);

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