import { SparkLineChart } from "@mui/x-charts";

export default function Part4() {
  return (
    <div className="bg-[#172774] w-full flex-col text-center md:flex-row p-4 bg-opacity-50 mt-4 flex rounded-lg">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-7xl relative w-fit mx-auto">
            180
            <span className="text-sm text-[#0ECC16] absolute top-0 right-0 -translate-y-1/2">
              12%
            </span>
          </h1>

          <p className="font-mono text-center text-xl">Inflow Today</p>
        </div>
        <div className="mt-20 flex m-auto font-mono">
          <div className="mr-5">
            <p>$2000</p>
            <p>amount invested</p>
          </div>
          <div>
            <p>$2765</p>
            <p>Profits</p>
          </div>
        </div>
      </div>
      <div className="ml-6">
        <SparkLineChart
          data={[1, 4, 2, 5, 7, 2, 4, 6,10,12]}
          showHighlight={true}
          showTooltip={true}
          curve={"natural"}
          colors={["darkred"]}
          height={200}
          width={300}
        />
      </div>
    </div>
  );
}
