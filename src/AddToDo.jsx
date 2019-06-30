import React from 'react';

export default (props) => (
    <div className="card">
        <div className="card-header">Add New Todo</div>
        <div className="card-body">
            <div>
                <label for="newToDo"><strong>I want to..</strong></label>
                <textarea className="form-control" id="newToDo" name="newToDo" rows="6" cols="50">
                </textarea>
                
                <div className="form-group">
                    <label for="newToDoPriority"><strong>How much of a priority is this?</strong></label>
                    <select className="form-control" id="newToDoPriority"
                        name="newToDoPriority"      
                    >
                        <option value="Select a Priority">Select a Priority</option>
                        <option value="Low Priority">Low Priority</option>
                        <option value="Mid Priority">Mid Priority</option>
                        <option value="High Priority">High Priority</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="card-footer">
            <button className="btn btn-success btn-block" name="addButton">Add</button>
        </div>
    </div>
);