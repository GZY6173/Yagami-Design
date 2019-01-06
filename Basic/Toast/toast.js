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
import LottieView from 'lottie-react-native'

let elements = []
let loadingArray = [
    { msg: '加载中，请稍后', icon: require('./src/ic_loading.json') },
    { msg: '加载中，请稍后', icon: require('./src/ic_loadingbook.json') },
    { msg: '查找中，请稍后', icon: require('./src/ic_loadingfind.json') },
]

addLoading = (title) => {
    let selectObj = null
    if (!title) {
        selectObj = loadingArray[0]
    } else {
        if (title === 'find') {
            selectObj = loadingArray[2]
        } else if (title === 'book') {
            selectObj = loadingArray[1]
        } else {
            selectObj = loadingArray[0]
        }
    }
    let loading = new RootSiblings(
        <View style={styles.containView}>
            <View style={styles.loadingView}>
                <LottieView
                    source={selectObj.icon}
                    style={{ width: 80, height: 80 }}
                    autoPlay
                    loop
                    speed={1.5}
                />
            </View>
            <Text style={styles.loadingText}>{selectObj.msg}</Text>
        </View>)
    elements.push(loading)
}

addInfo = (title) => {
    let info = new RootSiblings(
        <View style={styles.infoContainView}>
            <View style={styles.toastView}>
                <Text style={styles.toastText}>{title}</Text>
            </View>
        </View>)
    elements.push(info)
}

destroySibling = () => {
    let lastSibling = elements.pop()
    lastSibling && lastSibling.destroy()
}

export const Loading = (title) => {
    addLoading(title)
    setTimeout(() => {
        destroySibling()
    }, 10000)
}

export const StopLoading = () => {
    destroySibling()
}

export const Info = (title) => {
    addInfo(title)
    setTimeout(() => {
        destroySibling()
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
        backgroundColor: '#00000088',
    },
    toastView: {
        padding: 10,
        backgroundColor: '#000000',
        opacity: 0.7,
        borderRadius: 8,
        maxWidth: Dimensions.get('window').width / 2,
    },
    toastText: {
        color: 'white',
        textAlign: 'center'
    },
    loadingView: {
        width: 100,
        height: 100,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    loadingText: {
        color: 'white',
        fontSize: 17,
        marginTop: 15
    },
    infoContainView: {
        position: 'absolute',
        top: 0,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000000',
    },
})