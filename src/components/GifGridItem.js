import React from 'react';

export const GifGridItem = ( {id, title, url} ) => {

    console.log(id, title, url)

    return(
        <div className='card animate__flash'>
            <img src={ url } alt={ title }/>
            <h3>{ title }</h3>
        </div>
    )
}