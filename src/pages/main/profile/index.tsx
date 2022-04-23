import React from 'react'
import {Context} from '../../../index'

import './index.css'

const Profile = () => {
    const context = React.useContext(Context)
    
    return (
        <article id="alberto-galices" className="main_profile-s">
            <img className="background-img" src={context.images.index.profile[0]} alt="girl in party" width="100%"/>
            <h1 className="title">Alberto Galices</h1>
            <div className="sentences">
                <p>I'm a photographer with the best job in the world who truly believes in love!</p>
                <p>I'm here to document your most beautiful day. A day full of love, laugh and tears.</p>
                <p>I love what I do because I come across couples who think and see in a similar way to me.</p>
            </div>
        </article>
    )
}

export default Profile