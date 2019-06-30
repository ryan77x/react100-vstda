import React, { Component } from 'react';
import AddToDo from './AddToDo'
import ViewToDo from './ViewToDo'

class App extends Component {

  constructor(){
    super();
    this.state = {
      toDoList: new Map(),
    };
  }

  render() {

    const hrStyle = {
      'border-color': 'white',
    };

    return (
      <div className='container'>
        <h1 className="text-white">Very Simple To Do App</h1>
        <p className="text-white">Track all of the things</p>
        <hr style={hrStyle}/>

        <div className="row">
          <div className="col-sm-4" >
            <AddToDo />
          </div>
          <div className="col-sm-8">
            <ViewToDo toDoList={this.state.toDoList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
