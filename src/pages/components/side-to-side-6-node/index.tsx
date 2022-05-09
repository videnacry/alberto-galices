import React, { useEffect } from 'react'

import IMGPopper from '../components/img-pooper'
import LoaderLayer from '../components/loader-layer'
import './index.css'

type propsType = {images:{W400:string, W1400:string}[], reverse:boolean}
const SideToSide6Node = (props:propsType) => {
    const [imgSelected, SetIMGSelected] = React.useState('')
    const [imgSelectedIndex, SetIMGSelectedIndex] = React.useState(-1)

    useEffect(()=>{
        if(imgSelectedIndex>-1) SetIMGSelected(props.images[imgSelectedIndex].W1400)
    },[imgSelectedIndex])

    return (
        <>
        <div className='side-to-side-6-node-c'>
            {[1,2,3,4,5,6].map((num,index) => <div
            className={`${props.reverse && 'reverse'}`}
            style={{
                right: `${index*33.33}%`
            }}
            >
                <img 
                onClick={e => {
                    SetIMGSelected(props.images[index].W1400)
                    SetIMGSelectedIndex(index)
                }}
                className={`${props.reverse && 'reverse'}`}
                key={'side-to-side-6-node'+index}
                src={props.images[index].W400}
                alt={`example ${num}`}
                />
            </div>)}
        </div>
        {imgSelected!==''&&<>
                <LoaderLayer zIndex={1} clickHandler={()=>SetIMGSelected('')}/>
                <IMGPopper 
                src={imgSelected} 
                closePopper={()=>SetIMGSelected('')} 
                selectNextIMG={()=>{if(imgSelectedIndex<5)SetIMGSelectedIndex(imgSelectedIndex+1)}}
                selectPrevIMG={()=>{if(imgSelectedIndex>0)SetIMGSelectedIndex(imgSelectedIndex-1)}}
                />
            </>
        }
        </>
    )
}

export default SideToSide6Node