import ContactDetails from "../../components/common/ContactDetails/ContactDetails";
import CoverageHeader from "../../components/sections/CoverageHeader/CoverageHeader";
import CoverageOverview from "../../components/sections/CoverageOverview/CoverageOverview";
import Region from "../../components/sections/Region/Region";

export default function Coverage() {
  return (
    <>
      <CoverageHeader />
      <CoverageOverview />
      <Region />
      <ContactDetails />
    </>
  );
}
