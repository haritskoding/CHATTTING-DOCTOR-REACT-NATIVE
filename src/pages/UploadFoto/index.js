import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts } from '../../utils'

const UploadFoto = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Upload Photo" />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Shayna Melinda</Text>
                    <Text style={styles.profession}>Produk Designer</Text>
                </View>

                <View>
                    <Button
                        onPress={() => navigation.replace('MainApp')}
                        title="Upload and Continue" />
                    <Gap height={30} />
                    <Link
                        title="Skip for this"
                        align="center" size={16}
                        onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>

        </View>
    )
}

export default UploadFoto;

const styles = StyleSheet.create({
    page: { flex: 1, backgroundColor: colors.white },
    content: {
        flex: 1,
        paddingHorizontal: 40,
        paddingBottom: 64,
        justifyContent: 'space-between'

    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    avatar: { width: 110, height: 110 },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,

        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'

    },
    addPhoto: {
        position: 'absolute', bottom: 8, right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        marginTop: 4,
        color: colors.text.secondary,
    },

})
