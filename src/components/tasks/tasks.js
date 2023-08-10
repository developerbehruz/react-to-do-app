import { Component } from "react"
import TaskItem from "../task-item/task-item"
import './tasks.css'


class Tasks extends Component {
    render() {
        const {data} = this.props
        return (
            <div className="tasks">
                <h4 className="text-white mt-4">Task List</h4>
                {data.map(task => (
                    <TaskItem key={task.id} name={task.name} />
                ))
                }
            </div>
        )
    }
}

export default Tasks