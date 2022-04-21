import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

type propsType = {src:string, closePopper:()=>void}
const IMGPopper = (props:propsType) => {
    const [isIMGZoom, setIsIMGZoom] = React.useState(false)
    return(
        ReactDOM.createPortal(
        <>
        <div className="img-pooper-c-c">
            <img src={props.src} alt="image full screen" className={isIMGZoom?'zoomed':''} onClick={()=>isIMGZoom?setIsIMGZoom(false):setIsIMGZoom(true)}/>
        </div>
        <button onClick={props.closePopper} className="img-pooper-c-c_close">&times;</button>
        </>,
        document.body
        )
    )
}

export default IMGPopper