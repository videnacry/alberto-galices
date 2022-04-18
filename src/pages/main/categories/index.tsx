import React from 'react'
import {Context} from '../../../index'
import SideToSide3 from '../../components/side-to-side-3'
import SideToSide_3_Vanish from '../../components/side-to-side-3-vanish'

import './index.css'

const Categories = () => {
    const context = React.useContext(Context)
    
    return (
        <div className="main_categories-s">
            <div className="category-1"><SideToSide_3_Vanish images={context.images.index.categories[0]}/></div>
            <div className="category-2"><SideToSide3 images={context.images.index.categories[1]} animationTime={27} delay={15}/></div>
            <div className="category-3"><SideToSide3 images={context.images.index.categories[2]} animationTime={39} delay={3}/></div>
            <a href="/gallery" className="title">Galería</a>
        </div>
    )
}

export default Categories