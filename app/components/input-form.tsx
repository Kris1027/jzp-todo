export default function InputForm({
  input,
  setInput,
  onAdd,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form className="flex gap-2" onSubmit={onAdd}>
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
