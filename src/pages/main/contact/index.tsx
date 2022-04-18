import React from 'react'
import {Context} from '../../../index'

import './index.css'

const Contact = () => {
    const context = React.useContext(Context)
    
    return (
        <div className="main_contact-s">
            <img className="background-img" src={context.images.index.contact[0]} alt="girl in party" width="100%"/>
            <h1 className="title">Contacto</h1>
            <div className="sentences">
                <p>Nos encontramos en un lugar especial, para crear algo artístico, emotivo...!</p>
                <p>Sesiones fotográficas en tu hogar. Familiar, infantil, maternidad, retrato...</p>
                <p>Te acompañamos, por un album natural y exclusivo.</p>
            </div>
        </div>
    )
}

export default Contact