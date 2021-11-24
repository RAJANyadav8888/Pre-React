import React, { Component } from "react";
export default class PersonInfoComponent extends Component {
  state = {
    myList: [],

    name: "",
    age: 0,
    mobailNo: 0,
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log("In Onsubmit");
    console.log(this.state);
  };

  onValueChangeHandler = (event) => {
    //by using this function no need of write above name and age functrion
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };

  onAdd = () => {
    const copyMyList = this.state.myList;

    copyMyList.push(
      <h1>
        {" "}
        MY Name Is {this.state.name},My age is {this.state.age}and my mobail No
        is{this.state.mobailNo}
      </h1>
    );
    console.log("copyMyList");
    this.setState({ myList: copyMyList });
  };

  render() {
    return (
      <>
        <h1> Person Details</h1>
        <form onSubmit={this.onFormSubmitHandler}>
          <label> Name : </label>
          <input
            name={"name"}
            value={this.state.name}
            onChange={this.onValueChangeHandler}
          />

          <br />

          <label> Age : </label>
          <input
            name={"age"}
            value={this.state.age}
            onChange={this.onValueChangeHandler}
          />

          <br />

          <label> Mobail No : </label>
          <input
            name={"mobailNo"}
            value={this.state.mobailNo}
            onChange={this.onValueChangeHandler}
          />

          <br />
          <button onClick={this.onAdd}> Submit </button>

          {this.state.myList.map((element, index) => (
            <div key={index}>
              <div>{element}</div>{" "}
            </div>
          ))}
          <br />
        </form>
      </>
    );
  }
}

