import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const FavoriteJobs = () => {
  const favoriteJobsList = useSelector(s => s.favoriteJobList); 
  return (
    <View>
      <FlatList keyExtractor={(_,index)=>index.toString()} data={favoriteJobsList} renderItem={({item})=><Text>{item.id}</Text>} />
    </View>
  )
}

export default FavoriteJobs;

const styles = StyleSheet.create({})