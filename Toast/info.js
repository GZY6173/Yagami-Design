import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    View
} from 'react-native';

import RootSiblings from 'react-native-root-siblings'

addSibling = (title) => {
    let sibling = new RootSiblings(
        <View style={styles.containView}>
            <View style={styles.toastView}>
                <Text style={styles.toastText}>{title}</Text>
            </View>
        </View>)
    return sibling
}

export default Info = (title) => {
    let sibling = addSibling(title)
    setTimeout(() => {
        sibling.destroy()
    }, 2000)
}

const styles = StyleSheet.create({
    containView: {
        position: 'absolute',
        top: 0,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toastView: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: '#000000',
        opacity: 0.7,
        borderRadius: 8
    },
    toastText: {
        fontSize: 17,
        color: 'white'
    }
});