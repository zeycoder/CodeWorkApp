import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import styles from './JobsCard.style'

const JobsCard = ({jobs, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.title}>{jobs.name} </Text>
        <Text style={styles.company}>{jobs.company.name} </Text>
        <Text style={styles.location}>{jobs.locations[0].name}</Text>
        <Text style={styles.level}>{jobs.levels[0].name} </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default JobsCard;
