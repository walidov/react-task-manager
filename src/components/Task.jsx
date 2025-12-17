import { Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import EditTaskForm from "./EditTaskForm";

export default function Task({ task, deleteTask, editTask, toggleTask }) {
	const [editingTask, setEditingTask] = useState(null);

	return (
		<div className="bg-white rounded-xl px-6 py-4 shadow flex items-center justify-between hover:shadow-lg">
			{editingTask ? (
				<EditTaskForm
					task={task}
					editTask={editTask}
					setEditingTask={setEditingTask}
				/>
			) : (
				<>
					<div className="flex items-center">
						<input
							type="checkbox"
							checked={task.completed}
							className="mr-4 cursor-pointer w-5 h-5 "
							onChange={(e) => toggleTask(task.id, e.target.checked)}
						/>
						<span
							className={task.completed ? "line-through text-gray-500" : ""}
						>
							{task.text}
						</span>
					</div>
					<div>
						<button
							className="text-blue-500 rounded-md p-2 cursor-pointer hover:bg-blue-50"
							type="button"
							onClick={() => setEditingTask(task.id)}
						>
							<Edit2 className="w-4 h-4" />
						</button>
						<button
							className="ml-2 text-red-400 rounded-md p-2 cursor-pointer hover:bg-red-50"
							type="button"
							onClick={() => deleteTask(task.id)}
						>
							<Trash2 className="w-4 h-4" />
						</button>
					</div>
				</>
			)}
		</div>
	);
}
