import React from 'react';

import Nav from './features/Nav.jsx';
import Header from './features/Header.jsx';

const App = () => {
  return (
    <div className="app">
      <React.Fragment>
        <Nav/>
        <Header/>
      </React.Fragment>
    </div>
  )
}

export default App;
