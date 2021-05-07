import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

const useFetchGif = ( category ) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    //dispara lo que esta dentro una sola vez cuando
    //se carga la pagina la primera vez
    //solo recargara cuando category cambien, lo cual en este caso no va a pasar
    useEffect( () => {
        getGifs(category).then( imgs=>{
            setState({
                data: imgs ,
                loading: false
            })
        } )
    },[category])
    
    
    
    return state;
}

export default useFetchGif
