import {Component} from "react";
import './task-item.css';

class TaskItem extends Component {
    render() {
        const {id, name} = this.props
        return (
            <div className="task-item alert alert-dark d-flex justify-content-between" role="alert">
                <h6>{name}</h6>
                <button className="btn btn-danger" taskid={id}>Delete</button>
            </div>
        )
    }
}

export default TaskItem