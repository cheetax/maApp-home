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


function mapStateToProps(state) {
    //console.log('mapStateToProps', state);
    return {
        nav: state.nav,
        settings: state.settings,
    }
}

function mapDispatcherToProps(dispatch) {
    return {
        saveRules: (data) => {
            dispatch(saveRules(data));
        },
    }
}

class SettingsPage extends Component {
    constructor(props) {
        super(props);
        // props.navigation.setParams({btnSave: this.onBtnSaveClick})
        this.state = {
            settings: {...props.settings}
        }
      

    }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Настройки',
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
            type: 'EDIT_SETTINGS',
            payload: { ...this.state.settings },
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({ btnSave: this.onBtnSaveClick.bind(this) })
    }

    render() {
        //console.log('map', this.props.items);

        return (
            <View style={styles.container}>
                <View style={{ marginHorizontal: 16, }}>
                    <TextField
                        label={'Испытательный срок'}
                        highlightColor={'#00BCD4'}
                        keyboardType={'numeric'}
                        onChangeText={(probationPeriod) => this.state.settings.probationPeriod = probationPeriod}
                        value={this.state.settings.probationPeriod}
                    //returnKeyType={'next'}                         
                    />
                    
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps)(SettingsPage);

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