import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

export default function MarketCard() {
  const data = [
    {
      name: "Page A",
      value: 1,
    },
    {
      name: "Page A",
      value: 10,
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
      value: 10,
    },
  ];
  return (
    <div
      dir="ltr"
      className="flex bg-gradient-to-r my-2 m-1 from-[#172774] to-[#C058E4] p-2 rounded-xl"
    >
      <div className="mr-3 ">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img loading="lazy" src="/assets/company.svg" alt="company" />
        <p>68.87</p>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between">
          <p>TES</p>
          <p className="text-[#0ECC16] flex items-center">
            <FaArrowTrendUp className="mr-1 text-xl" />
            5.49%
          </p>
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="name"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  color: "red ",
                  textAlign: "left",
                  background: "rgba(0,0,0,0.5)",
                  border: "none",
                  borderRadius: "1rem",
                }}
              />{" "}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
