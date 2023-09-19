import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import JobsCard from '../JobsCard/JobsCard'
import styles from './FavoriteJobsCard.style';

const FavoriteJobsCard = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <JobsCard item={item} />
      <Button title="Favorilerden Sil" onPress={onPress}/>
    </View>
  )
}

export default FavoriteJobsCard