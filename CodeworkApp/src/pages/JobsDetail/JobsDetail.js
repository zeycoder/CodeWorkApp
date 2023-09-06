import React from 'react'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import JobsCardDetail from '../../components/Card/JobsCardDetail/JobsCardDetail';

const JobsDetail = ({ route }) => {
  const { item } = route.params;

  return (<JobsCardDetail item={item}/>)
}

export default JobsDetail; 

  // const apiUrl = `${process.env.EXPO_PUBLIC_API_URL}/${item.id}`;
  // const {datas,loading,error} = useFetch(apiUrl);

  // if(loading){return <Loading />}
  // if(error){return <Error />}

  // console.log(apiUrl)