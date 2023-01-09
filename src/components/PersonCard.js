import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      age: this.props.age,
      hairColor: this.props.hairColor,
    };
  }

  addAge = () => {
    this.setState({ age: this.state.age + 1 });
    console.log(this.state.age);
  };

  render() {
    return (
      <div>
        <h2>
          {this.state.lastName}, {this.state.firstName}
        </h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.state.hairColor}</p>
        <button onClick={this.addAge}>
          Birthday Button for {this.state.firstName} {this.state.lastName}
        </button>
      </div>
    );
  }
}

export default PersonCard;
