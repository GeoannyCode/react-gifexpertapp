import React, { useState }from 'react'
import { AddCategory } from './components/AddCategory'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Bitcoin', 'Cardano', 'Dogecoin'])

    // const handleAdd = () => {
    //     setCategories( cats => [...categories,'Chia'] );
    // }

    return(
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />



        <ol>
            {
                categories.map( category => {
                return <li key = { category }> {category} </li>
                })
            }
        </ol>

        </>
    )
}