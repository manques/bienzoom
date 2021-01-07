import React from 'React';

import { View, StyleSheet } from 'react-native';

const Card = props => {
    return(
        <View style={styles.card}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {

    }
});


export default Card;