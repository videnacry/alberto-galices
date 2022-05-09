import * as ReactRooter from 'react-router-dom'

import './App.css';
import LoaderLayer from './pages/components/loader-layer';
import GalleryPage from './pages/gallery';

import Main from './pages/main';

function App(props:any) {
  return (
    <div className="App">
      <LoaderLayer zIndex={-1} clickHandler={()=>{}}/>
      <props.Context.Provider value={{images: props.images}}>
        <ReactRooter.BrowserRouter>
          <ReactRooter.Routes>
            <ReactRooter.Route path="/" element={<Main/>}/>
            <ReactRooter.Route path="gallery" element={<GalleryPage/>}/>
          </ReactRooter.Routes>
        </ReactRooter.BrowserRouter>
      </props.Context.Provider>
    </div>
  );
}

export default App;
