import Header from "../components/header";
import Body from "../components/body";
import Hero from "../components/hero";
import Container from "../components/container";
import CardSectionDesc from "../components/card-section-desc";
import CardSectionTabs from "../components/card-section-tabs";
import Card from "../components/card";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import FooterBrandInfo from "../components/footer-brand-info";
import Nav from "../components/nav";
import Divider from "../components/divider";
import FooterBottomBar from "../components/footer-bottom-bar";

const HomePage = () => {
  return (
    <>
      <Header isHomepageHeader={true} />

      <Body>
        <Hero />

        <Container containerClass="cardSection">
          <CardSectionDesc />

          <CardSectionTabs />

          <Container containerClass="cardContainer">
            <Card id={1} />
            <Card id={2} />
            <Card id={3} />
            <Card id={4} />
            <Card id={5} />
            <Card id={6} />
            <Card id={7} />
            <Card id={8} />
            <Card id={9} />
          </Container>
        </Container>

        <Container containerClass="newsletterContainer">
          <Newsletter />
        </Container>
      </Body>

      <Footer>
        <Container containerClass="mainFooterContent">
          <FooterBrandInfo />

          <Container containerClass="footerNav">
            <Nav 
              navText="Kategori" 
              navList={["Digital & Teknologi", "Pemasaran",
              "Manajemen Bisnis", "Pengembangan Diri", "Desain"]} 
            />

            <Nav 
              navText="Perusahaan" 
              navList={["Tentang Kami", "FAQ",
              "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"]} 
            />
          </Container>
        </Container>
      </Footer>
    </>
  );
}

export default HomePage;