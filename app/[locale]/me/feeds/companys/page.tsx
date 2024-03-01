import Nav from "@app/components/about/Nav";
import Section from "@app/components/common/Section";
import CompanyCard from "@app/components/feeds/CompanyCard";

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
