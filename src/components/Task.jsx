import { Edit2, Trash2 } from "lucide-react";
import { memo, useState } from "react";
import { normalizeText } from "../utils/format.js";
import EditTaskForm from "./EditTaskForm";

const Task = memo(({ task, deleteTask, editTask, toggleTask }) => {
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
				<div className="flex w-full gap-6">
					<div className="flex gap-3 items-center grow">
						<input
							type="checkbox"
							checked={task.completed}
							className="cursor-pointer w-5 h-5 "
							onChange={(e) => toggleTask(task.id, e.target.checked)}
						/>
						<p
							className={`grow ${task.completed ? "line-through text-gray-500" : ""}`}
						>
							{task.text}
						</p>
						<div className="flex gap-4 text-xs">
							<p
								className={
									task.priority === "high"
										? "text-red-500"
										: task.priority === "low"
											? "text-green-500"
											: "text-orange-500"
								}
							>
								{normalizeText(task.priority)}
							</p>
							<p className="text-gray-400">{task.due}</p>
						</div>
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
				</div>
			)}
		</div>
	);
});

export default Task;
