import React from 'react';
import Parent from './components/Parent';

class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Props and State</h1>
        <Parent />
      </div>
    )
  }
}

export default App;