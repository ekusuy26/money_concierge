export default function MainMenu({ callback }) {
  return (
    <nav className="absolute inset-x-0 bottom-0">
      <div className="grid grid-cols-4 divide-x shadow-top">
        <button className="py-3" onClick={() => callback("home")}>
          ホーム
        </button>
        <button className="py-3" onClick={() => callback("history")}>
          入出金
        </button>
        <button className="py-3" onClick={() => callback("hoge")}>
          3
        </button>
        <button className="py-3" onClick={() => callback("hoge")}>
          4
        </button>
      </div>
    </nav>
  );
}
