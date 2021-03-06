import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    Header,
    Profile,
    ProfileItem,
    Button,
    Gap
} from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
            <Profile name="Naerobi Putri Hayza" desc="Dokter Anak" />
            <Gap height={10} />
            <ProfileItem label="Alumnus" value="Universitas indonesia 2020" />
            <ProfileItem label="Tempat Prakter" value="Poltekes THT" />
            <ProfileItem label="No. STR" value="0290920392090293" />
            <View style={styles.action}>
                <Button
                    onPress={navigation.navigate('Chat')}
                    title="Start Consultation" />
            </View>

        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 },
    action: { paddingHorizontal: 40, paddingTop: 23 }
})
