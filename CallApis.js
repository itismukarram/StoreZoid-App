import {View, Text} from 'react-native';
import React from 'react';
import {getApiCall, postApiCall} from './ApiCalls';
import {allstyles} from './AllStyles';

const CallApis = () => {
  const getData = () => {
    getApiCall('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res);
    });
  };
  const postData = () => {
    const data = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    };
    postApiCall('https://fakestoreapi.com/products', data).then(res => {
      console.log(res);
    });
  };
  return (
    <View
      style={[
        allstyles.container2,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Text
        style={{fontSize: 30}}
        onPress={() => {
          //getData();
          postData();
        }}>
        CallApis
      </Text>
    </View>
  );
};

export default CallApis;
