import React, { Component } from 'react';
import './App.css';
import Single from './components/Single';
import Multiple from './components/Multiple';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {single: true};
  }
  singleHandler = () => {
    this.setState({single: true})
    
   
  }

  multipleHandler = () => {
    this.setState({single: false})
  }
    
  render() {
    
    return (
      <div className="App text-center">
      
        <h1>Random Person Generator</h1>
        <div className="text-center btn-group">
          <button className="btn btn-primary" onClick={this.singleHandler}>Generate a single person</button>
          <button className="btn btn-success" onClick={this.multipleHandler}>Generate multiple people</button>
        </div>

        {this.state.single ? <Single/> : <Multiple/>}
        
        
      
      

        
      </div>
    );
  }
}

export default App;
