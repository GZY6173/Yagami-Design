/**
 * Update by guanziyu on 2019/1/15.
 */
import React, { Component } from 'react'
import { Text, Platform, StyleSheet } from 'react-native'

export default class AJText extends Component {
	constructor(props) {
		super(props)
		// 初始状态
		this.state = {}
	}

	render() {
		let { style } = this.props
		let lineHeight = 18
		let textPropsStyle = {}
		if (style) {
			textPropsStyle = StyleSheet.flatten(style)
			console.log(textPropsStyle)
			if (textPropsStyle.fontSize && !textPropsStyle.lineHeight) {
				lineHeight = Math.ceil(textPropsStyle.fontSize * 1.4)
			}
		}
		return (
			<Text
				{...this.props}
				style={[styles.defaultStyle, { lineHeight: lineHeight }, style]}
			>{this.props.children}</Text>
		)
	}
}

const styles = StyleSheet.create({
	defaultStyle: {
		fontFamily: Platform.OS === 'ios' ? 'PingFangSC-Regular' : 'Roboto',
		fontSize: 14,
		lineHeight: 18
	}

})

