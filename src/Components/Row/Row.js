import axios from '../../api/axios'
import { useEffect, useState } from 'react'
import './Row.css'

const Row = ({fetchUrl , title , isLargeRow = false}) =>{
    const [movie , setMovie] = useState([])
    const base = 'https://image.tmdb.org/t/p/original/'
    useEffect(() =>{
        async function fetchDate(){
            const req = await axios.get(fetchUrl)
            setMovie(req.data.results)
            return req
        }

        fetchDate()
    }, [fetchUrl])

    console.log(movie)
    return(
        <div className="row">
             <h2>{title}</h2>

             <div className='row-parent'>
                {movie.map((item) =>(
                    <img 
                        key={item.id}
                        className={`row-poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base}${
                        isLargeRow ? item.poster_path : item.backdrop_path}`} 
                        alt={item.name}/>
                ))}
             </div>
        </div>
    )
}

export default Row