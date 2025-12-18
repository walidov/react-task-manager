import { ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Footer from "./components/Footer";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";

function App() {
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState("all");

	const filteredTasks = useMemo(() => {
		return tasks.filter((task) => {
			if (filter === "pending") return !task.completed;
			if (filter === "completed") return task.completed;
			return true;
		});
	}, [filter, tasks]);

	return (
			<div className="max-w-3xl mx-auto mt-12 px-4 lg:px-0">
				<header className="text-center">
					<h1 className="text-4xl font-bold flex gap-2 items-center justify-center">
						<ShieldCheck className="w-8 h-8" />
						Task Manager
					</h1>
					<h2 className="text-2xl text-gray-500 mt-2 font-extralight">
						Organize your daily tasks efficiently
					</h2>
				</header>
				<main>
					<AddTaskForm setTasks={setTasks} />
					<TaskStats tasks={tasks} />
					<TaskFilter filter={filter} setFilter={setFilter} />
					<TaskList
						filteredTasks={filteredTasks}
						tasks={tasks}
						setTasks={setTasks}
					/>
					<Footer filteredTasks={filteredTasks} tasks={tasks} />
					<pre className="mt-4">{JSON.stringify(tasks, null, 2)}</pre>
				</main>
			</div>
	);
}

export default App;
