import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

export default function Part4() {
  const data = [
    {
      name: "Page A",
      value: 1,
    },
    {
      name: "Page A",
      value: -10,
    },
    {
      name: "Page A",
      value: 5,
    },
    {
      name: "Page A",
      value: 9,
    },
    {
      name: "Page A",
      value: 20,
    },
    {
      name: "Page A",
      value: 50,
    },
    {
      name: "Page A",
      value: -50,
    },
    {
      name: "Page A",
      value: 10,
    },
  ];
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
      <div className="ml-6 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                color: "red ",
                textAlign: "left",
                background: "rgba(0,0,0,0.5)",
                border: "none",
                borderRadius: "1rem",
              }}
            />

            <Area
              type="natural"
              dataKey="name"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
