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
  const [showInput, setShowInput] = useState(true);

  const doneTasks = Tasks.filter((task) => !task.done);
  const activeTasks = doneTasks.length;

  const handleAddNewTask = (newTask: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.random(),
        title: newTask,
        done: false,
      },
    ]);
    setShowInput(false);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleDoneTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <main className="bg-sky-500 min-h-screen flex justify-center pt-5 items-start">
      <div className="w-[30rem] bg-white rounded-lg p-5 flex flex-col">
        <Heading
          activeTasks={activeTasks}
          showInput={showInput}
          setShowInput={setShowInput}
        />
        {!showInput && <InputForm onAdd={handleAddNewTask} />}
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
