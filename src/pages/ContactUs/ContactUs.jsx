import Clients from "../../components/sections/Clients/Clients";
import ContactFormAndInfo from "../../components/sections/ContactFormAndInfo/ContactFormAndInfo";
import ContactHeader from "../../components/sections/ContactHeader/ContactHeader";
import DirectContact from "../../components/sections/DirectContact/DirectContact";

export default function ContactUs() {
  return (
    <>
      <ContactHeader />
      <DirectContact />
      <ContactFormAndInfo />
      <Clients />
    </>
  );
}
