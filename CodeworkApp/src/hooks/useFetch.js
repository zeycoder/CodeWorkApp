import React, { useEffect,useState } from 'react';
import axios from 'axios';

const useFetch = (uri) => {
    const [datas,setDatas] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);

    const fetchData = async() => {
  
      try {
        const response = await axios.get(uri);
        setDatas(response)
        setLoading(false);
        setError(false)
      } catch (err) {
        setError(true)
        setLoading(false)
        console.log(err)
      }
    }
    useEffect(()=>{
      fetchData();
    },[])

    return{datas,loading,error}
}
export default useFetch;