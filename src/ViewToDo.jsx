import React from 'react';

// export default (props) => (
//     <div className="card">
//         <div className="card-header">View Todos</div>
//         <div className="card-body">
//             <div>
//                 {props.toDoList.size}        
//             </div>
//         </div>
//     </div>
// );

class ViewToDo extends React.Component {

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
        return <li className={color} key={item.todoItemId}> 
          <input type="checkbox" name="completed" value={item.completed} onChange={()=>this.props.onUpdateItemStatus(item.todoItemId)}/>
          {item.name}
          <button className="btn" onClick={()=>this.props.onDelete(item.todoItemId)}><i className="fa fa-trash-o" id="deleteItem"></i></button>
          <button className="btn"><i className="fa fa-edit" id="editItem"></i></button>
          </li>

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