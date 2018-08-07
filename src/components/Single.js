import React, { Component } from 'react';

class Single extends Component {

    constructor() {
        super();
        this.state = {
          person: {
              
              isLoaded: false
          }
        };
      }

    componentWillMount() {
        fetch("https://randomuser.me/api/?results=1")
          .then(results => results.json())
          .then(data => this.setState({ 
              person: data.results[0],
              isLoaded: true 
             }));
      }

    render() {
        

        
        return ( 
            <div className="card bg-light">
                
                <img className="col-12" src={this.state.isLoaded && this.state.person.picture.large}/>
                <hr/>
                <div className="card-body text-center">
                    <div className="card-title" >{this.state.isLoaded && this.state.person.name.first.toUpperCase()} {this.state.isLoaded && this.state.person.name.last.toUpperCase()}</div>
                    <p>{this.state.isLoaded && this.state.person.location.city}</p>
                    <p>{this.state.isLoaded && this.state.person.email}</p>
                </div>
            </div>
    )
    }
}

export default Single