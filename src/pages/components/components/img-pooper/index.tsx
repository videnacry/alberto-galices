import React from 'react'
import ReactDOM from 'react-dom'
import getZoomClass from './getZoomClass'

import './index.css'

let  getterNextIMGZoomClass = getZoomClass.getBiggerZoomClass

type propsType = {src:string, closePopper:()=>void, selectNextIMG:()=>void, selectPrevIMG:()=>void}
const IMGPopper = (props:propsType) => {
    const [imgZoomClass, setIMGZoomClass] = React.useState('')
    
    const getNextIMGZoomClass = () => {
        if (imgZoomClass === '') getterNextIMGZoomClass = getZoomClass.getBiggerZoomClass
        if (imgZoomClass === 'zoom-3') getterNextIMGZoomClass = getZoomClass.getSmallerZoomClass
        setIMGZoomClass(getterNextIMGZoomClass(imgZoomClass))
    }


    return(
        ReactDOM.createPortal(
        <>
        <div className="img-pooper-c-c">
            <img src={props.src} 
            alt="image full screen" 
            className={'img-pooper-c-c_img '+imgZoomClass}
            onClick={()=>{getNextIMGZoomClass()}}
            />
        </div>
        <div className="img-pooper-c-c_controls">
            <button className="img-pooper-c-c_prev" onClick={props.selectNextIMG}>&lt;</button>
            <button 
            className="img-pooper-c-c_zoom-in" 
            onClick={()=>setIMGZoomClass(getZoomClass.getBiggerZoomClass(imgZoomClass))}
            >+</button>
            <button 
            className="img-pooper-c-c_zoom-out" 
            onClick={()=>setIMGZoomClass(getZoomClass.getSmallerZoomClass(imgZoomClass))}
            >-</button>
            <button className="img-pooper-c-c_next" onClick={props.selectPrevIMG}>&gt;</button>
            <button onClick={props.closePopper} className="img-pooper-c-c_close">&times;</button>
        </div>
        </>,
        document.body
        )
    )
}

export default IMGPopper