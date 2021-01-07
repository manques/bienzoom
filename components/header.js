import React from 'react';
import { View, TouchableOpacity, Text, Image, Button, StyleSheet } from 'react-native';

import Logo from '../assets/logo.png';

const Header = props => {
    const onCreate = () => {
        props.onCreate();
    }
    const onStart = () => {
        props.onCreate();
    }
    const onJoin = () => {
        props.onCreate();
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#FFC0CB',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        // alignItems: 'center',
        padding: 20,
        marginBottom: 20
    },
    navItem: {

    }
});

export default Header;