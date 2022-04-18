import './index.css'

type propsType = {titles:string[]}
const TabButtons = (props:propsType) => {
    return(
        <nav className="tab-buttons-c">
            {props.titles.map((title, index) => (
                <button key={`tab-buttons${title+index}`}>{title}</button>
            ))}
        </nav>
    )
}

export default TabButtons