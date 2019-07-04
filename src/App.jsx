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

  updateItem(item){
    //make a deep copy
    let toDoList = [...this.state.toDoList];
    let newItem = item;
    let itemIndex = this.getItemIndex(newItem.id);

    if (itemIndex != null){
      toDoList[itemIndex].description = newItem.description;
      toDoList[itemIndex].priority = newItem.priority;
      toDoList[itemIndex].editEnabled = newItem.editEnabled;

      this.setState({
        toDoList: toDoList
      })
    }
    else{
        console.log("Item does not exist");
    }
  }
  
  updateItemStatus(item){
    let toDoList = [...this.state.toDoList];
    let itemIndex = this.getItemIndex(item.id);

    if (itemIndex != null){
      toDoList[itemIndex].completed = !toDoList[itemIndex].completed;
      this.setState({
        toDoList: toDoList
      })
    }
    else{
        console.log("Item does not exist");
    }
  }

  enableItemEdit(itemID){
    let toDoList = [...this.state.toDoList];
    let itemIndex = this.getItemIndex(itemID);

    if (itemIndex != null){
      toDoList[itemIndex].editEnabled = true;
      this.setState({
        toDoList: toDoList,
      })
    }
    else{
        console.log("Item does not exist");
    }
  }

  addItem(item){
    let toDoList = [...this.state.toDoList];
    let newItem = item;
    let id = this.state.biggestIDNumber;

    newItem.id = id;

    toDoList.push(newItem);
    this.setState({
      toDoList: toDoList,
      biggestIDNumber: id+1,
    })
  }

  deleteItem(itemID){
    let toDoList = [...this.state.toDoList];
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
        if (toDoList[i].id == itemId){
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
              onDelete={(itemID) => this.deleteItem(itemID)}
              onUpdateItemStatus={(item) => this.updateItemStatus(item)}
              onUpdateItem={(item) => this.updateItem(item)}
              onEnableItemEdit={(itemID) => this.enableItemEdit(itemID)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
