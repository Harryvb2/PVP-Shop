/* ==============================
   PRODUCTS CONFIGURATION
============================== */
const products = [
    {id:1, name:"Discord Nitro – 1 Month", price:7},
    {id:2, name:"Discord Nitro – 1 Year", price:70},
    {id:3, name:"Server Boost (14x) – 1 Month", price:5},
    {id:4, name:"Server Boost (14x) – 3 Months", price:15}
];

/* ==============================
   CART LOGIC
============================== */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const badge = document.querySelector(".cart-count");
    if (badge) badge.innerText = cart.length;
}

/* ==============================
   ADD PRODUCT TO CART
============================== */
function addToCart(productId) {
    if(cart.length >= 3){
        alert("Max 3 items allowed in cart!");
        return;
    }
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

/* ==============================
   DISPLAY PRODUCTS IN SHOP GRID
============================== */
function displayProductsGrid() {
    const container = document.getElementById("product-grid");
    if(!container) return;
    container.innerHTML = "";
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>€${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

/* ==============================
   DISPLAY CART
============================== */
function displayCart() {
    const container = document.getElementById("cart-items");
    if(!container) return;
    container.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.name} (€${item.price})</span>
            <button class="delete" onclick="removeFromCart(${index})">Remove</button>
        `;
        container.appendChild(div);
    });
    const totalEl = document.getElementById("cart-total");
    if(totalEl) totalEl.innerText = `Total: €${total}`;
}

/* ==============================
   REMOVE ITEM FROM CART
============================== */
function removeFromCart(index) {
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

/* ==============================
   CHECKOUT FUNCTION
============================== */
function checkout() {
    const email = document.getElementById("email").value.trim();
    const discord = document.getElementById("discord").value.trim();

    if(!email || !discord){
        alert("Please provide Email and Discord ID.");
        return;
    }

    if(cart.length === 0){
        alert("Your cart is empty.");
        return;
    }

    const orderID = "PVP-" + Math.floor(1000000000 + Math.random()*9000000000);
    const total = cart.reduce((sum, i) => sum + i.price, 0);

    const order = {
        orderID,
        email,
        discord,
        cart: [...cart],
        total,
        status:"Pending"
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Open PayPal link dynamically
    window.open(`https://paypal.me/HarryFiveMYT/${total}`, "_blank");

    // Alert for Tikkie (manual for now)
    alert(`Order placed!\nOrder ID: ${orderID}\nTikkie payment not yet automated, create a ticket.`);

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

/* ==============================
   DISPLAY ORDERS FOR ADMIN
============================== */
function displayOrders() {
    const table = document.getElementById("orders-table");
    if(!table) return;
    table.innerHTML = "";
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.forEach((order, index) => {
        const productsList = order.cart.map(p => p.name).join(", ");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.orderID}</td>
            <td>${order.email}</td>
            <td>${order.discord}</td>
            <td>${productsList}</td>
            <td>€${order.total}</td>
            <td>
                <select onchange="updateStatus(${index}, this.value)">
                    <option ${order.status==="Pending"?"selected":""}>Pending</option>
                    <option ${order.status==="Paid"?"selected":""}>Paid</option>
                    <option ${order.status==="In Progress"?"selected":""}>In Progress</option>
                    <option ${order.status==="Completed"?"selected":""}>Completed</option>
                    <option ${order.status==="Cancelled"?"selected":""}>Cancelled</option>
                </select>
            </td>
            <td><button class="delete" onclick="deleteOrder(${index})">Delete</button></td>
        `;
        table.appendChild(row);
    });
}

/* ==============================
   UPDATE ORDER STATUS
============================== */
function updateStatus(index, status) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders[index].status = status;
    localStorage.setItem("orders", JSON.stringify(orders));
}

/* ==============================
   DELETE ORDER
============================== */
function deleteOrder(index) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    if(confirm("Delete this order?")) {
        orders.splice(index,1);
        localStorage.setItem("orders", JSON.stringify(orders));
        displayOrders();
    }
}

/* ==============================
   ADMIN LOGIN BUTTON (right-bottom)
============================== */
document.addEventListener("DOMContentLoaded", function(){
    const adminBtn = document.getElementById("admin-btn");
    if(adminBtn){
        adminBtn.addEventListener("click", function(){
            const pwd = prompt("Enter admin password:");
            const ADMIN_PASSWORD = "k!qwR5}Tab*Gmi+)iHuJvgGj]nLm1mCw=xjehk}7Gm).zg,riY";
            if(pwd === ADMIN_PASSWORD){
                window.location.href = "admin.html";
            } else {
                alert("Incorrect password!");
            }
        });
    }
});

/* ==============================
   INITIALIZATION
============================== */
updateCartCount();

