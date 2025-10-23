import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { Bottom} from "./components/Footer";
import ProductsWeBake from "./components/ProductWeBake";


export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductsWeBake />
      <WhyUs />
      <Bottom/>
    </>
  );
}
