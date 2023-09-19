import { Button, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import HTMLView from 'react-native-htmlview';
import styles from './JobsCardDetail.style';
import Buttons from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';


const JobsCardDetail = ({item}) => {
  // const insideIcon = useSelector(s=>s.insideIcon)
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false); // Favori durumu
  const favoriteJobs = useSelector(state => state.favoriteJobList);

  useEffect(() => {
    // İş favori işler listesinde var mı kontrol et
    const isJobFavorite = favoriteJobs.some(job => job.id === item.id);
    setIsFavorite(isJobFavorite);
  }, [favoriteJobs, item]);

  const handleFavoriteJob = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_JOB', payload: { favoriteJob: item } });
    } else {
      dispatch({ type: 'ADD_JOB', payload: { favoriteJob: item } });
      console.log(item)
      console.log(item.id)

    }
    setIsFavorite(!isFavorite);
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
        <Buttons title={isFavorite ? 'Remove Job' : 'Favorite Job'}  onPress={handleFavoriteJob} iconName={'heart'} />
      </View>
    </View>
  )
}

export default JobsCardDetail;