import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SearchPage() {

    const params = useParams()
    const { search } = params

    // const getSearchRecepie = async () => {
    //     const recepie = await axios.get()
    // }

    return (
        <div style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>This Page Is Under Construction</h1>
        </div>
    )
}

export default SearchPage