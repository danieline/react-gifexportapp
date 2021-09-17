import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

const [categorias, setCategorias] = useState(['Dragon Ball'])

    return (
        <>
          <h2>GifExportApp</h2>  
          <AddCategory setCategorias={setCategorias}/>
          <hr/>
          
          <ol>
            {
              categorias.map( c => (
                     <GifGrid 
                          key = { c }
                          categoria = { c }
                     />
                ))
            
            }
              
          </ol>
        </>
    )
}


