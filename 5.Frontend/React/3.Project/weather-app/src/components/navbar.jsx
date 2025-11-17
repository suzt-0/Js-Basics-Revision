export default function navbar() {
  return (
    <>
      <nav className="bg-amber-300 justify-center flex sticky top-0 z-10 shadow-md shadow-amber-400">
        <ul className="flex pt-5 p-3 gap-6 ">
          <div>
            <div className="bg-slate-200 -mx-2 px-4 py-3 rounded-tl-4xl fixed  "></div>
            <div className="bg-slate-200 mx-2 -my-4 px-4.5 py-4.5 rounded-4xl fixed  "></div>
            <div className="bg-amber-500 mx-3 -my-2.5 p-3.5 rounded-4xl fixed animate-pulse"></div>
            <div className="bg-amber-400 mx-3.5 -my-2 p-3 rounded-4xl fixed animate-pulse"></div>
            <div className="bg-amber-300 mx-4 -my-1.5 p-2.5 rounded-4xl fixed "></div>
            <div className="bg-slate-200 px-4 py-4 mx-8 -my-3 rounded-4xl fixed  "></div>
            <div className="bg-slate-200 px-7 py-3 mx-6 rounded-t-4xl fixed  "></div>
          </div>
          <h1 className="mx-16 -my-1 text-2xl font-mono text-blue-800 ">Weather App</h1>
          {/* <li>
            <a
              className="text-blue-800 font-medium hover:text-amber-300 hover:bg-blue-700 p-1 rounded-xs transition-colors"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-blue-800 font-medium hover:text-amber-300 hover:bg-blue-700 p-1 rounded-xs transition-colors"
              href="/weather"
            >
              Weather
            </a>
          </li>
          <li>
            <a
              className="text-blue-800 font-medium hover:text-amber-300 hover:bg-blue-700 p-1 rounded-xs transition-colors"
              href="/favorites"
            >
              Favorites
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
}
