import {View, Text, Pressable, FlatList} from 'react-native';
import React from 'react';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRooms from '../dummy-data/ChatRooms';
import {Auth} from 'aws-amplify';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ChatRooms}
        renderItem={({item}) => <ChatRoomItem chatRoom={item} />}
      />
      <Pressable onPress={() => Auth.signOut()}>
        <Text>logout</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
