import React from 'react'

const GifGridItem = ( {title,url}) => {
    console.log(title , url);
    return (
        <div className='card'>
            <img src={url} alt={title}/>
            <p>{title}</p>         
        </div>
    )
} 

export default GifGridItem
