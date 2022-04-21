import React from 'react'

import IMGPopper from '../components/img-pooper'
import './index.css'

type propsType = {images:{W400:string, W1400:string}[], reverse:boolean}
const SideToSide6Node = (props:propsType) => {
    const [imgSelected, SetIMGSelected] = React.useState('')

    return (
        <>
        <div className='side-to-side-6-node-c'>
            {[1,2,3,4,5,6].map((num,index) => <div
            className={`${props.reverse && 'reverse'}`}
            style={{
                right: `${index*30}vw`
            }}
            >
                <img 
                onClick={e => SetIMGSelected(props.images[index].W1400)}
                className={`${props.reverse && 'reverse'}`}
                key={'side-to-side-6-node'+index}
                src={props.images[index].W400}
                alt={`example ${num}`}
                />
            </div>)}
        </div>
        {imgSelected!==''&&<IMGPopper src={imgSelected} closePopper={()=>SetIMGSelected('')}/>}
        </>
    )
}

export default SideToSide6Node