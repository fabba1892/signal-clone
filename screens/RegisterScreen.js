import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('')

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal Account
            </Text>

            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autofocus type="text" />
            </View>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen

const styles = StyleSheet.create({
    container: {},
    inputContainer: {},
});
