import React from 'react';
import EditToDo from './EditToDo'
import CheckBox from './CheckBox'

class ViewToDo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let colorList = ['success', 'secondary', 'info', 'warning', 'danger', 'primary', 'dark', 'light'];
    let i = -1;
    let color = "";
    let newList = this.props.toDoList.map((item) => {
      if (i == colorList.length-1){
        i = 0;
      }
      else{ 
        i++;
      }

      color = "list-group-item list-group-item-" + colorList[i];
      
      if(item.editEnabled){
        return <li className={color} key={item.id}>  
          <EditToDo 
            item={item}
            onUpdateItem={() => this.props.onUpdateItem(item)}
          />
          </li>
      }
      else{
        return <li className={color} key={item.id}> 
          <CheckBox 
            item={item}
            onUpdateItemStatus={() => this.props.onUpdateItemStatus(item)}
          />
          {item.description}
          <button className="btn" onClick={()=>this.props.onDelete(item.id)}><i className="fa fa-trash-o" id="deleteItem"></i></button>
          <button className="btn" onClick={()=>this.props.onEnableItemEdit(item.id)}><i className="fa fa-edit" id="editItem"></i></button>
          </li>
      }
    }); 

    return (
      <div className="card">
        <div className="card-header">View Todos</div>
          <ul className="list-group">
            {  
              newList 
            }        
          </ul>
      </div>
    );
  }
}
export default ViewToDo;