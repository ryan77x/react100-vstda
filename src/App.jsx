import React, { Component } from 'react';
import AddToDo from './AddToDo'
import ViewToDo from './ViewToDo'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      toDoList: props.list
    };
  }

  deleteItem(itemID){
    let toDoList = this.state.toDoList;
    let itemIndex = this.getItemIndex(itemID);

    if (itemIndex != null){
        let item = toDoList[itemIndex];
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
            <ViewToDo 
              toDoList={this.state.toDoList}
              onClickDelete={(i) => this.deleteItem(i)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
