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
      <footer className="bg-neutral-900 text-gray-50 text-center py-8 space-y-2">
        <p className="text-[#ffbb43] font-bold">Peumayén Restaurante</p>
        <p className="text-sm">Ruta L751-KM 6.5, camino a Bullileo, Parral - Retiro</p>
        <p className="text-sm">By Brain Analitica</p>
      </footer>
    </>
  );
}
