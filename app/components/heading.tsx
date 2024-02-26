import { HeadingTasksAmount } from "../utils/heading-tasks-amount";

export default function Heading({
  activeTasks,
  showInput,
  setShowInput,
}: {
  activeTasks: number;
  showInput: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="pb-5 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">
          {activeTasks === 0 ? "Brak zadań do zrobienia!" : "Do zrobienia"}
        </h1>
        {activeTasks === 0 ? (
          ""
        ) : (
          <p className="text-lg font-semibold">
            <span>{activeTasks}</span>{" "}
            <span>{HeadingTasksAmount(activeTasks)}</span>
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
  );
}
