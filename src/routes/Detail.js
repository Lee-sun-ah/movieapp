import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useState } from 'react';
import styles from './Detail.module.css'

function Detail(){
    const {id}=useParams();
    const [loading,setLoading]=useState(true);
    const [details,setDetails]=useState([]);

    const getMovie=async()=>{
        const json=await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetails(json.data.movie); 
        setLoading(false);
    };

    useEffect(()=>{
        getMovie();
    },[])

    return (
        <div className={styles.movie}>
            {loading?
            (<div className={styles.loader}><strong>Loading...</strong></div>)
            :  
            (<div>          
            <img src={details.medium_cover_image} alt={details.title} className={styles.movie__img}/>
            <h2>{details.title} ({details.year}) ⭐{details.rating}</h2>
            <a href={details.url}>{details.url}</a>
            <p>{details.description_full}</p>
            </div>)}
        </div>
    );
}

export default Detail;