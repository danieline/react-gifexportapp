import React from 'react'

export const GifGridItem = ( { title, url} ) => {
    return (
        <div className='card animate__animated animate__bounce animate__fadeIn'>
            <img src={ url } atl={ title } />
            <p>{ title }</p>
        </div>
    )
}
