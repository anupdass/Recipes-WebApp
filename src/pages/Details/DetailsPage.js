import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import RecepieItem from '../../components/RecepieItem/RecepieItem';

function DetailsPage() {

    const [details, setDetails] = useState()
    const [similar, setSimilar] = useState()
    const [ingredient, setIngredient] = useState(false)

    const params = useParams()
    const { id } = params

    const getDetails = async () => {
        const details = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailsData = details.data;
        setDetails(detailsData)
    }

    const similarFood = async () => {
        const similarFood = await axios.get(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.REACT_APP_API_KEY}`)
        const similarData = similarFood.data;
        setSimilar(similarData)
    }

    console.log(similar)

    const handleIngredient = () => {
        setIngredient(!ingredient)
    }

    const scroll = () => {
        window.scrollTo({ top: 220, left: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        scroll()
        getDetails()
        similarFood()
    }, [id])

    return (
        <div style={{ marginBottom: '40px' }}>
            <h1 style={{ margin: '50px 0px' }}>Details Page</h1>

            <div style={{ display: 'flex' }}>
                <img src={details?.image} style={{ flexBasis: '40%' }} />

                {
                    !ingredient ?
                        <div style={{ flexBasis: '40%', padding: '0px 30px', }}>
                            <div style={{ padding: " 0 10px 0 0", marginBottom: '20px' }}>
                                <button style={{ padding: '10px 30px', margin: '0px 10px 0 0', cursor: 'pointer' }}
                                    onClick={handleIngredient} disabled={!ingredient}
                                >Details </button>
                                <button style={{ padding: '10px 30px', margin: '0px 10px 0 0', cursor: 'pointer' }}
                                    onClick={handleIngredient} disabled={ingredient}
                                >Ingredient</button>
                            </div>
                            <h4 style={{ marginBottom: '10px' }}>{details?.title}</h4>
                            <p dangerouslySetInnerHTML={{ __html: details?.summary }}></p>
                        </div>
                        :
                        <div style={{ flexBasis: '40%', padding: '0px 30px', }}>
                            <div style={{ padding: " 0 10px 0 0", marginBottom: '20px' }}>
                                <button style={{ padding: '10px 30px', margin: '0px 10px 0 0', cursor: 'pointer' }}
                                    onClick={handleIngredient} disabled={!ingredient}
                                >Details </button>
                                <button style={{ padding: '10px 30px', margin: '0px 10px 0 0', cursor: 'pointer' }}
                                    onClick={handleIngredient} disabled={ingredient}
                                >Ingredient</button>
                            </div>
                            <h4 style={{ marginBottom: '10px' }}>Ingredient</h4>
                            <ul>
                                {
                                    details?.extendedIngredients.map(ingra =>
                                        <li key={ingra.id}>{ingra.aisle}

                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                }
            </div>

            <h3 style={{ padding: "50px 0" }}>Similar Food </h3>
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
                        speed: 1500,
                        type: 'loop'

                    }
                }
            >
                {
                    similar?.length > 0 ?
                        similar?.map(recepie =>
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

export default DetailsPage