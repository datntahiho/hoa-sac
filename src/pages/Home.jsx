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
      <main>
        <HeroSlider />

        {/* Section Giới Thiệu */}
        <div ref={aboutRef}>
          <About />
        </div>

        <FeatureGrid />

        {/* Section Sản Phẩm */}
        <div ref={productsRef}>
          <ProductsSection
            title="Tranh Tô Theo Số"
            products={products}
            viewMoreHref="#"
          />
        </div>
      </main>

      <FloatingActions />
    </>
  );
}
