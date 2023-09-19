import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import styles from './JobsCard.style'

const JobsCard = ({item, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.title}>{item.name} </Text>
        <Text style={styles.company}>{item.company.name} </Text>
        <Text style={styles.location}>{item.locations[0].name}</Text>
        <Text style={styles.level}>{item.levels[0].name} </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default JobsCard;
