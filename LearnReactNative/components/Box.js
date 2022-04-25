import React from 'react';
import {View, StyleSheet} from 'react-native';

function Box(props) {
    return <View style={[styles.box, props.rounded ? styles.rounded:null]} />;
}

const styles = StyleSheet.create({
    box: {
        width: 64,
        height: 64,
        backgroundColor:'red',
    },
    rounded:{
        borderRadius: 16,
    },
});

export default Box;