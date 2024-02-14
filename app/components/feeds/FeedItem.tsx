import Image, { StaticImageData } from "next/image";
import { Link } from "../../util/navigation";

interface FeedItemI {
  name: string;
  text: string;
  img: StaticImageData;
}

export default function FeedItem({ img, name, text }: FeedItemI) {
  return (
    <Link href={"feeds/companys/1"}>
      <div className=" h-full transition-all ">
        <Image
          src={img}
          alt="test"
          className="absolute left-0 top-0 h-full w-full object-cover z-[1]"
        />

        <div className=" z-[2] h-full p-2 relative justify-between flex flex-col hover:bg-opacity-60 bg-black bg-opacity-80">
          <h4 className="text-sm flex items-center ">
            <span className="p-1.5  rounded-full mx-2 bg-[#172774]"></span>
            {name}
          </h4>

          <p className="text-sm">
            {text.split("").splice(0, 58).join("")} . . .
          </p>
        </div>
      </div>
    </Link>
  );
}
