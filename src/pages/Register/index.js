import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Input, Link, Button, Header, Gap, Loading } from '../../components'
import { Fire } from '../../config'
import { showMessage, hideMessage } from 'react-native-flash-message'

import { colors, useForm } from '../../utils'


const Register = ({ navigation }) => {

    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false)

    const onContinue = () => {
        console.log(form);
       
        setLoading(true);
        Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                setLoading(false)
                setForm('reset');
                console.log('register success: ', success);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoading(false)
                showMessage({
                    message: errorMessage,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            });
    }


    return (
        <>
            <View style={styles.page}>
                <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <Input
                            label="Full Name"
                            value={form.fullName}
                            onChangeText={value => setForm('fullName', value)}
                        />
                        <Gap height={24} />
                        <Input
                            label="Pekerjaan"
                            value={form.profession}
                            onChangeText={value => setForm('profession', value)}
                        />
                        <Gap height={24} />
                        <Input
                            label="Email"
                            value={form.email}
                            onChangeText={value => setForm('email', value)}
                        />
                        <Gap height={24} />
                        <Input
                            label="Password"
                            value={form.password}
                            onChangeText={value => setForm('password', value)}
                        //  secureTextEntry
                        />
                        <Gap height={40} />
                        <Button
                            title="Continue"
                            onPress={onContinue} />
                    </View>

                </ScrollView>
            </View>
            {loading && <Loading />}

        </>
    )
}
export default Register
const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 },
    content: { padding: 40, paddingTop: 0 }
})
