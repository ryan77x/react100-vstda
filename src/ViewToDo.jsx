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
      //let newList = this.props.toDoList.map((item) => (<button key={item.todoItemId} onClick={()=>this.props.onDelete(item.todoItemId)}> {item.name}</button>));

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
        return <li className={color} key={item.todoItemId} onClick={()=>this.props.onDelete(item.todoItemId)}> 
          <span><input type="checkbox" name="completed" value="false"/>
          </span>
          {item.name}
          <span className="pull-right">
            <button className="btn btn-xs btn-info">CCS</button>
            <button className="btn btn-xs btn-warning">
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </span>
          </li>

      }); 

      return (
        <div className="card">
          <div className="card-header">View Todos</div>
          <div className="card-body">
              <ul className="list-group">
                  {  
                    newList 
                  }        
              </ul>
          </div>
        </div>
      );
    }
  }
export default ViewToDo;