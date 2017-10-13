import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import '../../style/App.css';
import {fetch} from '../../common/api.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSub = this.handleSub.bind(this);
    this.state = {
      value: '',
      data: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input placeholder="连接api数值测试"  onChange={(value) => this.handleValueChange(value)}></input>
        <input type="button" onClick={this.handleSub} value="api测试"></input>
        <ul>
            {this.state.data.map(function(cv, index) {
              return (<li key={index}>{cv.uid || 'testid'}&nbsp;<span>{cv.username || 'testname'}</span></li>)
            })}
        </ul>
      </div>
    );
  }

  handleValueChange(e) {
    console.log('test');
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
    // console.log(cb);
  }
  handleSub() {
    const _value = this.state.value;
    console.log(_value);
    fetch('api-test/test', {
      "name": "sam",
      "id": 22333
  })
    .then((res) => {
      console.log('--------------');
      console.log( res);
       // res.json();
       this.setState({
        data: res
       })
    })
  }
}

export default App;
