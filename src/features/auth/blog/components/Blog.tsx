import About from "./About";
import Expenses from "./Expenses/Expenses";
import Features from "./Features/Features";
import Footer from "./Footer";
import Landing from "./Landing/Landing";
import PlanTrip from "./PlanTrip";

export default function Blog() {
  return (
    <>
      <Landing />
      <Features />
      <Expenses />
      <About />
      <PlanTrip />
      <Footer />
    </>
  );
}
