import React, { useState }from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    // const handleAdd = () => {
    //     setCategories( cats => [...categories,'Chia'] );
    // }

    return(
        <>
            <h2 className="title_page"> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />



        <ol>
            {
                categories.map( category => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>

        </>
    )
}