import { useTranslations } from "next-intl";
import Button from "../common/Button";
import MarketCard from "./MarketCard";
export default function Part2() {
  const t = useTranslations("dash");
  return (
    <div className="flex flex-col md:flex-row mt-5">
      <div className="flex-[0.5] capitalize">
        <h4 className="underline text-xl tracking-wider">{t("market")} </h4>
        <h6 className="text-xl">{t("tpl")}</h6>
        <div className="text-[#0ECC16] my-3">
          <p>2450.43 EG</p>
          <p>12%</p>
        </div>
        <Button text={t("more")} className="bg-[#172774] rounded-md" />
      </div>
      <div className="flex-[0.5] h-[200px] overflow-scroll pb-16">
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </div>
    </div>
  );
}
