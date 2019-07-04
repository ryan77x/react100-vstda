import React from 'react';

class EditToDo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        description: this.props.item.description,
        priority: this.props.item.priority,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleInputChange(event){
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState({
        [name]: value
      });
  }

  handleSaveClick(event){
    let newItem = this.props.item;
    let priority = this.state.priority;
    priority = Number(priority);

    newItem.description = this.state.description;
    newItem.priority = priority;
    newItem.editEnabled = false;
    this.props.onUpdateItem(newItem);
  }

  render(){
    return (
          <div>
            <label><strong>Description</strong></label>
            <textarea className="form-control" id="description" rows="6" cols="50"
                    name="description"   
                    value={this.state.description}
                    onChange={this.handleInputChange}>
            </textarea>
          
            <div className="form-group">
                <label><strong>Priority</strong></label>
                <select className="form-control" id="priority"
                    name="priority"
                    value={this.state.priority}
                    onChange={this.handleInputChange}>
                    <option value="" selected disabled hidden>{this.state.priority}</option>
                    <option value="1">Low Priority</option>
                    <option value="2">Mid Priority</option>
                    <option value="3">High Priority</option>
                </select>
            </div>
            <button className="btn btn-success" name="saveButton" onClick={this.handleSaveClick}>Save</button>
          </div>
        );
    }
}
export default EditToDo;