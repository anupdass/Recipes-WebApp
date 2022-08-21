import React from 'react'
import { Link } from 'react-router-dom';
import './RecepieItem.css'

function RecepieItem({ recepie }) {
    const { title, image, id } = recepie;
    return (
        <Link to={`/details/${id}`}>
            <div className='itemWrapper'>
                <p>{title}</p>
                <img src={image} alt={recepie.title} />
                <div className='gradient'></div>
            </div>
        </Link>
    )
}

export default RecepieItem