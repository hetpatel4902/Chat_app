import {View, Text} from 'react-native';
import React from 'react';

const myID = 'u1';
const Message = ({message}) => {
  const isMe = message.user.id === myID;
  return (
    <View
      style={{
        backgroundColor: isMe ? 'lightgrey' : '#3777f0',
        margin: 10,
        borderRadius: 12,
        maxWidth: '75%',
        marginLeft: isMe ? 'auto' : 10,
        padding: 10,
        marginRight: isMe ? 10 : 'auto',
      }}>
      <Text
        style={{
          color: isMe ? 'black' : 'white',
          fontFamily: 'OpenSans-Medium',
        }}>
        {message.content}
      </Text>
    </View>
  );
};

export default Message;
