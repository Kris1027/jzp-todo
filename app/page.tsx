export default function Home() {
  return (
    <main className="bg-sky-500 h-screen flex justify-center pt-5">
      <div className=" h-64 w-96 bg-white rounded-lg p-5 flex flex-col gap-3">
        <div>
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
            <button className="border-2 border-sky-500 text-sky-500 p-1 rounded-md">
              Dodaj
            </button>
          </form>
        </div>
        <ul>
          <li className="flex flex-col gap-2">
            <div className="h-[1px] w-full bg-black"></div>
            <div className="flex justify-between items-center">
              <p>Zapłać rachunki</p>
              <div className="flex gap-2">
                <button className="border-2 border-sky-500 text-sky-500 p-1 rounded-md">
                  Zrobione
                </button>
                <button className="border-2 border-sky-500 text-sky-500 p-1 rounded-md">
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
