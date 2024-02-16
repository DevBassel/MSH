import Image from "next/image";
import company from "../../assets/company.svg";
import { SparkLineChart } from "@mui/x-charts";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function MarketCard() {
  return (
    <div className="flex bg-gradient-to-r my-2 m-1 from-[#172774] to-[#C058E4] p-2 rounded-3xl">
      <div className="mr-3 ">
        <Image src={company} alt="company" />
        <p>68.87</p>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between">
          <p>TES</p>
          <p className="text-[#0ECC16] flex items-center"><FaArrowTrendUp  className="mr-1 text-xl"/>5.49%</p>
        </div>
        <div className="flex-1">
          <SparkLineChart
            data={[1, 4, 2, 5.49]}
            showHighlight={true}
            showTooltip={true}
            curve={"natural"}
            colors={["#fff"]}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
