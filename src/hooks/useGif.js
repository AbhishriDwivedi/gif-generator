import React,{useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = "74FL43C9LLJ2KFuqjKtXI6z4M6Hk12vs";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif =(tag) =>{
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    
    async function fetchData(tag){
        setLoading(true);
        const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    
    useEffect( () => {
        fetchData(tag);
      },[] )
  
    return {gif, loading, fetchData};
}

export default useGif;