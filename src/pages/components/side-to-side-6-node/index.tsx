
import './index.css'

type propsType = {images:string[], reverse:boolean}
const SideToSide6Node = (props:propsType) => {
    
    return (
        <div className='side-to-side-6-node-c'>
            {[1,2,3,4,5,6].map((num,index) => <div
            className={`${props.reverse && 'reverse'}`}
            style={{
                right: `${index*30}vw`
            }}
            >
                <img 
                className={`${props.reverse && 'reverse'}`}
                key={'side-to-side-6-node'+index}
                src={props.images[index]}
                alt={`example ${num}`}
                />
            </div>)}
        </div>
    )
}

export default SideToSide6Node