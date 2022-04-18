

import './App.css';

import Main from './pages/main';

function App(props:any) {
  return (
    <div className="App">
      <props.Context.Provider value={{images: props.images}}>
        <Main/>
      </props.Context.Provider>
    </div>
  );
}

export default App;
