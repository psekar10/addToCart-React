import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters : [
      {id:1, value:6},
      {id:2, value:5},
      {id:3, value:6},
      {id:4, value:5}
    ]
  };
  deleteOnly = (counID) => {
    const arr = this.state.counters.filter(x => x.id !== counID);
    this.setState({counters:arr})
  }
  resetOnly = () => {
    const counters = this.state.counters.map(x => {
      x.value=0;
      return x;
    });
    this.setState({counters})
  }
  handleIncrement = (count) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters[index] = {...count};
    counters[index].value++;
    this.setState({counters});    
  }
  handleDecrement = (count) => {
    if (count.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(count);
      counters[index] = {...count};
      counters[index].value--;
      this.setState({counters});  
    }  
  }
  render() {
    return (
      <React.Fragment>
      <Navbar totalCount={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onReset={this.resetOnly} onDelete={this.deleteOnly} counters={this.state.counters}/>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
