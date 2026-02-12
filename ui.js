function showToast(msg,color="#1abc9c"){
 const t=document.getElementById("toast");
 t.innerText=msg;
 t.style.background=color;
 t.classList.add("show");
 setTimeout(()=>t.classList.remove("show"),2500);
}

document.getElementById("admin-btn")?.addEventListener("click",()=>{
 const pwd=prompt("Admin password");
 if(pwd==="k!qwR5}Tab*Gmi+)iHuJvgGj]nLm1mCw=xjehk}7Gm).zg,riY"){
  location.href="admin.html";
 }
});
