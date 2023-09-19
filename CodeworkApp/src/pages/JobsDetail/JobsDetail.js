import React,{useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import JobsCardDetail from '../../components/Card/JobsCardDetail/JobsCardDetail';
import { useDispatch, useSelector } from 'react-redux';

const JobsDetail = ({ route }) => {
  const { item } = route.params;
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false); 
  const favoriteJobs = useSelector(state => state.favoriteJobList);

  useEffect(() => {
    const isJobFavorite = favoriteJobs.some(job => job.id === item.id);
    setIsFavorite(isJobFavorite);
  }, [favoriteJobs, item]);

  const handleFavoriteJob = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_JOB', payload: { favoriteJob: item } });
    } else {
      dispatch({ type: 'ADD_JOB', payload: { favoriteJob: item } });
    }
    setIsFavorite(!isFavorite);
  }

  return (<JobsCardDetail item={item} favoriteOnPress={handleFavoriteJob} favoriteTitle={isFavorite ? 'Remove Job' : 'Favorite Job'}/>)
}
export default JobsDetail; 