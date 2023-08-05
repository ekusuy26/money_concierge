export default function ListContent({ clickedContent }) {
  return (
    <>
      <button
        className="w-full flex justify-between items-center border-b px-5 py-2 bg-white"
        onClick={clickedContent}
      >
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-red-500 inline-block"></div>
          <span className="ms-3">項目名</span>
        </div>
        <div className="">100円</div>
      </button>
    </>
  );
}
