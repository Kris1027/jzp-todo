import { DataProps } from "../page";

export default function TaskItem({
  id,
  title,
  done,
  Tasks,
  setTasks,
}: DataProps & {
  Tasks: DataProps[];
  setTasks: React.Dispatch<React.SetStateAction<DataProps[]>>;
}) {
  const handleDeleteTask = (id: number) => {
    const newTasks = Tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleDoneTask = (id: number) => {
    const newTasks = Tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: true };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <li className="flex flex-col">
      <div className="h-[1px] w-full bg-black my-4"></div>
      <div className="flex justify-between items-center">
        <p className={done ? "line-through" : ""}>{title}</p>
        <div className="flex gap-2">
          {!done && (
            <button
              className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white py-1 px-2 rounded-md"
              onClick={() => handleDoneTask(id)}
            >
              Zrobione
            </button>
          )}
          <button
            className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white py-1 px-2 rounded-md"
            onClick={() => handleDeleteTask(id)}
          >
            Usuń
          </button>
        </div>
      </div>
    </li>
  );
}
