import React from 'react'
import './Back.scss'

const Back = ({router}) => {
    return (
        <section className="go-back" onClick={router.goBack}>
            <span></span>
        </section>
    )
}

export default Back