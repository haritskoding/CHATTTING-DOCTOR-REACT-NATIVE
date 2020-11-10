import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = ({ type, title, onPress, icon, disable }) => {

    if (type === 'icon-only') {
        return <IconOnly icon={icon} onPress={onPress} />
    } else if (type === "btn-icon-send") {
        return <BtnIconSend disable={disable} icon={icon} />
    } else if (type === "tombol") {
        return (
            <TouchableOpacity
                style={styles.container(type)}
                onPress={onPress}>
                <Text style={styles.text(type)}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity
            style={styles.container(type)}
            onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )


}

export default Button;

const styles = StyleSheet.create({
    container: type => ({
        backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical: 14,
        borderRadius: 10
    }),
    text: type => ({
        fontSize: 18,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: type === 'secondary' ? '#112340' : colors.button.primary.text,
    }),

});


