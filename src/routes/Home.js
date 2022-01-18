import React,{useEffect, useState} from 'react';
import Movie from '../components/Movie'
import styles from './Home.module.css';

function Home(){
    const [loading,setLoading]=useState(true);
    const [movies,setMovies]=useState([]);
    const getMovies=async()=>{
      const json=await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();
      setMovies(json.data.movies); 
      setLoading(false);
    };
    useEffect(()=>{
      getMovies();
    },[])
    return (
      <div className={styles.container}>
        {loading?(<div className={styles.loader}><strong>Loading...</strong></div>):
        (<div className={styles.movies}>
          {movies.map((item)=>
          <Movie 
          key={item.id} 
          id={item.id}
          coverImg={item.medium_cover_image} 
          title={item.title} 
          year={item.year} 
          rating={item.rating} 
          summary={item.summary} 
          genres={item.genres}/>
          )}
        </div>
        )}
        
      </div>
    )
}
export default Home;