import { StyleSheet, Text, TouchableWithoutFeedback, View,Button, TouchableNativeFeedbackComponent, TouchableOpacity } from 'react-native'
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
          ?<TouchableOpacity style={styles.button} title="Favorilerden Sil" onPress={onPressButton}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
          :null
        }
        
      </View>
    </TouchableWithoutFeedback>
  )
}

export default JobsCard;
