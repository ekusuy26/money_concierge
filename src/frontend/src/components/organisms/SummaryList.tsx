import Svg from "../atoms/Svg";

export default function SummaryList({ data }) {
  return (
    <>
      <div className="border-t border-b divide-y text-sm">
        {data.map((line, _) => (
          <div
            key={line.slug}
            className="flex items-center justify-between px-5 py-2"
          >
            <div className="flex-grow">
              <div className="flex items-center">
                <div
                  className={`mj-categoryIconWrap ${line.slug} h-8 w-8 rounded-full p-1`}
                >
                  <Svg slug={line.slug} />
                </div>
                <div className={"ms-3" + " bg-" + line.slug}>{line.name}</div>
                <div className="text-xs">
                  {/* {`( ${Number(
                    ((line.total / listData.total_payment) * 100).toFixed(2)
                  )}% )`} */}
                </div>
              </div>
            </div>
            <div className="flex-none text-right">
              {Number(line.total_amount).toLocaleString()}円
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
