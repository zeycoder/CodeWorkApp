import { Button, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HTMLView from 'react-native-htmlview';
import styles from './JobsCardDetail.style';
import Buttons from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';


const JobsCardDetail = ({item}) => {
  // const insideIcon = useSelector(s=>s.insideIcon)
  const dispatch = useDispatch();
  const handleFavoriteJobAdd = () => {
    dispatch({type:'ADD_JOB',payload:{favoriteJob:item}});
    console.log('aa')
  }
  return (
    <View style={styles.container}>
      <ScrollView  style={styles.inner_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.txt}><Text style={styles.color}>Locations:</Text> {item.locations[0].name} </Text>
          <Text style={styles.txt}><Text style={styles.color}>Job Level:</Text> {item.levels[0].name} </Text>
          <Text style={styles.inner_title} >Job Detail </Text>
        </View>
        <HTMLView
          style={styles.html}
          value={item.contents}
        />
      </ScrollView>
      <View style={styles.btn}>
        <Buttons title='Submit' onPress={()=>Linking.openURL(item.refs.landing_page)} iconName={'sign-in-alt'}/>
        <Buttons title='Favorite Job' onPress={handleFavoriteJobAdd} iconName={'heart'} />
      </View>
    </View>
  )
}

export default JobsCardDetail;