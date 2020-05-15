import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.yourname = "Monkey D Luffy";
    this.time = new Date().toLocaleTimeString();
    this.state = {};
  }

  bonjour(name){
    return "Hello " + name;
  }

  render() {
    //console.log(this.props);
    const myName = "Jhonny";
    return (
      <div className="App">
          <h2>Just same example : {this.yourname}</h2>
          <h3>Current Time:</h3>
          <h4>Time : {this.time}</h4>
          <h5>{this.props.testexample}</h5>
          <Parent />
      </div>

    );
  }
}


App.defaultProps = {
  testexample : 99999
}

class Parent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cars:['s-BMW', 's-Audi', 's-Wolse','s-kkitroen']
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){
    this.setState({
       cars: this.state.cars.reverse()
    });
  }

  render(){
    //console.log(this.props);
    return(
      <div>
        <h2 onClick={this.handleClick}>Component Parent : Just for info </h2>
        <Cars msg="Car is cool ever" model="Version 2548" typeCars={this.state.cars} />

      </div>
    );
  }
}


Parent.defaultProps = {
  cars:['BMW', 'Audi', 'Wolse']
}

class Cars extends React.Component {
  render(){
    //console.log(this.props);
    return(
      <div>
        <h3>Child Component from Cars</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.typeCars.map( ( item, i) => {
                                        return <p key={i}>{item}</p>;
                                    }
                                  )
            }</div>
          <RandomNumber  />
      </div>
    );
  }
}

class RandomNumber extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      r:0
    };

    this.getRandomNumber = this.getRandomNumber.bind(this);

  }

  getRandomNumber(){
    this.setState({
      r: Math.floor(Math.random()*100)
    });

  }

  render(){
    //console.log(this.props);
    return(
      <div>
        <button onClick={this.getRandomNumber}>Random Number</button>
        <Number randomNumberProps = {this.state.r} />
      </div>
    );
  }
}

class Number extends React.Component {

  render(){
    //console.log(this.props);
    return(
      <div>
        <p>{this.props.randomNumberProps}</p>
      </div>
    );
  }
}

export default App;
