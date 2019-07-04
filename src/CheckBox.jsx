import React from 'react';

class CheckBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        completed: this.props.item.completed,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
      const target = event.target;
      const name = target.name;
      const checked = target.checked;

      this.setState({
        [name]: checked
      });

      this.props.onUpdateItemStatus(this.props.item);
  }

  render(){
    return (
        <input type="checkbox" 
            name="completed" 
            checked={this.state.completed} 
            onChange={this.handleInputChange}
        />);
    }
}
export default CheckBox;