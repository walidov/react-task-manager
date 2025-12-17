import { Plus } from "lucide-react";
import { memo, useState } from "react";

const AddTaskForm = memo(({ setTasks }) => {
	const [taskInput, setTaskInput] = useState("");

	const handleAddTask = (e) => {
		e.preventDefault();
		if (taskInput.trim() !== "") {
			setTasks((prevTasks) => [
				...prevTasks,
				{ id: Date.now(), text: taskInput, completed: false },
			]);
			setTaskInput("");
		}
	};

	return (
		<div className="bg-white rounded-xl p-6 shadow mt-6">
			<form onSubmit={handleAddTask} className="flex gap-4">
				<input
					type="text"
					placeholder="Add new task..."
					className="w-full py-3 px-4 border border-gray-300 rounded-lg outline-none"
					value={taskInput}
					onChange={(e) => setTaskInput(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-blue-600 transition"
				>
					<Plus className="w-6 h-6" /> Add
				</button>
			</form>
		</div>
	);
});

export default AddTaskForm;
