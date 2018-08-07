import React, { Component } from 'react';

class Multiple extends Component {

    constructor() {
        super();
        this.state = {
            people: []
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10")
            .then(results => results.json())
            .then(data => this.setState({ people: data.results }));
    }
    render() {
        const peopleList = this.state.people.map((person) =>
            <div className="card bg-light">

                <img className="col-12" src={person.picture.large} />
                <hr />
                <div className="card-body text-center">
                    <div className="card-title" >{person.name.first.toUpperCase()} {person.name.last.toUpperCase()}</div>
                    <p>{person.location.city}</p>
                    <p>{person.email}</p>
                </div>
            </div>
        );
        return <div className="card-columns">{peopleList}</div>
    }
}

export default Multiple