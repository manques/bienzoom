import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import CreateMeeting from '../screens/create-meeting';
import StartMeting from '../screens/start-meeting';
import JoinMeeting from '../screens/join-meeting';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "Create" component = {CreateMeeting} title = "Create" initial = {true} />
         <Scene key = "Start" component = {StartMeting} title = "Start" />
         <Scene key = "Join" component = {JoinMeting} title = "Join" />
      </Scene>
   </Router>
)
export default Routes;