import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'

const Profile = (props) => {
    return (
        <SafeAreaView 
        style = {styles.container}
        >
            <Text>Profile Screen</Text>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ECFAED',
        flex : 1,
        alignItems: 'center',
        resizeMode : 'cover',
        paddingTop :50
    }
})