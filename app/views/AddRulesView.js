import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveRules } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
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

class AddRulesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minParam: 0,
            maxParam: 0,
            Param: 0,
        };
    }
    static navigationOptions = ({ navigation }) => ({
        title: 'Норма',
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

    onBtnSaveClick() {
        this.props.rules.Exp.push(this.state);
        return this.dispatch(saveRules(this.props.rules));
    }

    render() {
        //console.log('map', this.props.items);

        return (
            <View >
                <Card containerStyle={styles.container}>
                    <FormLabel>min Параметр</FormLabel>
                    <FormInput
                        onChangeText={(minParam) => this.setState({minParam})} />
                    <FormLabel>max Параметр</FormLabel>
                    <FormInput
                        onChangeText={(maxParam) => this.setState({ maxParam })} />
                    <FormLabel  >Параметр</FormLabel>
                    <FormInput
                        onChangeText={(Param) => this.setState({ Param })} />
                </Card>
                
                <View style={styles.buttonPanel}>

                    <Button
                        title='Записать'
                        //borderRadius={20}
                        //backgroundColor='#ecf0f1'
                        //containerViewStyle={{borderRadius: 20}}
                        buttonStyle={styles.buttonRes}
                        textStyle={styles.buttonTextStyle}
                        onPress={this.onBtnSaveClick.bind(this)}
                    />

                </View >
            </View>
        );
    }
}

export default connect(mapStateToProps)(AddRulesView);

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