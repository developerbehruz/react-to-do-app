import './App.css';
import AddTask from '../addTask/addTask';
import Tasks from '../tasks/tasks';
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {id: 1, name: 'Learning Eglish'},
                {id: 2, name: 'Reading Book'},
                {id: 3, name: 'Writing Code'},
            ]
        }
    }

    addTask = (name) => {
        this.setState(({tasks}) => ({
            tasks: [ ...tasks, {id: this.state.tasks[this.state.tasks.length-1].id+1, name: name}]
        }))
    }


    render() {
     const tasks = this.state.tasks;
        return (
            <main>
                <div className="container">
                    <AddTask addTask={this.addTask} />
                    <Tasks data={tasks} />
                </div>
            </main>
        );
    }
}

export default App;