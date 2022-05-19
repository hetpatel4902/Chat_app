import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import chatRoomData from '../dummy-data/Chats';
import {useRoute, useNavigation} from '@react-navigation/native';

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  navigation.setOptions({title: 'Biren Bhavi'});
  console.warn(route.params?.id);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({item}) => <Message message={item} />}
        showsVerticalScrollIndicator={false}
        inverted
        style={{backgroundColor: 'white'}}
      />
      <MessageInput />
    </View>
  );
};

export default ChatRoomScreen;
