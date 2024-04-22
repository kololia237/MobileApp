import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleRegister = () => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        setName("");
        setEmail("");
        setPassword("");
        setPassword2("");
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>

                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ім'я"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Введіть пароль"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Введіть пароль ще раз"
                    value={password2}
                    onChangeText={setPassword2}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    formContainer: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginHorizontal: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,

        // https://ethercreative.github.io/react-native-shadow-generator/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#4CAD3B",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        margin: 15,
        fontWeight: 'bold',
    },
});

export default Registration;
