
import './index.css'

type propsType = {images:string[], animationTime:number, delay:number}
const SideToSide3 = (props:propsType) => {
    
    return (
        <div className='side-to-side-3-c'>
            {[1,2,3].map((num,index) => 
                <img 
                key={'side-to-side-3'+index}
                src={props.images[index]}
                alt={`example ${num}`}
                width='100%'
                style={{
                    right:`${index*100}%`,
                    animationDuration: `${props.animationTime}s`,
                    animationDelay: `${props.delay}s`
                }}
                className='image'
                />)}
        </div>
    )
}

export default SideToSide3