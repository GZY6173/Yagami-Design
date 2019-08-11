/**
 * visible             对话框是否可见       bool
 * close               关闭事件            function
 * title               标题                string
 * contain             内容                React.Element
 * bottom              底部内容            Array
 */
import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Modal, StatusBar, Platform, KeyboardAvoidingView, Dimensions } from 'react-native'
import Text from '../Text'
import Icon from '../Icon'
import Dimens from '../../Api/dimens'

export default class ModalAlert extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showToast: false,
            toastMsg: ''
        }
    }

    static defaultProps = {
        androidBackClosable: true,
        maskClosable: false,
        windowColor: 'rgba(0,0,0,0.8)',
        bottom: [{
            title: '确定',
            onPress: () => console.log('点击按钮')
        }],
        closable: false,
        type: 'modal',
    }

    close = () => {
        if (this.props.close) {
            this.props.close()
        } else {
            console.log('必须实现这个方法')
        }
    }

    showToast = (msg) => {
        this.setState({ showToast: true, toastMsg: msg })
        setTimeout(() => {
            this.setState({ showToast: false, toastMsg: '' })
        }, 1500)
    }

    render() {
        let { type } = this.props
        if (type === 'modal') {
            return this.renderModal()
        } else if (type === 'view') {
            return this.renderView()
        }

    }

    renderModal = () => {
        let { visible, androidBackClosable, windowColor, maskClosable } = this.props
        return (
            <Modal
                style={{ flex: 1 }}
                visible={visible}
                transparent={true}
                animationType={'fade'}
                onRequestClose={androidBackClosable ? this.close : null}
            >
                <StatusBar
                    barStyle={visible ? 'light-content' : 'dark-content'}
                    backgroundColor={visible ? '#000000' : '#ffffff'}
                />
                {Platform.OS === 'ios' ?
                    <KeyboardAvoidingView style={[styles.modalView, { backgroundColor: maskClosable ? '#00000000' : windowColor }]} behavior="padding" enabled>
                        {maskClosable &&
                            <TouchableOpacity
                                style={{ position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height + 50, backgroundColor: windowColor }}
                                onPress={this.close}
                                activeOpacity={1}
                            >
                            </TouchableOpacity>
                        }
                        {this.renderContain()}
                        {this.state.showToast && <View style={{ position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height + 50, backgroundColor: '#00000000', alignItems: 'center', paddingTop: 100 }}>
                            <View style={styles.toastView}>
                                <Text style={styles.toastText}>{this.state.toastMsg}</Text>
                            </View>
                        </View>}
                    </KeyboardAvoidingView>
                    :
                    <KeyboardAvoidingView style={[styles.modalView, { backgroundColor: maskClosable ? '#00000000' : windowColor }]} enabled>
                        {maskClosable &&
                            <TouchableOpacity
                                style={{ position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height + 50, backgroundColor: windowColor }}
                                onPress={this.close}
                                activeOpacity={1}
                            >
                            </TouchableOpacity>
                        }
                        {this.renderContain()}
                        {this.state.showToast && <View style={{ position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height + 50, backgroundColor: '#00000000', alignItems: 'center', paddingTop: 100 }}>
                            <View style={styles.toastView}>
                                <Text style={styles.toastText}>{this.state.toastMsg}</Text>
                            </View>
                        </View>}
                    </KeyboardAvoidingView>
                }
            </Modal>
        )
    }

    renderView = () => {
        let { visible, androidBackClosable, windowColor, maskClosable } = this.props
        if (visible) {
            return (
                <View
                    style={{ flex: 1, position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height }}
                // visible={visible}
                // transparent={true}
                // animationType={'fade'}
                // onRequestClose={androidBackClosable ? this.close : null}
                >
                    <StatusBar
                        barStyle={visible ? 'light-content' : 'dark-content'}
                        backgroundColor={visible ? '#000000' : '#ffffff'}
                    />
                    {Platform.OS === 'ios' ?
                        <KeyboardAvoidingView style={[styles.modalView, { backgroundColor: maskClosable ? '#00000000' : windowColor }]} behavior="padding" enabled>
                            {maskClosable &&
                                <TouchableOpacity
                                    style={{ position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height + 50, backgroundColor: windowColor }}
                                    onPress={this.close}
                                    activeOpacity={1}
                                >
                                </TouchableOpacity>
                            }
                            {this.renderContain()}
                            {this.state.showToast && <View style={{ position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height + 50, backgroundColor: '#00000000', alignItems: 'center', paddingTop: 100 }}>
                                <View style={styles.toastView}>
                                    <Text style={styles.toastText}>{this.state.toastMsg}</Text>
                                </View>
                            </View>}
                        </KeyboardAvoidingView>
                        :
                        <KeyboardAvoidingView style={[styles.modalView, { backgroundColor: maskClosable ? '#00000000' : windowColor }]} enabled>
                            {maskClosable &&
                                <TouchableOpacity
                                    style={{ position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height + 50, backgroundColor: windowColor }}
                                    onPress={this.close}
                                    activeOpacity={1}
                                >
                                </TouchableOpacity>
                            }
                            {this.renderContain()}
                            {this.state.showToast && <View style={{ position: 'absolute', top: 0, width: Dimens.fill_width, height: Dimens.fill_height + 50, backgroundColor: '#00000000', alignItems: 'center', paddingTop: 100 }}>
                                <View style={styles.toastView}>
                                    <Text style={styles.toastText}>{this.state.toastMsg}</Text>
                                </View>
                            </View>}
                        </KeyboardAvoidingView>
                    }
                </View>
            )
        } else {
            return (
                <View />
            )
        }
    }

    renderContain() {
        let { title, contain, bottom, closable } = this.props
        return (
            <View style={styles.containView}>
                {!!title &&
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>{title}</Text>
                        <View style={{ height: Dimens.p2, backgroundColor: '#E3E3E3', width: Dimens.p490, position: 'absolute', bottom: 0 }} />
                    </View>
                }
                <View style={[styles.middleView, { paddingTop: title ? Dimens.p20 : closable ? Dimens.p72 : Dimens.p40, paddingHorizontal: typeof contain === 'string' ? Dimens.p40 : 0 }]}>
                    {typeof contain === 'string' ?
                        <Text style={styles.containText}>{contain}</Text>
                        :
                        contain()
                    }
                </View>
                <View style={styles.bottomView}>
                    {bottom instanceof Array && bottom.map((item, i) => this.bottomIndex(item, i))}
                </View>
                {closable && <Icon
                    name={'tinyclose'}
                    size={Dimens.p32}
                    style={{ padding: Dimens.p20, position: 'absolute', top: 0, right: 0 }}
                    color={'#423F3D'}
                    onPress={this.close}
                />}
            </View>
        )
    }

    bottomIndex = (item, i) => {
        let num = 1
        if (this.props.bottom instanceof Array) {
            num = this.props.bottom.length
        }
        return (
            <TouchableOpacity
                key={i}
                style={[styles.bottomIndexView, {
                    width: Dimens.p570 / num,
                    backgroundColor: i === 0 ? item.disabled ? '#F8C89D' : '#377CFB' : item.disabled ? '#F6F6F5' : '#ECE9E6'
                }]}
                onPress={() => item.onPress()}
                activeOpacity={0.9}
                disabled={!!item.disabled}
            >
                <Text
                    style={i === 0 ? styles.mTextStyle : styles.cTextStyle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containView: {
        width: Dimens.p570,
        backgroundColor: '#ffffff00',
        borderRadius: Dimens.p12,
        paddingBottom: Dimens.p88,
        overflow: 'hidden',
        backgroundColor: Platform.OS === 'android' ? 'white' : '#00000000'
    },
    titleView: {
        width: Dimens.p570,
        height: Dimens.p90,
        paddingVertical: Dimens.p20,
        paddingHorizontal: Dimens.p40,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    titleText: {
        fontSize: Dimens.p34,
        color: '#423F3D',
        lineHeight: Dimens.p48,
        fontFamily: 'PingFangSC-Regular',
        fontWeight: '600'
    },
    middleView: {
        width: Dimens.p570,
        paddingHorizontal: Dimens.p40,
        backgroundColor: '#ffffff',
        paddingTop: Dimens.p20,
        paddingBottom: Dimens.p40,
        alignItems: 'center',
    },
    bottomView: {
        height: Dimens.p88,
        width: Dimens.p570,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
    },
    bottomIndexView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimens.p88,
    },
    mTextStyle: {
        fontSize: Dimens.p28,
        color: '#FFFFFF'
    },
    cTextStyle: {
        fontSize: Dimens.p28,
        color: '#A29174'
    },
    containText: {
        color: '#423F3D',
        fontSize: Dimens.p28,
        lineHeight: Dimens.p40,
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
})
