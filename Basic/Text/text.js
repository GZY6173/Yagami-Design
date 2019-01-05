import React, { Component } from 'react'
import {
	Text,
	Platform,
} from 'react-native'

export default class PreText extends Component {
	constructor(props) {
		super(props)
		// 初始状态
		this.state = {}
	}

	render() {
		let {style} = this.props
		return (
			<Text
				{...this.props}
				style={[{fontFamily: Platform.OS === 'ios' ? 'PingFangSC-Regular' : 'Roboto'}, style]}
			>{this.props.children}</Text>
		)
	}

}