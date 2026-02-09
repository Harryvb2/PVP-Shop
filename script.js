/* Reset */
* {margin:0;padding:0;box-sizing:border-box;}
body {font-family: 'Roboto', sans-serif; background:#f5f5f5; color:#222;}
a {text-decoration:none; color:inherit;}

/* Navbar */
.navbar {
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 50px;
    background:#333;
    color:#fff;
    position:sticky; top:0; z-index:1000;
}
.navbar .logo img {height:50px;}
.navbar ul {list-style:none; display:flex; gap:30px;}
.navbar ul li {cursor:pointer; transition:0.3s;}
.navbar ul li:hover {color:#ff4d4d;}
.navbar .cart {position:relative; cursor:pointer; font-size:1.5em;}
.cart-count {
    position:absolute; top:-10px; right:-15px;
    background:#ff4d4d; color:#fff; padding:3px 7px;
    border-radius:50%; font-size:0.8em;
}

/* Hero Section */
.hero {
    width:100%; height:100vh; display:flex; flex-direction:column;
    justify-content:center; align-items:center; text-align:center;
    background: linear-gradient(to right,#4d79ff,#1a1a1a);
    color:#fff; padding:20px;
}
.hero h1 {font-size:4em; margin-bottom:15px;}
.hero p {font-size:1.5em; margin-bottom:30px;}
.hero .buttons {display:flex; gap:20px;}
.hero .buttons a {
    padding:15px 40px; background:#ff4d4d; color:#fff; border-radius:8px; font-weight:bold;
    transition:0.3s;
}
.hero .buttons a:hover {background:#4dff88; color:#000;}

/* Product Grid */
.container {max-width:1200px; margin:50px auto; padding:0 20px;
    display:grid; grid-template-columns:repeat(auto-fill,minmax(250px,1fr)); gap:25px;
}
.product-card {background:#fff; border-radius:10px; padding:20px; box-shadow:0 0 8px rgba(0,0,0,0.2);}
.product-card h3{margin-bottom:10px;}
.product-card p{margin-bottom:15px;}
.product-card button{
    padding:10px 20px; border:none; border-radius:5px; background:#ff4d4d; color:#fff;
    font-weight:bold; cursor:pointer; transition:0.3s;
}
.product-card button:hover {background:#4dff88; color:#000;}

/* Cart */
.cart-container {max-width:900px; margin:50px auto; padding:20px; background:#fff; border-radius:10px;}
.cart-item {
    display:flex; justify-content:space-between; align-items:center;
    padding:10px 0; border-bottom:1px solid #ccc;
}
.cart-item button.delete{
    padding:5px 10px; border:none; border-radius:5px; background:#ff4d4d; color:#fff;
    cursor:pointer;
}
.cart-item button.delete:hover {background:#4dff88; color:#000;}
.total {text-align:right; margin-top:20px; font-weight:bold; font-size:1.2em;}
.checkout-button{
    margin-top:20px; padding:15px 30px; background:#ff4d4d; color:#fff; border:none;
    border-radius:8px; cursor:pointer; font-weight:bold; transition:0.3s;
}
.checkout-button:hover {background:#4dff88; color:#000;}
.checkout-form {display:flex; flex-direction:column; gap:10px; margin-top:20px;}
.checkout-form input, .checkout-form select{
    padding:10px; border-radius:5px; border:1px solid #ccc;
}

/* Discord page */
.discord-hero {height:80vh; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#4d79ff; color:#fff; text-align:center;}
.discord-hero a {padding:15px 40px; background:#ff4d4d; border-radius:8px; color:#fff; font-weight:bold; transition:0.3s;}
.discord-hero a:hover {background:#4dff88; color:#000;}

/* Admin Table */
.admin-container {max-width:1000px; margin:50px auto; padding:0 20px;}
.admin-container table {width:100%; border-collapse:collapse; background:#fff;}
.admin-container th, td {padding:12px; border:1px solid #ccc; text-align:center;}
.admin-container th {background:#f2f2f2;}
.admin-container select{padding:5px; border-radius:5px; border:1px solid #ccc;}

/* Footer */
footer {background:#333; color:#fff; text-align:center; padding:20px; margin-top:50px;}
footer img {height:30px; vertical-align:middle; margin-right:10px;}

