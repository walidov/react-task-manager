import { Search } from "lucide-react";
import { useCallback } from "react";
import Task from "./Task";

export default function TaskList({
	filteredTasks,
	setTasks,
	setSearchKeyword,
}) {
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
		<div className="space-y-3 mt-6">
			{filteredTasks?.length > 0 && (
				<div className="py-2 px-4 border border-gray-200 rounded-lg w-full bg-gray-50 flex items-center">
					<Search className="w-4 h-4 me-3 text-gray-400" />
					<input
						type="text"
						placeholder="Search tasks..."
						className="w-full outline-none"
						onChange={(e) => setSearchKeyword(e.target.value)}
					/>
				</div>
			)}
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
