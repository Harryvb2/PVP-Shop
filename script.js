// ---------------- Products ----------------
const products = [
    {id:1, name:"Discord Nitro – 1 Month", price:7},
    {id:2, name:"Discord Nitro – 1 Year", price:70},
    {id:3, name:"Server Boost (14x) – 1 Month", price:5},
    {id:4, name:"Server Boost (14x) – 3 Months", price:15}
];

// ---------------- Cart Logic ----------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const count = cart.length;
    const badge = document.querySelector(".cart-count");
    if (badge) badge.innerText = count;
}

// ---------------- Add to cart ----------------
function addToCart(productId) {
    if(cart.length >= 3){
        alert("Max 3 items in cart!");
        return;
    }
    const product = products.find(p=>p.id==productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(product.name + " added to cart!");
}

// ---------------- Display Products ----------------
function displayProductsGrid() {
    const container = document.getElementById("product-grid");
    if(!container) return;
    container.innerHTML="";
    products.forEach(p=>{
        const div = document.createElement("div");
        div.className="product-card";
        div.innerHTML=`
            <h3>${p.name}</h3>
            <p>€${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;
        container.appendChild(div);
    });
}

// ---------------- Display Cart ----------------
function displayCart() {
    const container = document.getElementById("cart-items");
    if(!container) return;
    container.innerHTML="";
    let total=0;
    cart.forEach((item,index)=>{
        total+=item.price;
        const div=document.createElement("div");
        div.className="cart-item";
        div.innerHTML=`
            <h4>${item.name}</h4>
            <p>€${item.price}</p>
            <button class="delete" onclick="removeFromCart(${index})">X</button>
        `;
        container.appendChild(div);
    });
    const totalEl=document.getElementById("cart-total");
    if(totalEl) totalEl.innerText="Total: €"+total;
}

// ---------------- Remove from Cart ----------------
function removeFromCart(index){
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// ---------------- Checkout ----------------
function checkout() {
    const email = document.getElementById("email").value;
    const discord = document.getElementById("discord").value;
    if(!email || !discord){
        alert("Please fill email and Discord ID!");
        return;
    }
    if(cart.length==0){
        alert("Cart is empty!");
        return;
    }

    const orderID = "PVP-"+Math.floor(1000000000+Math.random()*9000000000);
    localStorage.setItem("lastOrder",JSON.stringify({orderID,email,discord,cart}));

    // Open PayPal with total amount
    const total = cart.reduce((sum,i)=>sum+i.price,0);
    window.open("https://paypal.me/HarryFiveMYT/"+total, "_blank");

    alert("Order placed! Your Order ID: "+orderID+"\nTikkie not available yet. Please create a ticket for Tikkie payments.");
    cart=[];
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartCount();
}
updateCartCount();

