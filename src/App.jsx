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
	const [searchKeyword, setSearchKeyword] = useState("");

	const filteredTasks = useMemo(() => {
		return tasks.filter((task) => {
			if (filter === "pending")
				return (
					!task.completed &&
					task.text.toLowerCase().includes(searchKeyword.toLowerCase())
				);
			if (filter === "completed")
				return (
					task.completed &&
					task.text.toLowerCase().includes(searchKeyword.toLowerCase())
				);
			return (
				true && task.text.toLowerCase().includes(searchKeyword.toLowerCase())
			);
		});
	}, [filter, tasks, searchKeyword]);

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
					setTasks={setTasks}
					setSearchKeyword={setSearchKeyword}
				/>
				<Footer filteredTasks={filteredTasks} tasks={tasks} />
			</main>
		</div>
	);
}

export default App;
