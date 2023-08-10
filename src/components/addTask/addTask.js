import {Component} from "react";
import './addTask.css'

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    changeInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

    addTaskHandler = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.name);
    }

    render() {
        return (
            <div className="addTask mt-3">
                <h2 className="text-white">ToDo List App</h2>
                <form>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="What do you have planned?"
                        onChange={this.changeInput}
						value={this.state.name}
                        name="name" />
                    <button className="btn btn-primary mt-4 form-control" onClick={this.addTaskHandler}>Add Task</button>
                </form>
            </div>
        )
    }
}


export default AddTask;