

import './App.css';
import GalleryPage from './pages/gallery';

import Main from './pages/main';

function App(props:any) {
  return (
    <div className="App">
      <props.Context.Provider value={{images: props.images}}>
        <Main/>
        <GalleryPage/>
      </props.Context.Provider>
    </div>
  );
}

export default App;
