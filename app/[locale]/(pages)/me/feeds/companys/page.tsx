import Nav from "../../../../../components/about/Nav";
import Section from "../../../../../components/common/Section";
import CompanyCard from "../../../../../components/feeds/CompanyCard";

export default function page() {
  return (
    <>
      <Nav />
      <Section>
        <h2 className="text-2xl capitalize mb-10">Companys</h2>
        <div>
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </Section>
    </>
  );
}
