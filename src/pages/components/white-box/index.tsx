import './index.css'

type propsType = {text:string}
const WhiteBox = (props:propsType) => {
    return (
        <p className="white-box-c">{props.text}</p>
    )
}

export default WhiteBox