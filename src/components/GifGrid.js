import React from 'react'
import useFetchGif from '../hooks/useFetchGif';
//import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);

    

    const { data:images, loading } = useFetchGif(category);

    return (
        <>
        <h3>{category}</h3>
        { loading && <p>Loading...</p>}
        
        <div className='card-grid'>
            {
                images.map(img=>{
                    return <GifGridItem 
                                key= {img.id}
                                {...img}
                            />
                })
            }
        </div>
        
        </>
    )
}

export default GifGrid
