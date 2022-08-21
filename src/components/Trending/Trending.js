import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecepieItem from '../RecepieItem/RecepieItem'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Trending() {

    const [recipes, setRecepies] = useState([])

    const getRecipies = async () => {

        const check = localStorage.getItem('trending')
        if (check) {
            setRecepies(JSON.parse(check))
        }
        else {
            const food = await axios.get(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${process.env.REACT_APP_API_KEY}`)
            setRecepies(food.data.recipes)
            localStorage.setItem('trending', JSON.stringify(food.data.recipes))
        }
    }

    useEffect(() => {
        getRecipies()
    }, [])



    return (
        <div>
            <h3>Trending Food </h3>
            <Splide
                options={
                    {
                        perPage: 4,
                        preloadPages: 1,
                        lazyLoad: true,
                        arrows: false,
                        pagination: false,
                        autoplay: true,
                        interval: 3000,
                        speed: 1000,
                        perMove: 1,
                        type: 'loop'
                    }
                }
            >
                {
                    recipes?.length > 0 ?
                        recipes?.map(recepie =>
                            <SplideSlide>
                                <RecepieItem
                                    key={recepie.id}
                                    recepie={recepie}
                                />
                            </SplideSlide>
                        )
                        :
                        <p style={{ textAlign: 'center', height: '100%', width: '100%' }}>Loading.......</p>
                }
            </Splide>
        </div>
    )
}

export default Trending