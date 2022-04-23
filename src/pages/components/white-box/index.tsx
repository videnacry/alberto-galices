import './index.css'

type propsType = {text:string}
const WhiteBox = (props:propsType) => {
    return (
        <div className="white-box-c">
            <p className="p">{props.text}</p>
        </div>
    )
}

export default WhiteBox