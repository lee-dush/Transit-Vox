import ContactDetails from "../../components/common/ContactDetails/ContactDetails";
import Header from "../../components/layout/header/Header";
import Clients from "../../components/sections/Clients/Clients";
import Region from "../../components/sections/Region/Region";
import ServiceCards from "../../components/sections/ServiceCards/ServiceCards";

const Home =  () => {
    return (
        <>
            <Header />
            <Clients />
            <ServiceCards />
            <Region />
            <ContactDetails />
        </>
    );
}
export default Home;