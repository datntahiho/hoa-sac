// src/layouts/SiteLayout.jsx
import React, { useEffect, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CartDrawer from "@/components/carts/CartDrawer";

import { getCartItems } from "@/utils/cartStorage";
import productsData from "@/data/products.js";
import TopNav from "@/components/TopNav";

export default function SiteLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  // 2 ref: About + Products
  const aboutRef = useRef(null);
  const productsRef = useRef(null);

  const scrollRefs = {
    about: aboutRef,
    products: productsRef,
  };

  // Hàm scroll chung
  const onGoScroll = (target) => {
    const sectionRef = scrollRefs[target];

    if (!sectionRef) return;

    // Nếu không ở / → chuyển về home kèm hash
    if (location.pathname !== "/") {
      window.location.href = `/#${target}`;
      return;
    }

    // Nếu đang ở trang home → scroll mượt
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  // Join cart
  const joinCartData = () => {
    const rawCart = getCartItems();
    const fullItems = rawCart
      .map((c) => {
        const p = productsData.find((x) => x.id === c.id);
        if (!p) return null;
        return { ...p, quantity: c.quantity };
      })
      .filter(Boolean);

    setCartItems(fullItems);
  };

  useEffect(() => {
    joinCartData();
    const listener = () => joinCartData();
    window.addEventListener("cart-changed", listener);
    return () => window.removeEventListener("cart-changed", listener);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar
        phone="0587.10.20.03"
        onCartClick={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
      />

      <TopNav onGoScroll={onGoScroll} />

      <ScrollToTop />

      {/* Truyền ref xuống Home */}
      <div className="flex-1 bg-yellow-50/60">
        <Outlet context={{ aboutRef, productsRef }} />
      </div>

      <Footer />

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
      />
    </div>
  );
}
