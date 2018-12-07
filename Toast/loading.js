import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    View
} from 'react-native';

// import RootSiblings from 'react-native-root-siblings'
// import LottieView from 'lottie-react-native'
// let sibling

// addLoading = (title) => {
//     sibling = new RootSiblings(
//         <View style={styles.containView}>
//             <View style={styles.loadingView}>
//                 <LottieView
//                     source={require('./src/ic_loadingfind.json')}
//                     style={{ width: 80, height: 80 }}
//                     autoPlay
//                     loop
//                     speed={1.5}
//                 />
//             </View>
//             <Text style={styles.loadingText}>玩命加载中</Text>
//         </View>)
//     return sibling
// }

// export const Loading = () => {
//     addLoading()
// }

// export const StopLoading = () =>{
//     sibling.destroy()
// }

// const styles = StyleSheet.create({
//     containView: {
//         position: 'absolute',
//         top: 0,
//         height: Dimensions.get('window').height,
//         width: Dimensions.get('window').width,
//         alignItems: 'center',
//         justifyContent: 'center',
//         // opacity: 0.7,
//         backgroundColor: '#00000088',
//     },
//     toastView: {
//         paddingVertical: 12,
//         paddingHorizontal: 10,
//         backgroundColor: '#000000',
//         opacity: 0.7,
//         borderRadius: 8
//     },
//     toastText: {
//         fontSize: 17,
//         color: 'white'
//     },
//     loadingView: {
//         width: 100,
//         height: 100,
//         borderRadius: 6,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'white'
//     },
//     loadingText: {
//         color: 'white',
//         fontSize: 17,
//         marginTop: 15
//     }
// });