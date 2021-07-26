import axios from '../../api/axios'
import { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../../api/Request'
const Banner = () => {
    const [movie , setMovie] = useState([])

    useEffect(() =>{
        async function fetchDate(){
            const request = await axios.get(requests.fetchComedyMovies)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );

            return request
        }

        
        fetchDate()
    }, [])

    function tuncate(str , n){
        return str?.length > n  ? str.substr(0 , n - 1) + '...' : str
    }

    console.log(movie)
    return (
        <div className='banner'
         style={{
             backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
             backgroundSize:'cover',
             width:'100%',
             height:'70vh',
             backgroundPosition:'center center',
             position:'relative',
             objectFit:'contain'

             }}>
             
             <div className="bannerContent">
                <h1>{
                        movie?.title || movie?.name || movie?.original_name 
                    }</h1>
                <div className='bannerButtons'>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>
                    {tuncate(movie?.overview , 150)}
                </p>
             </div>

             <div className="fadeButton"/>
        </div>
    )
}

export default Banner