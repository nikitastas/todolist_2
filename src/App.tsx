import './App.css';
import {Todolist} from "./Todolist";
import {useState} from 'react';

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

function App() {
	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: 1, title: 'HTML&CSS', isDone: true },
		{ id: 2, title: 'JS', isDone: true },
		{ id: 3, title: 'ReactJS', isDone: false },
		{ id: 4, title: 'Redux', isDone: false },
		{ id: 5, title: 'Typescript', isDone: false },
		{ id: 6, title: 'RTK query', isDone: false },
	])

	const [filter, setFilter] = useState<FilterType>('all')

	const removeTask = (taskId: number) => {
		setTasks(tasks.filter(f => f.id !==taskId))
	}

	const changeFilter = (filter: FilterType) => {
		setFilter(filter)
	}

	let filteredTasks: Array<TaskType> = tasks
	if (filter === 'active') {
		filteredTasks = tasks.filter(task => !task.isDone)
	}
	if (filter === 'completed') {
		filteredTasks = tasks.filter(task => task.isDone)
	}




	return (
		<div className="App">
			<Todolist title="What to learn" tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter} />
		</div>
	);
}

export default App;
