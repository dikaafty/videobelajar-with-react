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

          <Card id={1} />
        </Container>
      </Body>
    </>
  );
}

export default HomePage;