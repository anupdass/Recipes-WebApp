import React from 'react'

function Footer() {
    return (
        <div style={{ height: "50px", textAlign: 'center', color: 'gray', marginBottom: '50px' }}>
            <h3>&copy;{` ${new Date().getFullYear()} anup das`}</h3>
        </div>
    )
}

export default Footer;