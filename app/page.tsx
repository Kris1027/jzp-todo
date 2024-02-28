"use client";
import { useReducer, useState } from "react";
import TaskItem from "./components/task-item";
import InputForm from "./components/input-form";
import Heading from "./components/heading";

export type DataProps = {
  id: number;
  title: string;
  done: boolean;
};

const initialState: DataProps[] = [
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

const reducer = (state: DataProps[], action: any) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.title,
          done: false,
        },
      ];
    case "DELETE":
      return state.filter((task) => task.id !== action.id);
    case "DONE":
      return state.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );
    default:
      return state;
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddNewTask = (title: string) => {
    dispatch({ type: "ADD", title });
  };

  const handleDeleteTask = (id: number) => {
    dispatch({ type: "DELETE", id });
  };

  const handleDoneTask = (id: number) => {
    dispatch({ type: "DONE", id });
  };

  const [showInput, setShowInput] = useState(true);

  const doneTasks = state.filter((task) => !task.done);
  const activeTasks = doneTasks.length;

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
          {state.map((task) => (
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
