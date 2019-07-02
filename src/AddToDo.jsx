import React from 'react';

class AddToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toDoDescription: '',
            toDoPriority: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        });
    }

    handleAddClick(event){
        let item = {
            todoItemId: 0,
            name: this.state.toDoDescription,
            priority: this.state.toDoPriority,
            completed: false
        }

        this.props.onAdd(item);
    }

    render() {
      return (
        <div className="card">
            <div className="card-header">Add New Todo</div>
            <div className="card-body">
                <div>
                    <label><strong>I want to..</strong></label>
                    <textarea className="form-control" id="toDoDescription" rows="6" cols="50"
                            name="toDoDescription"   
                            value={this.state.toDoDescription} 
                            onChange={this.handleInputChange}>
                    </textarea>
                    
                    <div className="form-group">
                        <label><strong>How much of a priority is this?</strong></label>
                        <select className="form-control" id="toDoPriority"
                            name="toDoPriority"
                            value={this.state.toDoPriority} 
                            onChange={this.handleInputChange}      
                        >
                            <option value="" selected disabled hidden>Select a Priority</option>
                            <option value="1">Low Priority</option>
                            <option value="2">Mid Priority</option>
                            <option value="3">High Priority</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-success btn-block" name="addButton" onClick={this.handleAddClick}>Add</button>
            </div>
        </div>
      );
    }
  }
export default AddToDo;