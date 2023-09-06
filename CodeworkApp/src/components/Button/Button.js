import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Buttons = ({onPress, title, iconName}) => {
  return (
    <TouchableOpacity onPress={onPress}style={styles.btn}>
      <Icon name={iconName} size={20} color='white' regular />
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Buttons ;