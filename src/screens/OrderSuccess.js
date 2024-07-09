import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrderSuccess = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../images/checked.png')} style={styles.icon} />
      <Text style={styles.msg}>Order Placed Successfully...</Text>
      <Text
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Main');
        }}>
        Go TO Home
      </Text>
    </SafeAreaView>
  );
};

export default OrderSuccess;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
  msg: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
  btn: {
    padding: 10,
    borderWidth: 1,
    color: '#000',
    marginTop: 20,
  },
});
