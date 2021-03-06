import * as ReactRouter from 'react-router-dom'
import './index.css'

const Nav = () => {
    return (
        <nav className="nav-top-static-c">
            <a className="title" href="/#alberto-galices">Alberto-Galices</a>
            <ReactRouter.Link to="/">Inicio</ReactRouter.Link>
            <a href="/#contact">Contacto</a>
            <ReactRouter.Link to="/gallery">Galería</ReactRouter.Link>
            <a className="title-replacement" href="/#alberto-galices">Alberto-Galices</a>
        </nav>
    )
}

export default Nav