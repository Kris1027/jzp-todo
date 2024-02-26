import { DataProps } from "../page";

export default function TaskItem({
  id,
  title,
  done,
  onDone,
  onDelete,
}: DataProps & {
  onDone: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  return (
    <li className="flex flex-col">
      <div className="h-[1px] w-full bg-black my-4"></div>
      <div className="flex justify-between items-center">
        <p className={done ? "line-through" : ""}>{title}</p>
        <div className="flex gap-2">
          {!done && (
            <button
              className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white py-1 px-2 rounded-md"
              onClick={() => onDone(id)}
            >
              Zrobione
            </button>
          )}
          <button
            className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white py-1 px-2 rounded-md"
            onClick={() => onDelete(id)}
          >
            Usuń
          </button>
        </div>
      </div>
    </li>
  );
}
