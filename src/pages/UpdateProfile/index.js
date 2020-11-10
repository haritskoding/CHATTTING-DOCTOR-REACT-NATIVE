
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Input, Header, Profile, Gap } from '../../components'
import { colors } from '../../utils'

const UpdateProfile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove />
                    <Gap height={26} />
                    <Input label="Full Name" />
                    <Gap height={24} />
                    <Input label="Pekerjaan" />
                    <Gap height={24} />
                    <Input label="Email" />
                    <Gap height={24} />
                    <Input label="Password" />
                    <Gap height={40} />
                    <Button
                        onPress={()=>navigation.goBack('UserProfile')}
                        title="edit profile"
                        type="tombol" />
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0,

    }
})
