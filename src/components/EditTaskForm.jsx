import { Check, X } from "lucide-react";
import { useState } from "react";

export default function EditTaskForm({ task, editTask, setEditingTask }) {
	const [taskInput, setTaskInput] = useState(task.text);

	const handleUpdateTask = () => {
		editTask(taskInput, task.id);
		setEditingTask(false);
	};

	return (
		<div className="flex gap-3 w-full">
			<input
				type="text"
				className="grow border rounded-md py-1 px-3 border-gray-300"
				value={taskInput}
				onChange={(e) => setTaskInput(e.target.value)}
			/>
			<div className="flex gap-3">
				<form onSubmit={() => handleUpdateTask()}>
					<button
						type="submit"
						className="bg-green-500 text-white rounded-md p-2 cursor-pointer hover:bg-green-600"
					>
						<Check className="w-4 h-4" />
					</button>
				</form>
				<button
					type="button"
					className="bg-gray-500 text-white rounded-md p-2 cursor-pointer hover:bg-gray-600"
					onClick={() => setEditingTask(false)}
				>
					<X className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
