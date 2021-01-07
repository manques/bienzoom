import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

const Loader = props => {
    return (
        <View style={styles.container}>
            <ActivityIndicator  size="large" color="#FF1493" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    loader: {

    }
});
export default Loader;