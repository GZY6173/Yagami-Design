/**
 * Created by zhongzihuan on 2017/7/27.
 * 平台兼容处理工具类
 */
import { Platform, Dimensions } from 'react-native'

// 屏幕大小比例
const DEVICE_WIDTH_DP = Dimensions.get('window').width
const DEVICE_HEIGHT_DP = Dimensions.get('window').height

export default class PlatformUtils {

	/**
	 * 判断是否为iphonex
	 * @returns {boolean}
	 */
    static isIphoneX = () => {
        let isX = PlatformUtils.isIOS() && DEVICE_WIDTH_DP === 375 && DEVICE_HEIGHT_DP === 812
        let isXR = PlatformUtils.isIOS() && DEVICE_WIDTH_DP === 414 && DEVICE_HEIGHT_DP === 896
        return isX || isXR
    }

	/**
	 * web
	 * @returns {boolean}
	 */
    static isWeb = () => {
        if (Platform.OS == 'web') {
            return true
        } else {
            return false
        }
    }

	/**
	 * 判断当前系统是否为android
	 * @returns {boolean}
	 */
    static isAndroid = () => {
        if (Platform.OS == 'android') {
            return true
        } else {
            return false
        }
    }

	/**
	 * 判断当前系统是否为IOS
	 * @returns {boolean}
	 */
    static isIOS = () => {
        if (Platform.OS == 'ios') {
            return true
        } else {
            return false
        }
    }

}
