/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  // AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
  Image,
  Button,
  Text,
  StatusBar
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { initZoom, joinMeeting, startMeeting } from './nativeModules/AwesomeZoomSDK';

// import Routes from './routes/routes'

import Input from './components/input';
import Header from './components/header';
import ButtonInput from './components/buttonInput';
import CreateMeeting from './screens/create-meeting';
import StartMeeting from './screens/start-meeting';
import JoinMeeting from './screens/join-meeting';
import Loader from './components/loader';

const ZOOM_CONFIG = {
  ZOOM_PUBLIC_KEY : "gjraID6RGwagmxxGGI0L0n2HMBLmIlbsgSZr",
  ZOOM_PRIVATE_KEY: "QiDz4naSn4hcT6PFdMjSfvjH58g5PBV6rdYV",
  ZOOM_DOMAIN: "zoom.us",
  JWT_API_KEY:"33kJ6xpXQPmZFISMdq7YXw",
  JWT_API_SECRET_KEY: "qWLNxWv00azsPqEpsPxnc8GZ3Dgv4DCns6zm",
  JWT_ACCESS_TOKEN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IjMza0o2eHBYUVBtWkZJU01kcTdZWHciLCJleHAiOjE2MDkzMjA4MjksImlhdCI6MTYwOTMxNTQzMH0.8XwL2-J7-ffRgLNWAz7BcBLKNVlZw4LdGxyIz3QwXn8"
}

const meetingNoj = "7486693921";
const pwd = "eFlGZU42dVRSbEU0QUhOc3lmL3dXdz09";
const userId = "aKXDUTpaQfW36kmQUloAkg";
const username = "anup.soft.bit@gmail.com";


