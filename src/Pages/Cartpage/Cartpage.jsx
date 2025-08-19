import React from "react";
import "./Cartpage.css";

const Cartpage = () => {
  // Example cart items (later you can make these dynamic from state)
  const cartItems = [
    { id: 1, name: "Gaming Laptop", price: 999, quantity: 1, image: "https://imgs.search.brave.com/bUW7xMNiXzvUyM2hgY3zr46nQiWApJf-ZPqYnUpoSrc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ocC53/aWRlbi5uZXQvY29u/dGVudC9jcGF5a2dl/cTF3L3dlYnAvY3Bh/eWtnZXExdy5wbmc_/ZHBpPTcyJmNvbG9y/PWZmZmZmZjAwJnc9/Mjcw" },
    { id: 2, name: "RGB Headset", price: 199, quantity: 2, image: "https://imgs.search.brave.com/TfnkROeUKqdpqaNc_sVh9pjcfQ3HHybpRE25iEiAE2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8yMDAwOTA3MV9B/TFQwMi9HYW1lU3Rv/cC1XaXJlZC1SR0It/UHJvLUhlYWRzZXQt/Zm9yLVBsYXlTdGF0/aW9uLTUtWGJveC1T/ZXJpZXMtWC9TLU5p/bnRlbmRvLVN3aXRj/aC1hbmQtU3RlYW0t/RGVjaz8kcGRwJD93/PTEyNTYmaD02NjQm/Zm10PWF1dG8" },
    { id: 3, name: "Mechanical Keyboard", price: 79, quantity: 1, image: "https://imgs.search.brave.com/0l-k4NhK-YI7IfclVeEpfXS078nhhve6U-N4XyPE6ns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rb25v/LnN0b3JlL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L2stdHlwZS1jXzEw/NTB4NzAwLmpwZz92/PTE1MDkwNjA2NDA" },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 FastBattle Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😢</p>
      ) : (
        <div className="cart-content">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price} × {item.quantity}</p>
                </div>
                <span className="cart-item-total">${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total Items: {cartItems.length}</p>
            <p className="cart-total">Total: ${total}</p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
