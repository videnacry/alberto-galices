import React from 'react'
import {Context} from '../../../index'

import Nav from '../../components/nav-top-static'
import SideToSide_3_Vanish from '../../components/side-to-side-3-vanish'
import './index.css'

const Front = () => {
    const context = React.useContext(Context)
    
    return (
        <div className='main-front-s'>
            <div className="nav-space"/>
            <Nav/>
            <SideToSide_3_Vanish images={context.images.index.front}/>
        </div>
    )
}

export default Front