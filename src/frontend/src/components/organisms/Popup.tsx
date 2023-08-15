export default function Popup({
  message,
  closeFunc,
  customBtnFunc = null,
  customBtnTitle = "続けて入力する",
}) {
  return (
    <div className="fixed inset-0 bg-slate-600 bg-opacity-70 z-blackOut">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white w-full mx-5 rounded-md p-5">
          <p className="text-center mb-5">{message}</p>
          <div className="flex gap-4">
            <button
              className="mj-btn bg-slate-800 text-white"
              onClick={closeFunc}
            >
              閉じる
            </button>
            {customBtnFunc && (
              <button
                className="mj-btn border-slate-800 text-slate-800"
                onClick={customBtnFunc}
              >
                {customBtnTitle}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
