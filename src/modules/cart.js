const cart = () => {
  const cartBth = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const cartCloseBth = cartModal.querySelector(".cart-close");

  const openCart = () => {
    cartModal.style.display = "flex";
  };

  const closeCart = () => {
    cartModal.style.display = "";
  };

  cartBth.addEventListener("click", openCart);
  cartCloseBth.addEventListener("click", closeCart);
};

export default cart 