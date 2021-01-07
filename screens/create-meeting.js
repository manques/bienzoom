import React, { useEffect, useState } from 'react';

import { View,
         ActivityIndicator, 
         Text, 
         StyleSheet, 
         Button 
        } from 'react-native';

import axios from 'axios';
import Loader from '../components/loader';
import Message from '../components/message';

// import DatePicker from './datePicker';
import Input from '../components/input';

const userId = "aKXDUTpaQfW36kmQUloAkg";
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjMza0o2eHBYUVBtWkZJU01kcTdZWHciLCJleHAiOjE2NDEzODMzNDAsImlhdCI6MTYwOTg0MjAyMX0.Mv_rtsV9EyodrsTHEhPnZtEGUiiHftwhQt1qrt9wAAQ';

const CreateMeeting = props => {
    
    const  [meetingName, setMeetingName] = useState();
    // const [startTime, setStartTime] = useState();
    const [password, setPassword] = useState();
    const [response, setResponse] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState();
    // axios
    function AddMinutesToDate(date, minutes) {
        return new Date(date.getTime() + minutes * 60000);
    }

    // on back
    const onBack = () =>{
        setMeetingName('');
        setPassword('');
        setIsLoading(false);
        setIsError(false);
        setMessage('');
        props.onMeetingDetails('');
    }
    const onCreateMeeting = () => {
            setIsLoading(true);
            console.log("create meeting");
            console.log(meetingName);
            console.log(password);
                console.log("start");
                 const config = {
                   headers: { 
                     "Authorization": `Bearer ${token}` ,
                     "Content-Type": "application/json"
                   }
                 };
                 const url = `https://api.zoom.us/v2/users/${userId}/meetings`;
                 var d = AddMinutesToDate(new Date(), 30);
                 console.log("++++++ date ---------------");
                 console.log(d);
                 console.log(d.toISOString());
                 const bodyParameters = {
                   "topic": meetingName,
                   "type": "",
                   "start_time": d.toISOString(),
                   "duration": "30",
                   "timezone": "Asia/Calcutta",
                   "password": password,
                   "agenda": "testing",
                   "settings": {
                       "host_video": true,
                       "participant_video": true,
                       "join_before_host": true,
                       "mute_upon_entry": true,
                       "use_pmi": false,
                       "approval_type": 0
                     }
                 }
                console.log("-----------------url----------------");
                console.log(url);
                console.log("----------------body---------------");
                console.log(JSON.stringify(bodyParameters, null, 3));
                console.log("----------------config-------------");
                console.log(JSON.stringify(config, null, 3));
                axios.post( 
                            url,
                            bodyParameters,
                            config
                        )
                        .then(res => {
                            setIsLoading(false);
                            console.log("__________ axios success ________________");
                            console.log(JSON.stringify(res, null, 5));
                            const options = {
                                isStatus: true,
                                message: '',
                                data: {
                                    meetingId: res.data.id,
                                    password: res.data.password
                                }
                            };
                            props.onMeetingDetails(options);
                            return; 
                        }).catch(err => {
                            console.log("__________ axios fail ________________");
                            console.log(err);
                            setMessage(err);
                            setIsLoading(false);
                            setIsError(true);
                            const options = {
                                isStatus: false,
                                message: err.toString(),
                                data: ''
                            };
                            // props.onMeetingDetails(options);
                            return;
                        });
    }
    return (
        <View style={styles.container}>
            {   !isLoading && !isError ? 
                // card
                <View style={styles.card}>
                    {/* title */}
                    <View>
                    <Text style={styles.title}>Create Meeting</Text>
                    </View>
                    <View>
                        {/* meeting name */}
                        <Input placeholder="Meeting Name" 
                        onChange={text => setMeetingName(text)}
                        returnKeyType={'next'}
                        keyboardType={'numberic'}
                        value={meetingName} />
                        {/*  meeting time */}
                        <Input placeholder="Password" 
                        value={password}
                        onChange={text => setPassword(text)}
                        returnKeyType={'next'}
                        keyboardType={'numberic'} />
                        {/* submit */}
                        <Button title="CREATE" 
                                onPress={onCreateMeeting}
                                color="#FF1493"
                                disabled={!password || !meetingName} />
                    
                    </View>
                </View>
                : 
                // card
                (
                    isLoading ? 
                    <View>
                        <Loader />
                    </View>
                    : 
                    <View>
                        <Message onBack={onBack} message={message.toString()} />
                    </View>
                )
            }
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

export default CreateMeeting;