import React from 'react'
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import {windowHeight,windowHeigth} from '../utils/Dimensions'

 const SocialButton = ({buttonTitle,btnType,...rest}) => {

   
        return (
            <TouchableOpacity  onPress = {onPress} 
              {...rest}  >
                <View style={styles.button} > 
                    
                </View>
            </TouchableOpacity>
        )
    };

    export default SocialButton

    const styles = StyleSheet.create({
        button :{
            borderRadius : 8,
            paddingVertical : 14,
            paddingHorizontal : 10,
            backgroundColor : '#067B25',
            width : 300,
            marginTop : 10,
            


        },
        buttonText :{
             color:'white',
             fontWeight:'bold',
             textTransform : 'uppercase',
             fontSize : 16,
             textAlign : 'center',
        },
    })