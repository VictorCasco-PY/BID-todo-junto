import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    const { firstName, lastName, age, hairColor } = this.props;
    this.state = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      hairColor: hairColor,
    };
  }

  render() {
    const { firstName, lastName, age, hairColor } = this.state;
    const addAge = () => {
      this.setState({ age: age + 1 });
      console.log(age);
    };

    return (
      <div>
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={addAge}>
          Birthday Button for {firstName} {lastName}
        </button>
      </div>
    );
  }
}

export default PersonCard;
