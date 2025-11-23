import FeatureGrid from "../components/FeatureGrid";
import About from "../components/About";
import FloatingActions from "../components/FloatingActions";
import HeroSlider from "../components/HeroSlider";
import ProductsSection from "../components/sections/ProductsSection";
import productsData from "../data/products.js";
import TopNav from "../components/TopNav";
export default function Home() {
  const products = productsData.slice(0, 8);

  return (
    <>
      <main>
        <HeroSlider />
       
        <About />
         <FeatureGrid />
        <ProductsSection
          title="Tranh Tô Theo Số"
          products={products}
          viewMoreHref="/danh-muc/tranh-canvas"
        />
      </main>
      <FloatingActions />
    </>
  );
}
