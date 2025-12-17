import { memo } from "react";

const TaskStats = memo(({ tasks }) => {
	return (
		<div className="mt-6 grid grid-cols-3 gap-4 text-center">
			<div className="bg-white rounded-xl p-6 shadow grow">
				<p className="text-3xl font-bold">{tasks.length}</p>
				<p>Total</p>
			</div>
			<div className="bg-white rounded-xl p-6 shadow grow">
				<p className="text-orange-500 text-3xl font-bold">
					{tasks.filter((task) => !task.completed).length}
				</p>
				<p>Pending</p>
			</div>
			<div className="bg-white rounded-xl p-6 shadow grow">
				<p className="text-green-500 text-3xl font-bold">
					{tasks.filter((task) => task.completed).length}
				</p>
				<p>Completed</p>
			</div>
		</div>
	);
});

export default TaskStats;
