import { useState } from "react";

export default function InputForm({
  onAdd,
}: {
  onAdd: (title: string) => void;
}) {
  const [input, setInput] = useState<string>("");

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
      }}
    >
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
