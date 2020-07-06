import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Modal, StatusBar, SafeAreaView, KeyboardAvoidingView, Dimensions } from 'react-native'
import Text from '../Text'


export default class BasicModal extends Component {
    static defaultProps = {
        androidBackClosable: true,
        maskClosable: false,
        windowColor: 'rgba(0,0,0,0.4)',
        bottom: [{
            title: '确定',
            onPress: () => console.log('点击按钮')
        }],
        closable: false,
        type: 'modal',
    }

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        let { visible, androidBackClosable, windowColor, maskClosable } = this.props
        return (
            <Modal
                style={{ flex: 1 }}
                visible={visible}
                transparent={true}
                animationType={'fade'}
                onRequestClose={androidBackClosable ? this.close : null}
            >
                <SafeAreaView style={[styles.modalView,{backgroundColor: windowColor }]}>
                    {maskClosable &&
                        <TouchableOpacity
                            style={{ position: 'absolute', top: 0, width: Dimensions.get('window').width, height: Dimensions.get('window').height + 100, backgroundColor: windowColor }}
                            onPress={this.close}
                            activeOpacity={1}
                        >
                        </TouchableOpacity>
                    }
                    {this.renderContain()}
                </SafeAreaView>
            </Modal>
        )
    }

    renderContain = () => {
        return this.props.children
    }
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})