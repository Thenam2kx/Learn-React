import React from "react";

class ChangeState extends React.Component {


  state = {
    name: "thenam",
    age: 18
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
    <>
      <input value={this.state.name} onChange={(event) => this.handleChange(event)} type="text" />
      my name is: {this.state['name']}
      
    </>
    )
  }
}

export default ChangeState;