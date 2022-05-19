import {
  View,
  Text,
  ActivityIndicator,
  Image,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const width = Dimensions.get('window').width;
const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{headerTitle: HomeHeader}}
        />
        <Stack.Screen
          component={ChatRoomScreen}
          name="ChatRoom"
          options={{
            headerTitle: ChatRoomHeader,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ChatRoomHeader = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 50,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
          }}
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            position: 'absolute',
            left: -25,
          }}
        />
        <Text
          style={{
            fontFamily: 'OpenSans-Medium',
            color: 'black',
            fontSize: 16,
            marginLeft: 10,
          }}>
          {props.children}
        </Text>
      </View>
      <View
        style={{
          width: width / 2,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Ionicons
          name="ios-camera-outline"
          size={22}
          color={'black'}
          style={{position: 'absolute', right: -30}}
        />
        <MaterialCommunityIcons
          name="pencil-outline"
          size={22}
          color={'black'}
          style={{position: 'absolute', right: -60}}
        />
      </View>
    </View>
  );
};

const HomeHeader = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
      }}>
      <View
        style={{
          width: width / 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
          }}
          style={{height: 30, width: 30, borderRadius: 15}}
        />
        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            color: 'black',
            fontSize: 18,
            alignSelf: 'center',
          }}>
          Chat
        </Text>
      </View>
      <View
        style={{
          width: width / 2,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Ionicons
          name="ios-camera-outline"
          size={22}
          color={'black'}
          style={{marginLeft: 110}}
        />
        <MaterialCommunityIcons
          name="pencil-outline"
          size={22}
          color={'black'}
          style={{marginLeft: 10}}
        />
      </View>
    </View>
  );
};

export default index;
