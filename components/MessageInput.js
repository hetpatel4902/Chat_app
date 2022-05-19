import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.warn(message);
    setMessage('');
  };
  const onPlusClicked = () => {
    console.warn('pressed');
  };
  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 8,
          backgroundColor: '#ededed',
          height: 38,
          borderRadius: 18,
          marginRight: 8,
          paddingHorizontal: 6,
        }}>
        <Octicons name="smiley" size={19} style={{marginHorizontal: 5}} />
        <TextInput
          style={{flex: 1, fontFamily: 'OpenSans-Medium'}}
          value={message}
          onChangeText={setMessage}
          placeholder="Type Message..."
        />
        <Ionicons name="ios-camera-outline" size={22} />
        <MaterialCommunityIcons
          name="microphone-outline"
          size={22}
          style={{marginHorizontal: 5}}
        />
      </View>
      <Pressable
        onPress={onPress}
        style={{
          backgroundColor: '#3777f0',
          justifyContent: 'center',
          alignItems: 'center',
          width: 40,
          flex: 1,
          height: 38,
          borderRadius: 20,
        }}>
        {message ? (
          <Ionicons name="send" size={18} color={'white'} />
        ) : (
          <Feather name="plus" size={21} color={'white'} />
        )}
      </Pressable>
    </View>
  );
};

export default MessageInput;
