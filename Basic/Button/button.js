import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'


export default class Button extends Component {

    static defaultProps = {
        time: 500
    };

    constructor(props) {
        super(props)
        this.state = {
            waiting: false
        }
    }

    touch = () => {
        let { onPress, time } = this.props
        this.setState({ waiting: true });
        onPress()
        setTimeout(() => {
            this.setState({ waiting: false })
        }, time);
    }

    render() {
        let { style, children } = this.props
        return (
            <TouchableOpacity
                style={style}
                activeOpacity={0.8}
                disabled={this.state.waiting}
                {...this.props}
                onPress={this.touch}
            >
                {children}
            </TouchableOpacity>
        )
    }
}