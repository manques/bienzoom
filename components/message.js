import React from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';

const Message = props => {
    return (
        <View style={styles.container}> 
            <Text style={styles.message}>{props.message ? props.message : ''}</Text>
            <TouchableOpacity style={styles.backContainer}
                              onPress={props.onBack}>
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    message: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: 'red'
    },
    backContainer: {
        padding: 10,
        margin: 20
    },
    back:{
        color: '#FF1493',
        fontWeight: '700',
        fontSize: 20
    }
});

export default Message;

