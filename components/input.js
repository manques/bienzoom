import React, { useState, useEffect } from 'react';

import { View, TextInput, StyleSheet } from 'react-native';

const Input = props => {
    // const [value, setValue ] = useState('');
    onChangeValue = text => {
        // setValue(text => text);
        props.onChange(text);
    }
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} 
                       placeholder={props.placeholder}
                       onChangeText={ onChangeValue }
                       value={props.value ? props.value  : ''}
                        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 40
    }
});

export default Input;