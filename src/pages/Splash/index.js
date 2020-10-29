import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ILLogo } from '../../assets'

export default function Splash() {
    return (
        <View
            style={styles.page}
        >
            <ILLogo />
            <Text
                style={styles.title}
            >
                Aris Dokter
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: '#112340',
        marginTop: 20
    }
})