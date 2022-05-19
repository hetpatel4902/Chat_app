import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ChatRoomItem = ({chatRoom}) => {
  const user = chatRoom.users[1];
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ChatRoom', {id: chatRoom.id});
  };
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        marginHorizontal: 9,
      }}
      onPress={onPress}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: user.imageUri}}
          style={{height: 62, width: 62, borderRadius: 35}}
        />
        {chatRoom.newMessages && (
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#3777f0',
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              left: 50,
              top: 5,
              borderWidth: 1,
              borderColor: 'white',
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'OpenSans-Medium',
                margin: 1,
                marginHorizontal: 6,
              }}>
              {chatRoom.newMessages}
            </Text>
          </View>
        )}
      </View>
      <View style={{flex: 4}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'OpenSans-SemiBold',
                color: 'black',
                fontSize: 14,
              }}>
              {user.name}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: 'grey',
                fontFamily: 'OpenSans-Regular',
                fontSize: 12,
              }}>
              {chatRoom.lastMessage.createdAt}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 4}}>
          <Text
            numberOfLines={1}
            style={{
              color: 'black',
              fontFamily: 'OpenSans-Regular',
              fontSize: 13,
            }}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ChatRoomItem;
