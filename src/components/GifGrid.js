import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {

    const { data:images, loading } = useFetchGifs( category );

    return(
            <>
            <h3>{ category }</h3>

            {loading && <p className ="animate__bounceIn">Loading...</p> }

            <div className="card-grid animate__flash">
                    {
                        images.map( img => (
                            <GifGridItem key = {img.id}
                            {...img }/>

                        ))
                    }
            </div>
            </>
    )
}