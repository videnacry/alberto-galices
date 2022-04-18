import { useContext } from "react"
import { Context } from "../.."
import Footer from "../components/footer"
import Nav from "../components/nav-top-static"
import SideToSide6Node from "../components/side-to-side-6-node"
import TabButtons from "../components/tab-buttons"

import './index.css'

const GalleryPage = () => {
    const context = useContext(Context)
    return (
        <div className="gallery-p">
            <div className="h-2em"/>
            <Nav/>
            <div className="nav-bg"/>
            <TabButtons titles={['Reportaje', 'Boda', 'Restauración']}/>
            <SideToSide6Node images={context.images.wedding.departure} reverse={false}/>
            <SideToSide6Node images={context.images.wedding.shrine} reverse={true}/>
            <SideToSide6Node images={context.images.wedding.fiance} reverse={false}/>
            <Footer/>
        </div>
    )
}

export default GalleryPage