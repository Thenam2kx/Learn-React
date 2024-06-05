import React from "react";

class Form extends React.Component {

  state = {
    firstName: '',
    lastName: ''
  }

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    })
  }

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    console.log(this.state)
  }


  render() {
    return (
    <>
      <form>
        <label htmlFor="fname">First name:</label><br />
        <input
          type="text"
          onChange={(event) => this.handleChangeFirstName(event)}
          value={this.state.firstName}
        />

        <br/>

        <label htmlFor="lname">Last name:</label><br/>
        <input
          type="text"
          onChange={(event) => this.handleChangeLastName(event)}
          value={this.state.lastName}
        />

        <br/>

        <input onClick={(event) => this.handleClick(event)} type="submit" value="Submit" />
      </form> 
    </>
    )
  }
}

export default Form;