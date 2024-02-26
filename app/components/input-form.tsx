import { type DataProps } from "../page";

export default function InputForm({
  input,
  setInput,
  setShowInput,
  Tasks,
  setTasks,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
  Tasks: DataProps[];
  setTasks: React.Dispatch<React.SetStateAction<DataProps[]>>;
}) {
  const handleAddNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const newTask: DataProps = {
      id: Tasks.length + 1,
      title: input,
      done: false,
    };

    setTasks([...Tasks, newTask]);

    setInput("");
    setShowInput(true);
  };

  return (
    <form className="flex gap-2" onSubmit={handleAddNewTask}>
      <input
        className="flex-1 border-2 border-black rounded-md"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="border-2 border-sky-500 text-sky-500 py-1 px-2 rounded-md"
        type="submit"
      >
        Dodaj
      </button>
    </form>
  );
}
