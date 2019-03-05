import React, { Component } from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
import { Colors } from 'ihome-design'
import Dimens from '../../../../api/core/library/dimens'

export default class AJButton extends Component {
    constructor(props) {
        super(props)
        // 初始
        this.state = {
            buttonStyle: styles.button,
            waiting: false
        }
        this.colors = {
            mainDefaultColor: Colors.Orange,
            mainTouchColor: '#E35900',
            mainDisabledColor: '#F8C89D',
            secondaryDefaultColor: Colors.GreyGold,
            secondaryTouchColor: '#DDD9D5',
            secondaryDisabledColor: '#F6F6F5',
        }
    }

    static defaultProps = {
        type: 'primary',
        disabled: false,
        disableDelay: 0
    }

    touch = () => {
        let { onPress, disableDelay } = this.props
        if (onPress) {
            this.setState({ waiting: true });
            onPress()
            setTimeout(() => {
                this.setState({ waiting: false })
            }, disableDelay);
        }
    }

    onPressIn = () => {
        if (!!this.props.onPressIn) {
            this.props.onPressIn()
            this.setState({ buttonStyle: styles.buttonTouch })
        } else {
            this.setState({ buttonStyle: styles.buttonTouch })
        }
    }

    onPressOut = () => {
        if (!!this.props.onPressOut) {
            this.props.onPressOut()
            this.setState({ buttonStyle: styles.buttonTouch })
        } else {
            this.setState({ buttonStyle: styles.buttonTouch })
        }
    }

    render() {
        let { type, style, title, titleStyle, disabled } = this.props
        let buttonStyle = {}
        let titleColor = {}
        if (type === 'primary') {
            if (disabled) {
                buttonStyle = { backgroundColor: this.colors.mainDisabledColor }
                titleColor = { color: 'white' }
            } else {
                buttonStyle = { backgroundColor: this.colors.mainDefaultColor }
                titleColor = { color: 'white' }
            }
        } else {
            if (disabled) {
                buttonStyle = { backgroundColor: this.colors.secondaryDisabledColor }
                titleColor = { color: '#cbcbcb' }
            } else {
                buttonStyle = { backgroundColor: this.colors.secondaryDefaultColor }
                titleColor = { color: Colors.Gold }
            }
        }
        
        return (
            <TouchableHighlight
                {...this.props}
                activeOpacity={1}
                underlayColor={type === 'primary' ? this.colors.mainTouchColor : this.colors.secondaryTouchColor}
                style={[this.state.buttonStyle, buttonStyle, style]}
                onPressIn={() => this.setState({ buttonStyle: styles.buttonTouch })}
                onPressOut={() => this.setState({ buttonStyle: styles.button })}
                onPress={this.touch}
            >
                {typeof this.props.children === 'string' ?
                    <Text style={[{ fontWeight: 'bold' }, titleStyle, titleColor]}>{this.props.children}</Text>
                    :
                    this.props.children
                }
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimens.p630,
        height: Dimens.p100,
        borderRadius: Dimens.p24
    },
    buttonTouch: {
        paddingTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimens.p630,
        height: Dimens.p100,
        borderRadius: Dimens.p24
    },

});
