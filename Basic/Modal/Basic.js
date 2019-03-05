import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Modal, StatusBar} from 'react-native'
import Dimens from '../../../../api/core/library/dimens'

export default class ModalAlert extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    static defaultProps = {
        windowColor: 'rgba(0,0,0,0.8)',
        maskClosable: true,
        androidBackClosable: true
    }

    close = () => {
        if (this.props.close) {
            this.props.close()
        } else {
            console.log('必须实现这个方法')
        }
    }

    render() {
        let { visible, windowColor, maskClosable, androidBackClosable } = this.props
        return (
            <Modal
                style={{ flex: 1 }}
                visible={visible}
                transparent={true}
                animationType={'fade'}
                onRequestClose={androidBackClosable ? this.close : null}
            >   
                <StatusBar
                    barStyle={visible?'light-content':'dark-content'}
                    backgroundColor={visible?'#000000':'#ffffff'}
                />
                <View style={[styles.modalView,]}>
                    {maskClosable &&
                        <TouchableOpacity
                            style={{ position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height + 50, backgroundColor: windowColor }}
                            onPress={this.close}
                            activeOpacity={1}
                        >
                        </TouchableOpacity>
                    }
                    {this.props.children}
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalView: {
        width: Dimens.fill_width,
        height: Dimens.fill_height + 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50
    },
    containView: {
        height: 100,
        width: 100,
        backgroundColor: 'white'
    }
})
