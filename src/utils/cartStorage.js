// src/utils/cartStorage.js
const CART_KEY = "hoa_sac_cart";

export function getCartItems() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function save(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cart-changed"));
}

// Thêm vào giỏ hoặc tăng số lượng
export function addToCart(productId, qty = 1) {
  const cart = getCartItems();
  const idx = cart.findIndex((i) => i.id === productId);

  if (idx !== -1) {
    cart[idx].quantity += qty;
    save(cart);
    return;
  }

  cart.push({
    id: productId,
    quantity: qty,
  });

  save(cart);
}

// Xoá item khỏi giỏ
export function removeFromCart(productId) {
  const cart = getCartItems();
  const next = cart.filter((item) => item.id !== productId);
  save(next);
}

// Tăng/giảm quantity (delta có thể là +1 hoặc -1)
export function updateItemQuantity(productId, delta) {
  const cart = getCartItems();
  const idx = cart.findIndex((i) => i.id === productId);
  if (idx === -1) return;

  const currentQty = Number(cart[idx].quantity) || 0;
  const newQty = currentQty + delta;

  if (newQty <= 0) {
    // Nếu <= 0 thì xoá khỏi giỏ
    cart.splice(idx, 1);
  } else {
    cart[idx].quantity = newQty;
  }

  save(cart);
}

// Xoá toàn bộ giỏ
export function clearCart() {
  save([]);
}
