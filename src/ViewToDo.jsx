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
      let newList = this.props.toDoList.map((item) => (<button key={item.todoItemId} onClick={()=>this.props.onDelete(item.todoItemId)}> {item.name}</button>));

      return (
        <div className="card">
          <div className="card-header">View Todos</div>
          <div className="card-body">
              <div>
                  {  
                    newList 
                  }        
              </div>
          </div>
        </div>
      );
    }
  }
export default ViewToDo;