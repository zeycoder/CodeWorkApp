import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import JobsCard from '../../components/Card/JobsCard/JobsCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Jobs = ({navigation}) => {
  const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}?page=1`;
  const{datas, loading, error}= useFetch(apiUrl)
  if(loading){return<Loading />}
  if(error){return<Error/>}
  console.log(datas.data.results)
  const handleJobsDetail = (item) => {navigation.navigate('JobsDetailScreen',{item:item});console.log(item.id);}
  const handleJobs = ({item})=>(<JobsCard item={item} onPress={()=>handleJobsDetail(item)}/> )
  
  return (<FlatList keyExtractor={item => item.id} data={datas.data.results} renderItem={handleJobs}/>)
}
export default Jobs;