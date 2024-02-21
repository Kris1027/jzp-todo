export default function Home() {
  return (
    <main className="bg-sky-500 h-screen flex justify-center pt-5 items-start">
      <div className="w-[30rem] bg-white rounded-lg p-5 flex flex-col">
        <div className="pb-5">
          <h1 className="text-xl font-bold">Do zrobienia</h1>
          <p className="text-lg font-semibold">
            <span>2</span> zadania
          </p>
        </div>
        <div>
          <form className="flex gap-2">
            <input
              className="flex-1 border-2 border-black rounded-md"
              type="text"
            />
            <button className="border-2 border-sky-500 text-sky-500 py-1 px-2 rounded-md">
              Dodaj
            </button>
          </form>
        </div>
        <ul>
          <li className="flex flex-col">
            <div className="h-[1px] w-full bg-black my-4"></div>
            <div className="flex justify-between items-center">
              <p>Zapłać rachunki</p>
              <div className="flex gap-2">
                <button className="border-2 border-sky-500 text-sky-500 py-1 px-2 rounded-md">
                  Zrobione
                </button>
                <button className="border-2 border-sky-500 text-sky-500 py-1 px-2 rounded-md">
                  Usuń
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
