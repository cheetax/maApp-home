import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

import {
    Text,
    StyleSheet,
} from 'react-native';

import {
    ButtonGroup,
} from 'react-native-elements';

export default class ButtonGroupTM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: props.selectedIndex,
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
        this.props.btnSelectPageClick(selectedIndex);
    }

    render() {
        const buttons = this.props.buttons;
        const { selectedIndex } = this.state;
        const { buttonStyle, selectedTextStyle, innerBorderStyle } = styles;

        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={buttonStyle}
                selectedBackgroundColor='grey'
                selectedTextStyle={selectedTextStyle}
                innerBorderStyle={innerBorderStyle}
            />
        )
    }
}

const styles = {
    innerBorderStyle: {
        color: 'lightgrey',
        width: 1,
    },
    buttonStyle: {
        width: 250,
        flex: 0,
        borderColor: 'grey',
        borderWidth: 1,
        height: 35,
        //alignItems: 'center',
        //alignSelf: 'center',
        //justifyContent: 'center',
        borderRadius: 20,
        //margin: 0,
    },
    selectedTextStyle: {
        color: '#fff',
    },
}