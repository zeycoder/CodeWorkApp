import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavoriteJobsCard = ({item, onPress}) => {
  return (
    <View>
      <Text>{item.id}</Text>
      <Button title="Favorilerden Sil" onPress={onPress}/>
    </View>
  )
}

export default FavoriteJobsCard