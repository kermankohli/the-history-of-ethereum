import * as React from 'react';

import Home from './pages/home';

import './App.css';
import Header from '@components/header';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <Header/>
        <div style={{flex: 1}}>
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
