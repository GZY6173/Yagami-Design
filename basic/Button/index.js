import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Dimensions, } from 'react-native'

const Dp = (px) => {
    return px * Dimensions.get('window').width / 750
}

export default class Button extends React.Component {
    static defaultProps = {
        options: {
            width: Dp(690),
            height: Dp(100),
            backgroundColor: 'white'
        },
        list: []
    }

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let { onPress, title, style, textStyle } = this.props
        return (
            <TouchableOpacity
                style={style}
                onPress={onPress}
            >
                <Text style={textStyle}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
})