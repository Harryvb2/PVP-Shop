const products = [
 {id:1,name:"Discord Nitro 1 Month",price:7},
 {id:2,name:"Discord Nitro 1 Year",price:70},
 {id:3,name:"Server Boost 1 Month",price:5},
 {id:4,name:"Server Boost 3 Months",price:15}
];

const grid = document.getElementById("product-grid");
if(grid){
 products.forEach(p=>{
  const d=document.createElement("div");
  d.className="product";
  d.innerHTML=`<h3>${p.name}</h3><p>€${p.price}</p><button onclick="add(${p.id})">Add</button>`;
  grid.appendChild(d);
 });
}

function add(id){
 let cart=JSON.parse(localStorage.getItem("cart"))||[];
 if(cart.length>=3){ showToast("Max 3 items","#e74c3c"); return;}
 cart.push(products.find(p=>p.id===id));
 localStorage.setItem("cart",JSON.stringify(cart));
 showToast("Added to cart");
 updateCount();
}

function updateCount(){
 let cart=JSON.parse(localStorage.getItem("cart"))||[];
 const el=document.getElementById("cart-count");
 if(el) el.innerText=cart.length;
}
updateCount();
