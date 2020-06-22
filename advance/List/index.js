import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native'
import Icon from '../../basic/Icon'

const Dp = (px) => {
    return px * Dimensions.get('window').width / 750
}

export default class List extends React.Component {
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
        let { options, list } = this.props
        let { width, backgroundColor } = options
        return (
            <View style={[styles.container, { width: width, backgroundColor: backgroundColor }]}>
                {list.map((item, i) => this.listItem(item, i))}
            </View>
        )
    }

    listItem = (item, i) => {
        let { width, height, backgroundColor } = this.props.options
        let { title, onPress } = item
        return (
            <>
                <TouchableOpacity
                    style={[styles.itemView, { width: width, height: height, backgroundColor: backgroundColor }]}
                    key={i}
                    onPress={onPress}
                >
                    <Text style={styles.leftText}>{title}</Text>
                    <Icon name={'arrowright'} color={'#999999'} size={14} />
                </TouchableOpacity>
                {i < this.props.list.length - 1 &&
                    <View style={styles.lineView}>
                        <View style={[styles.line, { width: width - Dp(24) }]} />
                    </View>
                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        overflow: 'hidden'
    },
    itemView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Dp(24)
    },
    leftText: {
        fontSize: Dp(28),
        color: '#3C464F',
        fontWeight: 'bold',
    },
    lineView: {
        alignItems: 'flex-end'
    },
    line: {
        height: 1,
        backgroundColor: '#f2f3f5'
    }
})