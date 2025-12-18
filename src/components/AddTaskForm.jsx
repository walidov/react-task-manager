import { Plus } from "lucide-react";
import { memo, useState } from "react";

const AddTaskForm = memo(({ setTasks }) => {
	const [taskData, setTaskData] = useState({text: "", priority: "high", due: ""});
	const [error, setError] = useState("");

	const handleAddTask = (e) => {
		e.preventDefault();
		if (taskData.text.trim() !== "" && taskData.due.trim() !== "") {
			setTasks((prevTasks) => [
				...prevTasks,
				{ id: Date.now(), text: taskData.text, priority: taskData.priority, due: taskData.due, completed: false },
			]);
			setTaskData({text: "", priority: "high", due: ""});
			setError("");
		} else {
			setError("Please enter all fields!")
		}
	};

	return (
		<div className="bg-white rounded-xl p-6 shadow mt-6">
			<form onSubmit={handleAddTask} className="flex flex-col md:flex-row">
				<div className="flex flex-col justify-end md:me-3 grow">
					<label className="text-sm text-gray-500">Task:</label>
					<input
						type="text"
						placeholder="Add new task..."
						className="h-12 px-4 border border-gray-300 rounded-lg outline-none mt-1"
						value={taskData.text}
						onChange={(e) => setTaskData({ ...taskData, text: e.target.value })}
					/>
				</div>
				<div className="flex flex-col xs:flex-row gap-3 items-end mt-4 md:mt-0">
					<div className="flex gap-3 w-full grow">
						<div className="flex flex-col justify-end grow">
							<label className="text-sm text-gray-500">Priority:</label>
							<select placeholder="Priority" className="border border-gray-300 rounded-md px-2 h-12 mt-1" value={taskData.priority} onChange={(e) => setTaskData({ ...taskData, priority: e.target.value })}>
								<option value="high">High</option>
								<option value="medium">Medium</option>
								<option value="low">Low</option>
							</select>
						</div>
						<div className="flex flex-col justify-end grow">
							<label className="text-sm text-gray-500">Due date:</label>
							<input type="date" placeholder="Due Date" className="border border-gray-300 rounded-md px-2 h-12 mt-1" value={taskData.due} onChange={(e) => setTaskData({ ...taskData, due: e.target.value })} />
						</div>
					</div>
					<button
						type="submit"
						className="bg-blue-500 text-white h-12 px-6 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-blue-600 transition justify-center mt-2 w-full xs:w-auto"
					>
						<Plus className="w-6 h-6" /> Add
					</button>
				</div>
			</form>
			{error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
		</div>
	);
});

export default AddTaskForm;
