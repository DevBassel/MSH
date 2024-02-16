import MostItem from "./MostItem";

export default function Part5() {
  return (
    <div>
      <h4 className="text-xl underline my-2">Top Most Profits</h4>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <MostItem />
        <MostItem />
      </div>
    </div>
  );
}
