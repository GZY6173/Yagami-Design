/**
 * visible             对话框是否可见       bool
 * close               关闭事件            function
 * title               标题                string
 * contain             内容                React.Element
 * bottom              底部内容            Array
 */
import React, { Component } from 'react'
import {StyleSheet,View,TouchableOpacity,Modal,StatusBar,Text,Platform} from 'react-native'
import Dimens from '../../../../api/core/library/dimens'

export default class ModalAlert extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	static defaultProps = {
		androidBackClosable: true,
		bottom: [{
			title: '确定',
			onPress: () => console.log('点击按钮')
		}]
	}

	close = () => {
		if (this.props.close) {
			this.props.close()
		} else {
			console.log('必须实现这个方法')
		}
	}

	render() {
		let { visible, androidBackClosable } = this.props
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
				<View style={styles.modalView}>
					{this.renderContain()}
				</View>
			</Modal>
		)
	}

	renderContain() {
		let { title, contain, bottom } = this.props
		return (
			<View style={styles.containView}>
				{!!title &&
					<View style={styles.titleView}>
						<Text style={styles.titleText}>{title}</Text>
					</View>
				}
				<View style={[styles.middleView, { paddingTop: title ? Dimens.p20 : Dimens.p40 }]}>
					{typeof contain === 'string' ?
						<Text style={styles.containText}>{contain}</Text>
						:
						contain()
					}
				</View>
				<View style={styles.bottomView}>
					{bottom instanceof Array && bottom.map((item, i) => this.bottomIndex(item, i))}
				</View>
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
					backgroundColor: i === 0 ? '#ED7100' : '#ECE9E6'
				}]}
				onPress={() => item.onPress()}
				activeOpacity={0.9}
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
		backgroundColor: 'rgba(0,0,0,0.8)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	containView: {
		width: Dimens.p570,
		backgroundColor: '#ffffff00',
		borderRadius: Dimens.p12,
		paddingBottom: Dimens.p88,
		overflow: 'hidden',
		backgroundColor:Platform.OS === 'android'?'white':'#00000000'
	},
	titleView: {
		width: Dimens.p570,
		paddingHorizontal: Dimens.p40,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		paddingVertical: Dimens.p20,
		borderBottomWidth: Dimens.p2,
		borderBottomColor: '#E3E3E3'
	},
	titleText: {
		fontSize: Dimens.p34,
		color: '#423F3D',
		lineHeight: Dimens.p48,
		fontFamily: 'PingFangSC-Regular'
	},
	middleView: {
		width: Dimens.p570,
		paddingHorizontal: Dimens.p40,
		backgroundColor: '#ffffff',
		paddingTop: Dimens.p20,
		paddingBottom: Dimens.p40,
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
	}
})
