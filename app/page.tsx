import AboutRestaurant from "@/components/Home/AboutRestaurant";
import Contact from "@/components/Home/Contact";
import FrecuentlyQuestions from "@/components/Home/FrecuentlyQuestions";
import HeroImage from "@/components/Home/HeroImage";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroImage />
      <AboutRestaurant />
      <FrecuentlyQuestions />
      <Contact />      
    </>
  );
}
