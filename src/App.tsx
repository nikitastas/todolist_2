import './App.css';
import {Todolist} from "./Todolist";
import {useState} from 'react';

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

function App() {
	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
		{ id: 5, title: 'Typescript', isDone: false },
		{ id: 6, title: 'RTK query', isDone: false },
	])

	const removeTask = (taskId: number) => {
		setTasks(tasks.filter(f => f.id !==taskId))
	}


	return (
		<div className="App">
			<Todolist title="What to learn" tasks={tasks} />
		</div>
	);
}

export default App;
