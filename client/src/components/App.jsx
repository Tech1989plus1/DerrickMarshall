import React from 'react';

import Home from './features/Home.jsx';
import Header from './features/Header.jsx';

const App = () => {

  return (
    <div className="app">
      <React.Fragment>
        <Header/>
        <main className="l-main">
          <Home/>
        </main>
      </React.Fragment>
    </div>
  )
}

export default App;