const App: () => React$Node = () => {
  const [isNav, setIsNav] = useState('create');
  const [isModalVisiable, setIsModalVisible] = useState(false);
  const [meetingView, setMeetingView] = useState();
  const [emptyElement, setEmptyElement] = useState();
  // onMeetingdetails
  const onMeetingDetails =  (res) => {
    console.log("pppppppppppppppppppppppppppp prity pppppppppppppppppppppppppp");
    console.log(JSON.stringify(res, null, 5));
    if(res.isStatus == true){
      let options = {
        meetingId: res.data.meetingId,
        password: res.data.password
      };
      console.log("----------options-----------");
      console.log(options);
      options = JSON.parse(JSON.stringify(options));
      console.log(options);
      setMeetingView(options);
      setMeetingView(current =>{
        console.log('---prev----');
        console.log(current);
        onOpenPopup();
        return current;
      });
      console.log("****************** view *************************");
      console.log(meetingView);
      if(meetingView) {
        onOpenPopup();
      }
    }
  }
  // open popup
  const onOpenPopup = () => {
    console.log('--------------open----------------');
    setIsModalVisible(true);
  }
  // close popup 
  const onClosePopup = () => {
    console.log('--------------CLOSE----------------');
    setIsModalVisible(false);
    setIsNav('start');
  }
  // let customRoutes; 
  useEffect(() => {
    // console.log("start init Zoom");
    // console.log(meetingNo);
    initZoom(ZOOM_CONFIG.ZOOM_PUBLIC_KEY, ZOOM_CONFIG.ZOOM_PRIVATE_KEY, ZOOM_CONFIG.ZOOM_DOMAIN);
    // setIsCreate(true);
    console.log('******************* view meeeting *********************');
    console.log(meetingView);
    setEmptyElement();
  }, [ZOOM_CONFIG]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView class="safeAreaView"
                    style={styles.scrollAreaView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.header}>
              {/* cerate */}
            <TouchableOpacity style = {isNav == 'create' ? styles.activeNavItem : styles.navItem} 
                              onPress = { () => setIsNav('create')}>
                 <Text style={styles.item}>Create</Text>
            </TouchableOpacity>
            {/* cerate */}
            <TouchableOpacity style = {isNav == 'start' ? styles.activeNavItem : styles.navItem}  
                              onPress = { () => setIsNav('start')}>
                 <Text style={styles.item}>Start</Text>
            </TouchableOpacity>
            {/* cerate */}
            <TouchableOpacity style = {isNav == 'join' ? styles.activeNavItem : styles.navItem} 
                              onPress = {() => setIsNav('join')}>
                 <Text style={styles.item}>Join</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
          
          <Header />
            
            {
              // create
              isNav == 'create' ? <CreateMeeting onMeetingDetails={onMeetingDetails} /> : emptyElement
            }
            {
              // start
              isNav == 'start' ? <StartMeeting meetingView={meetingView} /> : emptyElement
            }
            {
              // join 
              isNav == 'join' ? <JoinMeeting meetingView={meetingView} /> : emptyElement
            }



            {/* popup */}
            <View style={styles.popupContainer}>
              <Modal 
                    //  style={styles.modal}
                     animationType="slide"
                     transparent={true}
                     visible={isModalVisiable}
                    //  onRequestClose={() => {
                    //    Alert.alert("Modal has been closed.");
                    //  }}
                     >
                <View style={styles.popupBox}>
                  <View style={styles.card}>
                      {/* close */}
                      <TouchableOpacity style={styles.close}
                                        onPress={onClosePopup}>
                        <Text style={styles.closeText}>X</Text>
                      </TouchableOpacity>
                      {/* title */}
                      <View>
                        <Text style={styles.title}>Created Meeting</Text>
                      </View>
                      {/* meeting */}
                      <View style={styles.object}>
                        <Text style={styles.key}>Meeting Number</Text>
                        <Text style={styles.value}>{meetingView ? meetingView.meetingId: ''}</Text>
                      </View>
                      {/* password */}
                      <View style={styles.object}>
                        <Text style={styles.key}>Password</Text>
                        <Text style={styles.value}>{meetingView ? meetingView.password : ''}</Text>
                      </View>
                      {/* note */}
                      <View style={styles.note}>
                        <Text style={styles.noteKey}>Note: </Text>
                        <Text style={styles.noteValue}>Please write id and password.</Text>
                      </View>
                  </View>
                </View>
              </Modal>
            </View>
            {/* popup end */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    
  },
  modal: {
    
  },
  popupBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#FFC0CB',
    opacity: 0.9,
    padding: 40,
    position: 'relative',
    zIndex: 1000
  },
  close: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: '#FF1493',
    // paddingVertical: 10,
    // paddingHorizontal: 18,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40
  },
  closeText: {
    color: 'white',
    fontSize: 20
  },
  title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "700",
        paddingVertical: 20,
        color: '#FF1493'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB'
  },
  object: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  key: {
    fontSize: 15,
    fontWeight: '700'
  },
  value: {
    fontSize: 15,
    fontWeight: '700'
  },
  note: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  noteKey: {
    fontSize: 15,
    fontWeight: '900',
    color: 'gray'
  },
  noteValue: {
    fontSize: 15,
    fontWeight: '700',
    color: 'gray'
  },
  scrollView: {
    // backgroundColor: Colors.lighter,
    // backgroundColor: 'red'
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    justifyContent: 'space-around',
    padding: 10,
    minHeight: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    // backgroundColor: 'red'
  },
  navItem: {
    backgroundColor: '#ff63b9',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30
  },
  item: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600'
  },
  activeNavItem: {
    backgroundColor: '#FF1493',
    // backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30
  },
  card: {
    backgroundColor: '#FFC0CB',
    opacity: 1,
    // flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 20,
    // alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    // shadowRadius: 2,  
    elevation: 5,
    width: '100%'
  },
  image: {
    marginBottom: 20,
    alignSelf: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    marginVertical: 50
  },
  empty: {
    display: 'none',
    height: '0%',
    width: '0%',
    padding: 0,
    margin: 0
  }
});

export default App;
// AppRegistry.registerComponent('App', () => App)
