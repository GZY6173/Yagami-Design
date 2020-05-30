import React, { Component } from 'react'
import { StyleSheet, PixelRatio, Modal, StatusBar, Platform, KeyboardAvoidingView, Dimensions } from 'react-native'
import Text from '../Text'
import View from '../View'
import BasicModal from './Basic'

export default class AlertModal extends BasicModal {
    constructor(props) {
        super(props)
        this.state = {
            showToast: false,
            toastMsg: ''
        }
    }

    renderContain = () => {
        let { title, content, actions } = this.props.alertOptions
        return (
            <View style={styles.container}>
                {!!title &&
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>{title}</Text>
                    </View>
                }
                <View style={styles.contentView}>
                    <Text style={styles.contentText}>{content}</Text>
                </View>
                <View style={styles.bottomView}>
                    {actions instanceof Array && actions.map((item, i) => this.buttonIndex(item, i))}
                </View>
            </View>
        )
    }

    buttonIndex = (item, i) => {
        let num = 1
        if (this.props.bottom instanceof Array) {
            num = this.props.alertOptions.actions.length
        }
        return (
            <View
                key={i}
                style={[styles.buttonIndexView, { width: 290 / num }, (num > 1 && i !== num - 1) && styles.btnRightBorder]}
                onPress={() => item.onPress()}
            // disabled={!!item.disabled}
            >
                <Text
                    style={i === 0 ? styles.mTextStyle : styles.cTextStyle}>{item.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 290,
        borderRadius: 6,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    titleView: {
        width: 290,
        paddingVertical: 10,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        color: '#423F3D',
        fontWeight: '500'
    },
    contentView: {
        width: 290,
        paddingHorizontal: 20,
        paddingBottom: 10,
        alignItems: 'center',
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1 / PixelRatio.get()
    },
    contentText: {
        color: '#423F3D',
        fontSize: 14,
    },
    bottomView: {
        width: 290,
        flexDirection:'row'
    },
    buttonIndexView: {
        alignItems: 'center',
        paddingVertical: 16
    },
    btnRightBorder: {
        borderRightColor: '#EAEAEA',
        borderRightWidth: 1 / PixelRatio.get()
    },
    mTextStyle:{
        fontSize: 15,
        color: '#666666'
    },
    cTextStyle:{
        fontSize: 15,
        color: '#3C7CFB'
    }
})