export default function Load({ status }) {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      {status === "now" && <div className="">now loading</div>}
      {status === "fail" && <div className="">failed to load</div>}
    </div>
  );
}
