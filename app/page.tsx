"use client";
import { useState } from "react";
import TaskItem from "./components/task-item";
import InputForm from "./components/input-form";
import Heading from "./components/heading";

export type DataProps = {
  id: number;
  title: string;
  done: boolean;
};

export default function Home() {
  const [Tasks, setTasks] = useState<DataProps[]>([
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
  ]);
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(true);

  const doneTasks = Tasks.filter((task) => !task.done);
  const activeTasks = doneTasks.length;

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

  return (
    <main className="bg-sky-500 min-h-screen flex justify-center pt-5 items-start">
      <div className="w-[30rem] bg-white rounded-lg p-5 flex flex-col">
        <Heading
          activeTasks={activeTasks}
          showInput={showInput}
          setShowInput={setShowInput}
        />
        {!showInput && (
          <InputForm
            input={input}
            setInput={setInput}
            onAdd={handleAddNewTask}
          />
        )}
        <ul>
          {Tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              done={task.done}
              onDone={handleDoneTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
