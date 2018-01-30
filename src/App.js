import React, { Component } from 'react';
import './App.css';
import list from './data/list';



export class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'Hello,World!';
  }
  render() {
    return (
      
      <div className="App">
        <h1>{this.title}</h1>
        <button onClick={this.show}>click</button>
        <table>
          <thead>
            <tr>
              <th>url</th>
              <th>author</th>
              <th>comments</th>
              <th>points</th>
            </tr>
          </thead>
          <tbody>
              {list.map(item =>{
                return (
                  <tr key={item.objectID}>
                    <td><a href={item.url}>{item.title}</a></td>
                    <td><span>{item.author}</span></td>
                    <td><span>{item.num_comments}</span></td>
                    <td><span>{item.points}</span></td>
                  </tr>
                )
              })}
            </tbody>
        </table>
      </div>
    );
  }

  show = () => {
    let res = this.add(1, 2);
    console.log(res);
  }

  add = (num1, num2) => {
    return num1 + num2;
  }
}

// export default App;
