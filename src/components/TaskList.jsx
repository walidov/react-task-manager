import { useCallback } from "react";
import Task from "./Task";

export default function TaskList({ filteredTasks, tasks, setTasks }) {
	const editTask = useCallback((taskText, taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, text: taskText } : task,
			),
		);
	}, []);

	const deleteTask = useCallback((taskId) => {
		setTasks((prevTasks) =>
			prevTasks.filter((task) => {
				return task.id !== taskId;
			}),
		);
	}, []);

	const toggleTask = useCallback((taskId, check) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: check } : task,
			),
		);
	}, []);

	return (
		<div className="mt-6 space-y-3">
			{filteredTasks?.length > 0 ? (
				filteredTasks.map((task, index) => (
					<Task
						key={index}
						task={task}
						deleteTask={deleteTask}
						editTask={editTask}
						toggleTask={toggleTask}
					/>
				))
			) : (
				<p className="text-center text-gray-400 bg-white rounded-xl px-6 py-12 shadow">
					No tasks yet! Add one above.
				</p>
			)}
		</div>
	);
}
