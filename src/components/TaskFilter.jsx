import { memo } from "react";

const TaskFilter = memo(({ filter, setFilter }) => {
	const buttons = [
		{ label: "All", value: "all" },
		{ label: "Pending", value: "pending" },
		{ label: "Completed", value: "completed" },
	];
	return (
		<div className="bg-white rounded-xl px-6 py-4 shadow mt-6 flex gap-4">
			{buttons.map((button, index) => {
				return (
					<button
						key={index}
						type="button"
						className={`cursor-pointer py-2 px-4 bg-gray-200 rounded-lg ${filter === button.value && "active"}`}
						onClick={() => setFilter(button.value)}
					>
						{button.label}
					</button>
				);
			})}
		</div>
	);
});

export default TaskFilter;
