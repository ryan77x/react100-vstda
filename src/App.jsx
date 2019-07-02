import React, { Component } from 'react';
import AddToDo from './AddToDo'
import ViewToDo from './ViewToDo'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      toDoList: [],
      biggestIDNumber: 0,
    };
  }

  addItem(item){
    let toDoList = this.state.toDoList;
    let newItem = item;
    let todoItemId = this.state.biggestIDNumber;

    newItem.todoItemId = todoItemId;
    newItem.completed = false;

    toDoList.push(newItem);
    this.setState({
      toDoList: toDoList,
      biggestIDNumber: todoItemId+1,
    })
  }

  deleteItem(itemID){
    let toDoList = this.state.toDoList;
    let itemIndex = this.getItemIndex(itemID);

    if (itemIndex != null){
        toDoList.splice(itemIndex, 1);
        this.setState({
          toDoList: toDoList
        })
    }
    else{
        console.log("Item does not exist");
    }
  }

  getItemIndex(itemId){
    let toDoList = this.state.toDoList;
    for (let i=0; i<toDoList.length; i++){
        if (toDoList[i].todoItemId == itemId){
            return i;
        }
    }
    return null;
  }

  render() {

    const hrStyle = {
      'borderColor': 'white',
    };

    return (
      <div className='container'>
        <h1 className="text-white">Very Simple To Do App</h1>
        <p className="text-white">Track all of the things</p>
        <hr style={hrStyle}/>

        <div className="row">
          <div className="col-sm-4" >
            <AddToDo 
              onAdd={(item) => this.addItem(item)}
            />
          </div>
          <div className="col-sm-8">
            <ViewToDo 
              toDoList={this.state.toDoList}
              onDelete={(i) => this.deleteItem(i)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
