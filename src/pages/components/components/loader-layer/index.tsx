import './index.css'

type propsType = {clickHandler:()=>void, zIndex:number}
const LoaderLayer = (props:propsType) => (
    <div className='loader-layer-c-c' style={{zIndex:props.zIndex}} onClick={props.clickHandler}>
        <h1 className='loader-layer-c-c_message'>Loading...</h1>
    </div>
)

export default LoaderLayer