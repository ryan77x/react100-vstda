import React from 'react';

class AddToDo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
            priority: '',
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
        let priority = this.state.priority;

        if (priority === ''){
            priority = 1;
        }
        else{
            priority = Number(priority);
        }

        let item = {
            id: 0,
            description: this.state.description,
            priority: priority,
            completed: false,
            editEnabled: false,
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
                    <textarea className="create-todo-text form-control" id="description" rows="6" cols="50"
                            name="description"   
                            value={this.state.description} 
                            onChange={this.handleInputChange}>
                    </textarea>
                    
                    <div className="form-group">
                        <br/>
                        <label><strong>How much of a priority is this?</strong></label>
                        <select className="create-todo-priority form-control" id="priority"
                            name="priority"
                            value={this.state.priority} 
                            onChange={this.handleInputChange}>
                            <option value="" selected disabled hidden>Select a Priority</option>
                            <option value="1">Low Priority</option>
                            <option value="2">Mid Priority</option>
                            <option value="3">High Priority</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="create-todo btn btn-success btn-block" name="addButton" onClick={this.handleAddClick}>Add</button>
            </div>
        </div>
        );
    }
}
export default AddToDo;