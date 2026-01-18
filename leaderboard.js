db.collection("leaderboard_weekly")
.orderBy("weeklyCoins","desc")
.limit(50)
.onSnapshot(snap=>{
 const list=document.getElementById("list");
 list.innerHTML="";
 let rank=1;
 snap.forEach(d=>{
   const u=d.data();
   list.innerHTML+=`
   <div class="item">
   #${rank++} ${u.name} — ${u.weeklyCoins} coins
   </div>`;
 });
});