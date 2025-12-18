export default function Footer({ filteredTasks, tasks }) {
	return (
		<div className="text-center text-gray-500 mt-6">
			{`Showing ${filteredTasks?.length} from ${tasks?.length}`}
		</div>
	);
}
