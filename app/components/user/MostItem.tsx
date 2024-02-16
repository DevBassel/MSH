import { FaArrowTrendUp } from "react-icons/fa6";
import company from "../../assets/company.svg";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function MostItem() {
  return (
    <div className="flex bg-gradient-to-r mx-5 from-[#172774] to-[#C058E4] p-1 px-3 items-center  rounded-3xl">
      <div className="mr-3 ">
        <Image src={company} alt="company" />
        <p>68.87</p>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between">
          <p>
            TES <br /> Telsa
          </p>
          <p className="flex items-center">
            <FaArrowUp className="mr-1 text-4xl text-[#0ECC16]" />
            5.49%
          </p>
        </div>
      </div>
    </div>
  );
}
