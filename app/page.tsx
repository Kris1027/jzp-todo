"use client";
import { useState } from "react";

type DataProps = {
  id: number;
  title: string;
  done: boolean;
};

const data: DataProps[] = [
  {
    id: 1,
    title: "Zapłać rachunki",
    done: false,
  },
  {
    id: 2,
    title: "Wyrzucić śmieci",
    done: true,
  },
];

export default function Home() {
  const [Tasks, setTasks] = useState(data);
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(true);

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

  const doneTasks = Tasks.filter((task) => !task.done);

  return (
    <main className="bg-sky-500 min-h-screen flex justify-center pt-5 items-start">
      <div className="w-[30rem] bg-white rounded-lg p-5 flex flex-col">
        <div className="pb-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">
              {doneTasks.length === 0
                ? "Brak zadań do zrobienia!"
                : "Do zrobienia"}
            </h1>
            {doneTasks.length === 0 ? (
              ""
            ) : (
              <p className="text-lg font-semibold">
                <span>{doneTasks.length}</span>{" "}
                <span>{doneTasks.length === 1 ? "zadanie" : "zadania"}</span>
              </p>
            )}
          </div>
          <div>
            {showInput && (
              <button
                className="py-4 px-6 bg-sky-500 text-white font-bold rounded-full hover:bg-white hover:text-sky-500 border-2 hover:border-sky-500"
                onClick={() => setShowInput((prev: boolean) => !prev)}
              >
                +
              </button>
            )}
          </div>
        </div>
        {!showInput && (
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
        )}
        <ul>
          {Tasks.map((task) => (
            <li key={task.id} className="flex flex-col">
              <div className="h-[1px] w-full bg-black my-4"></div>
              <div className="flex justify-between items-center">
                <p className={task.done ? "line-through" : ""}>{task.title}</p>
                <div className="flex gap-2">
                  {!task.done && (
                    <button
                      className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white py-1 px-2 rounded-md"
                      onClick={() => handleDoneTask(task.id)}
                    >
                      Zrobione
                    </button>
                  )}
                  <button
                    className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white py-1 px-2 rounded-md"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Usuń
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
