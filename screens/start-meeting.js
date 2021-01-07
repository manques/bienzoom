import React, { useEffect, useState } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import Input from '../components/input';
import { startMeeting } from '../nativeModules/AwesomeZoomSDK';

import { Config } from '../constants/config';

const StartMeeting = props => {
    const [meetingNo, setMeetingNo] =  useState();
    const [username, setUsername] = useState();
    const [userId, setUserId] = useState();

    useEffect(() => {
        console.log(Config.jwtAccessToken);
        console.log(Config.jwtApiSecret);
        console.log('******************* view meeeting start *********************');
        console.log(props);
    });
    const onStartMeeting = () => {
        const options = {
            meetingNo: meetingNo ? meetingNo : Config.meetingNo.toString(),
            username: username ? username: 'guest',
            userId: userId ? userId: Config.userId,
            jwtApiKey: Config.jwtApiKey,
            apiSecretKey: Config.jwtApiSecret
        };
        
        console.log(options);
        startMeeting(options.meetingNo, 
                    options.username, 
                    options.userId, 
                    options.jwtApiKey, 
                    options.apiSecretKey
                    );
    }
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                {/* title */}
                <View>
                    <Text style={styles.title}>Starting Meeting</Text>
                </View>
                {/* form container */}
                <View>
                    {/* username */}
                    <Input  placeholder="Display Name(guest)" 
                            onChange={text => setUsername(text)}
                            value={username ? username  : ''}
                            // returnKeyType={'next'}
                            // keyboardType={'numberic'} 
                            />
                    {/* meeting number */}
                    <Input  placeholder="*Meeting Number" 
                            onChange={text => setMeetingNo(text)}
                            // returnKeyType={'next'}
                            // keyboardType={'numberic'}
                            value={ meetingNo ? meetingNo  : (props.meetingView ? (props.meetingView.meetingId).toString(): '')} />
                    {/* submit start meeting */}
                    <Button title ="START HOSTING" 
                            color="#FF1493"
                            disabled={!(meetingNo ? true : false || (props.meetingView ? true: false))}
                            onPress={onStartMeeting}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 0,
        marginBottom: 50
    },
    card: {
        backgroundColor: '#FFC0CB',
        // flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 20,
        // alignItems: 'center',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        // shadowRadius: 2,  
        elevation: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "700",
        paddingVertical: 20,
        color: '#FF1493'
    }
});

export default StartMeeting;