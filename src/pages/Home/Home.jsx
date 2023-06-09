import { Hero } from "../../components/Hero/Hero";
import { OurService } from "./components/OurService";
import { WhyUs } from "./components/WhyUs";
import { Testimonial } from "./components/Testimonial";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "../../components/Footer";
import { FreqAsk } from "./components/FreqAsk";

export const Home = () => {
  return (
    <div>
      <Hero />
      <OurService />
      <WhyUs />
      <Testimonial />
      <CtaBanner />
      <FreqAsk />
      <Footer />
    </div>
  );
};
