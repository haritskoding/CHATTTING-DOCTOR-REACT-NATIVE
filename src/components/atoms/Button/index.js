import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Button({ type, title, onPress }) {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: type => ({
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
        paddingVertical: 14,
        borderRadius: 10
    }),
    text: type => ({
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center',
        color: type === 'secondary' ? '#112340' : 'white',
    }),

});