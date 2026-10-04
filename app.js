const chatLaunch=document.getElementById("chatLaunch"),chatbox=document.getElementById("chatbox"),chatClose=document.getElementById("chatClose"),messages=document.getElementById("messages"),form=document.getElementById("chatForm"),input=document.getElementById("chatInput");
chatLaunch.onclick=()=>chatbox.classList.add("open"); chatClose.onclick=()=>chatbox.classList.remove("open");
function add(text,type){const d=document.createElement("div");d.className=type;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight}
function reply(q){q=q.toLowerCase(); if(q.includes("how")&&q.includes("bet"))return"Choose a match, select an odds button, and it will be added to your betting slip. This prototype uses simulated odds.";
if(q.includes("odds"))return"Odds show the potential return multiplier for a selection. Higher odds generally mean a less likely outcome. These EMMS odds are for demonstration only.";
if(q.includes("real")||q.includes("money")||q.includes("deposit")||q.includes("withdraw"))return"This is a demo website. It does not accept real-money deposits, withdrawals, or bets.";
if(q.includes("support")||q.includes("help"))return"I'm here to help with navigation, demo odds, the betting slip concept, and responsible-play information.";
if(q.includes("responsible"))return"Only bet where legal, set limits, never chase losses, and take breaks. Real operators must provide appropriate responsible-gambling tools and licensing information.";
return"I can help with demo betting, odds, navigation, or responsible play. Try asking “How do I place a bet?”"}
function send(q){if(!q.trim())return;add(q,"user");input.value="";setTimeout(()=>add(reply(q),"bot"),350)}
form.onsubmit=e=>{e.preventDefault();send(input.value)};document.querySelectorAll(".quick button").forEach(b=>b.onclick=()=>send(b.dataset.q));
document.querySelectorAll(".odd,.odds button").forEach(b=>b.onclick=()=>{add("Selected: "+b.textContent.trim(),"user");setTimeout(()=>add("Selection added to the demo betting slip. Real-money wagering is disabled in this prototype.","bot"),300)});
