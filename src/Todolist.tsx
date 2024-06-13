import {FilterType, TaskType} from './App';
import {Button} from "./Button";

type PropsType = {
	title: string
	tasks: TaskType[]
	removeTask: (taskId: number) => void
	changeFilter: (filter: FilterType) => void
}

export const Todolist = ({title, tasks, removeTask, changeFilter}: PropsType) => {

	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input/>
				<Button title={'+'}/>
			</div>
			{
				tasks.length === 0
					? <p>Тасок нет</p>
					: <ul>
						{tasks.map((task) => {
							return <li key={task.id}>
								<input type="checkbox" checked={task.isDone}/>
								<span>{task.title}</span>
								<button onClick={() => removeTask(task.id)}>x</button>
							</li>
						})}
					</ul>
			}
			<div>
				<Button title={'All'} onClick={() => changeFilter('all')}/>
				<Button title={'Active'} onClick={() => changeFilter('active')}/>
				<Button title={'Completed'} onClick={() => changeFilter('completed')}/>
			</div>
		</div>
	)
}
