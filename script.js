// -------------------------
// Products
// -------------------------
const products = [
  { id: 1, name: "Discord Nitro – 1 Month", price: 7, paymentMethods: ["PayPal", "Tikkie"] },
  { id: 2, name: "Discord Nitro – 1 Year", price: 70, paymentMethods: ["PayPal", "Tikkie"] },
  { id: 3, name: "Server Boost (14x) – 1 Month", price: 5, paymentMethods: ["PayPal", "Tikkie"] },
  { id: 4, name: "Server Boost (14x) – 3 Months", price: 15, paymentMethods: ["PayPal", "Tikkie"] },
  { id: 5, name: "Discord Decorations", price: 10, paymentMethods: ["PayPal", "Tikkie"] },
  { id: 6, name: "TikTok Services", price: 5, paymentMethods: ["PayPal", "Tikkie"] },
  { id: 7, name: "YouTube Services", price: 5, paymentMethods: ["PayPal", "Tikkie"] },
  { id: 8, name: "CapCut Pro – Lifetime", price: 15, paymentMethods: ["PayPal", "Tikkie"] },
  { id: 9, name: "Fortnite V-Bucks", price: 50, paymentMethods: ["PayPal", "Tikkie"] }
];

// -------------------------
// Orders storage
// -------------------------
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// -------------------------
// Display products
// -------------------------
function displayProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach(prod => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${prod.name}</h3>
      <p>Price: €${prod.price}</p>
      <p>Payment: ${prod.paymentMethods.join(", ")}</p>
      <button onclick="addToCart(${prod.id})">Buy</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  localStorage.setItem("selectedProduct", productId);
  window.location.href = "cart.html";
}

// -------------------------
// Checkout
// -------------------------
function displayCheckout() {
  const productId = localStorage.getItem("selectedProduct");
  const product = products.find(p => p.id == productId);
  if (!product) return;

  document.getElementById("productName").innerText = product.name;
  document.getElementById("productPrice").innerText = `€${product.price}`;
}

function placeOrder() {
  const email = document.getElementById("email").value;
  const discordId = document.getElementById("discordId").value;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const productId = localStorage.getItem("selectedProduct");
  const product = products.find(p => p.id == productId);

  if (!email || !discordId) {
    alert("Please enter email and Discord ID");
    return;
  }

  const orderID = `PVP-${Math.floor(Math.random() * 1000000)}`;
  const order = { orderID, email, discordId, productName: product.name, amount: product.price, paymentMethod, status: "WAITING_FOR_PAYMENT" };
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  alert(`Order placed! Your Order ID: ${orderID}`);

  // Redirect based on payment
  if (paymentMethod === "PayPal") {
    window.open("https://www.paypal.com/paypalme/yourlink/" + product.price, "_blank");
  } else if (paymentMethod === "Tikkie") {
    window.open("https://www.tikkie.me/paylink?amount=" + product.price, "_blank");
  }

  window.location.href = "index.html";
}

// -------------------------
// Admin view
// -------------------------
function displayAdmin() {
  const container = document.getElementById("orders");
  container.innerHTML = "";
  orders.forEach(order => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${order.orderID}</strong> - ${order.productName} - ${order.email} - ${order.discordId} - ${order.amount}€ - ${order.paymentMethod} - ${order.status}</p>
    `;
    container.appendChild(div);
  });
}
