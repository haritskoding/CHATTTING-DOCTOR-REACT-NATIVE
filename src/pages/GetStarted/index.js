import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button } from '../../components'

export default function index() {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo />
                <Text style={styles.title}> Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>

            <View>
                <Button title="Get Started" />
                <View style={{ heeight: 16 }} />
                <Button type="secondary" title="Sign In" />
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: "space-between",
        backgroundColor: "white",
        flex: 1
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        color: "white",
        marginTop: 91
    }

})
