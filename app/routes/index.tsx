import HeroHomePage from "@/components/HeroHomePage";
import HowToUseHomePage from "@/components/HowToUseHomePage";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Index() {
  return (
    <div>
      <Header />
      <HeroHomePage />
      <HowToUseHomePage />
      <Footer />
    </div>
  );
}
