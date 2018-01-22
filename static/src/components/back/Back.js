import React from 'react'
import './Back.scss'

const Back = ({router, location}) => {
    return (
        <section className="go-back" onClick={router.goBack}>
        {location.pathname}
            <span></span>
        </section>
    )
}

export default Back