!function(){"use strict";const e={accessories:{z:40,items:["red-gloves"]},bottoms:{z:50,items:["black-jeans","black-shorts","blue-jeans","green-pants","plaid-skirt","purple-slacks","quilt-skirt"]},hats:{z:90,items:["green-cowboy","red-cowboy"]},outerwear:{z:80,items:["leather-jacket","rain-coat"]},shoes:{z:30,items:["black-heels","converse","cowboy-boots","orange-heels","pink-heels"]},socks:{z:20,items:["green-socks","pink-socks","white-socks","yellow-socks"]},sweaters:{z:70,items:["black-sweater","orange-sweater"]},tops:{z:60,items:["button-up","pink-jumpsuit","red-dress","torn-tank","yellow-blouse","pink-tank-top","blue-dress"]},underwear:{z:10,items:["black-tights","bralette","fishnets","orange-tights","purple-tights"]}};for(let t in e)e[t].items.map((s,n)=>{const l=document.createElement("div");l.dataset.clothing=s,l.style.zIndex=e[t].z;const o=document.createElement("img");["leather-jacket","rain-coat","red-gloves"].includes(s)?o.classList.add("w-24","five-eighths-doll-width"):o.classList.add("w-20","half-doll-width"),o.classList.add("select-none"),o.src=`https://raw.githubusercontent.com/bakerkretzmar/paper-doll/master/img/${s}.png`;const a=document.createElement("div");return a.classList.add("w-24"),l.appendChild(o),a.appendChild(l),a}).map((e,t)=>t%2?document.getElementById("clothes-area-l").appendChild(e):document.getElementById("clothes-area-r").appendChild(e));const t=document.getElementById("doll-area");document.querySelectorAll("[data-clothing]").forEach(e=>{e.ondragstart=()=>!1,e.ondragend=()=>!1,e.ondblclick=t=>{document.querySelectorAll(".last-active").forEach(e=>e.classList.remove("last-active")),e.parentElement.classList.add("last-active")},e.onmousedown=s=>{e.classList.add("active"),e.style.position="absolute";const n=s.clientX-e.getBoundingClientRect().left,l=s.clientY-e.getBoundingClientRect().top,o=t=>{e.style.left=t.pageX-n+"px",e.style.top=t.pageY-l+"px"};document.addEventListener("mousemove",o),document.onmouseup=s=>{document.removeEventListener("mousemove",o),(s.clientX<t.getBoundingClientRect().left||s.clientX>t.getBoundingClientRect().right||s.clientY<t.getBoundingClientRect().top||s.clientY>t.getBoundingClientRect().bottom)&&(e.classList.remove("active"),e.style.position="static",e.style.left=null,e.style.top=null)}}})}();
