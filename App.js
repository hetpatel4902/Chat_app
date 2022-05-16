import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <View>
      <MaterialIcons name="shopping-basket" size={28} />
      <Text style={{fontFamily: 'OpenSans-Bold'}}>Hello</Text>
    </View>
  );
};

export default App;
