import Testimonial from "@/components/Testimonial";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import About from "@/components/About";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
        <section id="home">  </section>
      <Hero/> 
      <section></section>
      <About/> 
      <section id="services"></section>
      <Services/> 
      <Testimonial/>
      <section id="teams"></section>
      <Teams />
    </>
  );
}
