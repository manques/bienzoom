import React from 'react';

import { Button, View, StyleSheet } from 'react-native';

const ButtonInput = props => {
    return (
        <Button style={style.button} 
                title={props.title} />
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 40
    }
});


export default ButtonInput;