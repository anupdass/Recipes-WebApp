import React, { useEffect, useState } from 'react'
import NavItem from '../NavItem/NavItem'
import Search from '../search/Search'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar() {

    const [input, setInput] = useState('')

    const navigate = useNavigate()

    const handleInput = (e) => {
        setInput(e.target.value)
        navigate(`/search/${e.target.value}`)
    }

    useEffect(() => {
        if (!input) {
            navigate('/')
        }
    }, [input])

    return (
        <div>
            <Link to={'/'}>

                <img className='img' alt='it is a logo' src='https://t3.ftcdn.net/jpg/02/72/90/24/360_F_272902413_ONKtsotTTl8wV4ZwMw2irt6uxcUAlhqz.jpg' /></Link>
            <br></br>
            <div className='nav-item'>
                {/* <Search handleInput={handleInput} /> */}
                <NavItem />
            </div>
        </div>
    )
}

export default Navbar