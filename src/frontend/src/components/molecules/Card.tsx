export default function Card({ children }) {
  return (
    <>
      <div className="border rounded-lg mx-5 mb-5 px-5 shadow bg-white">
        {children}
      </div>
    </>
  );
}
