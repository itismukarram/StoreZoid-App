import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';

const ImageLazyLoading = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
      });
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <View>
              {/* <Image
                onLoadStart={() => {}}
                source={{uri: item.thumbnailUrl}}
                style={{width: Dimensions.get('window').width, height: 100}}
              /> */}
              <FastImage
                style={{width: Dimensions.get('window').width, height: 100}}
                source={{
                  uri: item.thumbnailUrl,

                  priority: FastImage.priority.normal,
                }}
                defaultSource={require('./src/images/placeholder.jpeg')}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ImageLazyLoading;
