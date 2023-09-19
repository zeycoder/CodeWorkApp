import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FavoriteJobsCard from '../../components/Card/FavoriteJobsCard/FavoriteJobsCard';

const FavoriteJobs = () => {
  const favoriteJobsList = useSelector(s => s.favoriteJobList); 
  const dispatch = useDispatch();
  const handleFavoriteJobsRemove = (item) => {
    dispatch({ type: 'REMOVE_JOB', payload: { favoriteJob: item } });
  }
  const handleFavoriteJobs = ({item})=><FavoriteJobsCard item={item} onPress={()=>handleFavoriteJobsRemove(item)}/>

  return (<FlatList  keyExtractor={item => item.id} data={favoriteJobsList} renderItem={handleFavoriteJobs} />)
}
export default FavoriteJobs;