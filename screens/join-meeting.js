import React, { useEffect, useState } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import Input from '../components/input';
import { joinMeeting } from '../nativeModules/AwesomeZoomSDK';

import { Config } from '../constants/config';

const JoinMeeting = props => {
    const [ meetingNo, setMeetingNo] = useState();
    const [ name, setName] = useState();
    const [ password, setPassword] = useState();

    useEffect(() => {
        console.log(Config.jwtAccessToken);
        console.log(Config.jwtApiSecret);
        console.log('******************* view meeeting join *********************');
        console.log(props);
    });
    const onJoinMeeting = () => {
        const options = {
            meetingNo: meetingNo ? meetingNo : '7486693921',
            name: name ? name: 'guest',
            password: password ? password: 'eFlGZU42dVRSbEU0QUhOc3lmL3dXdz09',
        };
        
        console.log(options);
        console.log('teesting[[[[[[[[[[[[[[[[');
        joinMeeting(options.name,
                    options.meetingNo,  
                    options.password
                    );
    }
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                {/* title */}
                <View>
                    <Text style={styles.title}>Join Meeting</Text>
                </View>
                {/* <Image style={styles.image} source={require('../assets/join_meeting.png')} /> */}
                    <Input placeholder="Display Name(guest)" 
                        onChange={text => setName(text)}
                        value={name}
                            />
                    <Input placeholder="*Meeting Number" 
                        onChange={text => setMeetingNo(text)}
                        // returnKeyType={'next'}
                        // keyboardType={'numberic'} 
                        value={meetingNo ? meetingNo : (props.meetingView ? (props.meetingView.meetingId).toString() : '')}
                        />
                    <Input placeholder="*Meeting Password" 
                           onChange={text => setPassword(text)}
                           value={password ? password  : (props.meetingView ? props.meetingView.password : '')}
                        />

                    {/* join meeting Button */}
                    <Button title ="JOIN"
                            disabled={ !((meetingNo ? true : false) || 
                                         (password ? true: false) || 
                                         (props.meetingView ? true: false)) } 
                            color="#FF1493"
                            width="100%"
                            onPress={onJoinMeeting}/>

             
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

export default JoinMeeting;