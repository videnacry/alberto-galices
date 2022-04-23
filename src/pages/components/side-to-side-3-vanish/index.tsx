
import './index.css'

type propsType = {images: string[]}
const SideToSide_3_Vanish = (props:propsType) => {
    
    return (
        <div className='side-to-side-3-vanish-c'>
            {[1,2,3].map((num,index) => 
                <img 
                key={'side-to-side-3-vanish-3'+index}
                src={props.images[index]}
                alt={`example ${num}`}
                className='image'
                />)}
        </div>
    )
}

export default SideToSide_3_Vanish