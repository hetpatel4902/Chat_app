import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './navigation/index';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Navigation />
    </View>
  );
};

export default withAuthenticator(App);
