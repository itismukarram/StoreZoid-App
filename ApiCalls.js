import {StyleSheet} from 'react-native';

export const getApiCall = async url => {
  const res = await fetch(url);
  const finalRes = await res.json();
  return finalRes;
};
export const postApiCall = async (url, data) => {
  const res = await fetch(url, {method: 'post', body: JSON.stringify(data)});
  const finalRes = await res.json();
  console.log('final' + JSON.stringify(finalRes));
  return finalRes;
};
