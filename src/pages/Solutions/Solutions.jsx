import ContactDetails from "../../components/common/ContactDetails/ContactDetails";
import Clients from "../../components/sections/Clients/Clients";
import Region from "../../components/sections/Region/Region";
import SolutionSection from "../../components/sections/SolutionSection/SolutionSection";
import SolutionsHeader from "../../components/sections/SolutionsHeader/SolutionsHeader";

const Solutions = () => {
    return (
        <>
            <SolutionsHeader />
            <SolutionSection
                index="01"
                title="Wholesale VoIP Termination"
                description="Carrier-grade voice termination services enabling the routing and transit of calls between operators worldwide. Built for scalability, consistency, and predictable quality."
                bullets={[
                "Carrier-to-carrier voice routing",
                "High-capacity wholesale termination",
                "Quality-focused route management",
                "Transparent traffic handling",
                ]}
                highlight="Designed for wholesalers and carriers that require stable delivery, clear routing logic, and the ability to scale traffic without compromising quality."
            />

            <SolutionSection
                index="02"
                title="A–Z Voice Routes (Global Coverage)"
                description="Comprehensive A–Z destination coverage with a strong focus on European routes, supporting both CLI and Non-CLI traffic profiles."
                bullets={[
                "Global destination coverage",
                "Strong Europe-focused routing",
                "CLI & Non-CLI route availability",
                "Flexible route profiles",
                ]}
                highlight="Ideal for partners seeking predictable performance across multiple regions while maintaining flexibility in pricing and route selection."
                reverse
            />

            <SolutionSection
                index="03"
                title="SIP Trunking & Carrier Interconnections"
                description="Secure SIP trunking and direct interconnections for carriers, enterprises, and service providers, designed for low latency and operational resilience."
                bullets={[
                "SIP trunking services",
                "Direct carrier interconnects",
                "Redundancy and failover support",
                "Technical onboarding assistance",
                ]}
                highlight="Supports seamless integration into existing voice infrastructures while maintaining control over routing, capacity, and performance."
            />
            <Clients />
            <Region />
            <ContactDetails />
        </>
    );
}
export default Solutions;