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
            setShowInput={setShowInput}
            Tasks={Tasks}
            setTasks={setTasks}
          />
        )}
        <ul>
          {Tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              done={task.done}
              Tasks={Tasks}
              setTasks={setTasks}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
