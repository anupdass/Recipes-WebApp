import React, { useState } from 'react'
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './navitem.css'

function NavItem() {

    const [active, setActive] = useState()

    const handleActive = (id) => {
        setActive(id)
    }

    const navItem = [
        {
            id: 1,
            title: 'Italiam',
            ICON: FaPizzaSlice
        },
        {
            id: 2,
            title: 'American',
            ICON: FaHamburger
        },
        {
            id: 3,
            title: 'Thai',
            ICON: GiNoodles
        },
        {
            id: 4,
            title: 'Japanies',
            ICON: GiChopsticks
        }
    ]
    return (
        <div style={{ display: 'flex', }}>
            {
                navItem.map(item =>
                    <Link to={`/search/${item.title}`} style={{ textDecoration: 'none' }}>
                        <div key={item.id} className='navItem'
                            onClick={() => handleActive(item.id)}
                            style={{ backgroundColor: item.id === active ? 'orange' : 'black' }}
                        >
                            <div>
                                <item.ICON />
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div >
    )
}

export default NavItem