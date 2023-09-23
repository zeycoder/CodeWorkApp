import { StyleSheet, Text, TouchableWithoutFeedback, View,Button } from 'react-native'
import React from 'react'
import styles from './JobsCard.style'

const JobsCard = ({item, onPressCard, name, onPressButton }) => {
  return (
    <TouchableWithoutFeedback onPress={onPressCard} >
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.title}>{item.name} </Text>
        <Text style={styles.company}>{item.company.name} </Text>
        <Text style={styles.location}>{item.locations[0].name}</Text>
        <Text style={styles.level}>{item.levels[0].name} </Text>
        {
          name=='FavoriteJobsScreen'
          ?<Button title="Favorilerden Sil" color='#ff6655' onPress={onPressButton}/>
          :null
        }
        
      </View>
    </TouchableWithoutFeedback>
  )
}

export default JobsCard;
