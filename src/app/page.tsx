import Dining from "@/sections/Dining/Dining";
import Entertainment from "@/sections/Entertainment/Entertainment";
import Events from "@/sections/Events/Events";
import Hero from "@/sections/Hero/Hero";
import Luxury from "@/sections/Luxury/Luxury";
import Retail from "@/sections/Retail/Retail";
import Why from "@/sections/Why/Why";


export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Luxury />
      <Dining />
      <Retail />
      <Entertainment />
      <Events />
    </>
  );
}
