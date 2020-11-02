import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconDoctor, IconDoctorActive, IconHospital, IconHospitalActive, IconMessages, IconMessagesActive } from '../../../assets/icon/action'
import { colors, fonts } from '../../../utils'

const TabItem = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <IconDoctorActive /> : <IconDoctor />
        }
        else if (title === 'Messages') {
            return active ? <IconMessagesActive /> : <IconMessages />
        }
        else if (title === 'Hospitals') {
            return active ? <IconHospitalActive /> : <IconHospital />
        }
        else { return <IconHospital /> }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)} > {title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => (
        {
            fontSize: 10,
            color: active ? colors.text.menuActive : colors.text.menuInActive,
            fontFamily: fonts.primary[600]
        }
    )
})
