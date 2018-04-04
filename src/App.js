import React, { Component } from 'react';
import './App.css';
import LineChart from './LineChart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <h1>galvanize</h1>
        </header>
        <main>
        <section>
            <h2>Students Graduated</h2>
            <LineChart />
        </section>
        </main>
      </div>
    );
  }
}

export default App;
