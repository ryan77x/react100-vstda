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

    renderToDoItem() {
      return (
      <div>
        {this.props.toDoList.size} 
      </div>
      );
    }
  
    render() {
      return (
        <div className="card">
        <div className="card-header">View Todos</div>
        <div className="card-body">
            <div>
                { let i=0;  
                    this.renderToDoItem()}        
            </div>
        </div>
    </div>
      );
    }
  }
export default ViewToDo;