import Button from "../common/Button";

export default function Part3() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h4 className="text-xl">Profit and loss</h4>
        <div className="text-black">
          <Button text="View Report" className="bg-[#FFC107] mr-3" />
          <Button text="1-6 Month" className="bg-[#FFC107]" />
        </div>
      </div>
      <p className="my-1.5 font-mono">
        Profit and loss Profit and loss Profit and loss Profit and loss
      </p>
      <div className="flex w-1/3 justify-between">
        <div className="flex items-center font-mono">
          <span className="h-[10px] w-[10px] block mr-3 rounded-full bg-red-700"></span>
          outflow
        </div>
        <div className="flex items-center font-mono">
          <span className="h-[10px] w-[10px] block mr-3 rounded-full bg-green-600"></span>
          outflow
        </div>
      </div>
    </div>
  );
}
