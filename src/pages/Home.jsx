import { useOutletContext } from "react-router-dom";
import FeatureGrid from "../components/FeatureGrid";
import About from "../components/About";
import FloatingActions from "../components/FloatingActions";
import HeroSlider from "../components/HeroSlider";
import ProductsSection from "../components/sections/ProductsSection";
import productsData from "../data/products.js";

export default function Home() {
  const { aboutRef, productsRef } = useOutletContext();
  const products = productsData.slice(0, 8);

  return (
    <>
      <main className="min-h-screen">
        <HeroSlider />

        <section ref={aboutRef}>
          <About />
        </section>

        <FeatureGrid />

        <section ref={productsRef}>
          <ProductsSection
            title="Tranh tô theo số"
            products={products}
            viewMoreHref="/tranh-to-theo-so"
          />
        </section>
      </main>

      <FloatingActions />
    </>
  );
}
