/* The board plate — thrust × gravity · size = weight · fill = optionality · ring = sector.
   Data injected by layouts/map/list.html as window.PLATE_DATA {actors, groups}.
   Light-only by design, like the rest of the identity. */
(function(){
  "use strict";
  var D = window.PLATE_DATA; if(!D || !D.actors || !D.actors.length) return;
  var svg = document.querySelector(".plate svg"); if(!svg) return;

  // pocket -> sector (first G2 parent of the actor's G1 pocket)
  var pk2sec = {};
  (D.groups||[]).forEach(function(g){
    if(g.tier==="G1" && g.member_of && g.member_of.length) pk2sec[g.slug]=g.member_of[0];
  });
  var SECTOR = {finance:"var(--finance)",power:"var(--power)",infra:"var(--infra)",care:"var(--care)"};
  var OPTC = {free:"var(--opt-free)",mixed:"var(--opt-mixed)",
              constrained:"var(--opt-constrained)","locked":"var(--opt-locked)"};
  function band(s){
    // Band off the HEADLINE (before the em-dash qualifier) — the prose after
    // it explains, it doesn't re-grade. Compounds ("constrained/locked",
    // "free-leaning-mixed") take the more encumbered word within the headline.
    var head=(s||"").toLowerCase().split("—")[0];
    if(head.indexOf("locked")>=0)return"locked";
    if(head.indexOf("constrained")>=0)return"constrained";
    if(head.indexOf("mixed")>=0)return"mixed";
    if(head.indexOf("free")>=0)return"free";
    return"";
  }

  var A = D.actors.map(function(a){
    return {slug:a.slug,name:a.name,posture:a.posture,opt:band(a.optionality),
      optRaw:a.optionality,thrustTxt:a.thrust,ccTxt:a.cc,gravTxt:a.grav,
      sector:pk2sec[a.pocket]||"",
      w:+a.num.weight, t:+a.num.thrust, g:+a.num.gravity};
  });

  var NS="http://www.w3.org/2000/svg";
  var W=1000,H=800,ML=150,MR=200,MT=64,MB=100,L=ML,R=W-MR,T=MT,B=H-MB;
  var XD=[0.3,300],YD=[4,2000],XFLOOR=0.3;
  function el(n,at){var e=document.createElementNS(NS,n);for(var k in at)e.setAttribute(k,at[k]);return e;}
  function lg(x){return Math.log(x)/Math.LN10;}
  function med(arr){var a=arr.slice().sort(function(x,y){return x-y;}),m=a.length>>1;
    return a.length%2?a[m]:(a[m-1]+a[m])/2;}
  function sx(v){var x=Math.max(v,XFLOOR);
    return L+(lg(x)-lg(XD[0]))/(lg(XD[1])-lg(XD[0]))*(R-L);}
  function sy(v){var y=Math.max(v,YD[0]);
    return B-(lg(y)-lg(YD[0]))/(lg(YD[1])-lg(YD[0]))*(B-T);}
  var wmin=Math.min.apply(null,A.map(function(a){return a.w;})),
      wmax=Math.max.apply(null,A.map(function(a){return a.w;}));
  function rs(v){var s=Math.sqrt(v),lo=Math.sqrt(wmin),hi=Math.sqrt(wmax);
    return 6+(s-lo)/(hi-lo)*40;}
  function fmt(v){var n=Math.abs(v);
    if(n>=1000)return "$"+(v/1000).toFixed(n/1000>=10?0:1)+"T";
    if(n>=10)return "$"+Math.round(v)+"B";
    if(n>=1)return "$"+v.toFixed(1).replace(/\.0$/,"")+"B";
    return "$"+v.toFixed(1)+"B";}

  // washes + quadrant names off geometric medians
  var mx=sx(med(A.map(function(a){return Math.max(a.t,XFLOOR);}))),
      my=sy(med(A.map(function(a){return a.g;})));
  svg.appendChild(el("rect",{x:L,y:T,width:mx-L,height:my-T,fill:"var(--ink-06)",opacity:".45"}));
  svg.appendChild(el("rect",{x:mx,y:my,width:R-mx,height:B-my,fill:"var(--ink-06)",opacity:".45"}));
  [[ (L+mx)/2,(T+my)/2,"Rentiers"],[(mx+R)/2,(T+my)/2,"Builders"],
   [ (L+mx)/2,(my+B)/2,"Vaults"],[(mx+R)/2,(my+B)/2,"Bettors"]].forEach(function(q){
    var t=el("text",{x:q[0],y:q[1],"text-anchor":"middle","dominant-baseline":"middle",
      "font-size":"46","class":"q-name"});t.textContent=q[2];svg.appendChild(t);});

  // axes + decade ticks
  svg.appendChild(el("line",{x1:L,y1:B,x2:R,y2:B,"class":"axis-line"}));
  svg.appendChild(el("line",{x1:L,y1:T,x2:L,y2:B,"class":"axis-line"}));
  function decades(d){var o=[],p=Math.ceil(lg(d[0]));for(;Math.pow(10,p)<=d[1]*1.01;p++)o.push(Math.pow(10,p));return o;}
  decades(XD).forEach(function(v){var x=sx(v),g=el("g",{"class":"tick"});
    g.appendChild(el("line",{x1:x,y1:B,x2:x,y2:B+5}));
    var t=el("text",{x:x,y:B+17,"text-anchor":"middle"});t.textContent=fmt(v);g.appendChild(t);svg.appendChild(g);});
  decades(YD).forEach(function(v){var y=sy(v),g=el("g",{"class":"tick"});
    g.appendChild(el("line",{x1:L-5,y1:y,x2:L,y2:y}));
    var t=el("text",{x:L-9,y:y+3,"text-anchor":"end"});t.textContent=fmt(v);g.appendChild(t);svg.appendChild(g);});
  svg.appendChild(el("line",{x1:mx,y1:T,x2:mx,y2:B,"class":"thresh"}));
  svg.appendChild(el("line",{x1:L,y1:my,x2:R,y2:my,"class":"thresh"}));

  // the commensurable diagonal: reach = spend
  var pts=[];
  for(var lv=lg(XD[0]);lv<=lg(XD[1]);lv+=0.05){var v=Math.pow(10,lv),x=sx(v),y=sy(v);
    if(x>=L&&x<=R&&y>=T&&y<=B)pts.push(x+","+y);}
  if(pts.length){svg.appendChild(el("polyline",{points:pts.join(" "),"class":"diag"}));
    var dl=el("text",{x:L+8,y:T+14,"class":"diag-lbl"});dl.textContent="reach = spend";svg.appendChild(dl);}

  var xt=el("text",{x:(L+R)/2,y:H-28,"text-anchor":"middle","class":"axis-title"});
  xt.textContent="Thrust — capital committed to new positions ($B/yr, log)";svg.appendChild(xt);
  var yt=el("text",{"text-anchor":"middle","class":"axis-title",
    transform:"translate(26,"+(T+B)/2+") rotate(-90)"});
  yt.textContent="Gravity — economy that breaks if it stops ($B/yr, log)";svg.appendChild(yt);

  // bubbles, largest weight first
  var order=A.map(function(_,i){return i;}).sort(function(i,j){return A[j].w-A[i].w;});
  var pos=[];
  order.forEach(function(i){var a=A[i],cx=sx(a.t),cy=sy(a.g),r=rs(a.w);
    pos[i]={cx:cx,cy:cy,r:r};
    var g=el("g",{"class":"bubble",tabindex:"0",role:"link","aria-label":a.name,"data-i":i});
    g.appendChild(el("circle",{cx:cx,cy:cy,r:r,fill:OPTC[a.opt]||"var(--ink-45)","fill-opacity":"0.32"}));
    g.appendChild(el("circle",{cx:cx,cy:cy,r:r,"class":"ring",
      stroke:SECTOR[a.sector]||"var(--ink-24)"}));
    g.addEventListener("mouseenter",function(){hover(i);});
    g.addEventListener("focus",function(){hover(i);});
    g.addEventListener("click",function(){window.location.href="/map/"+a.slug+"/";});
    g.addEventListener("keydown",function(e){if(e.key==="Enter"){window.location.href="/map/"+a.slug+"/";}});
    svg.appendChild(g);});

  // serif labels with leader lines, de-cluttered per side
  var labs=A.map(function(a,i){return{i:i,name:a.name,cx:pos[i].cx,cy:pos[i].cy,
    r:pos[i].r,side:pos[i].cx<(L+R)/2?"L":"R"};});
  ["L","R"].forEach(function(side){
    var set=labs.filter(function(o){return o.side===side;}).sort(function(p,q){return p.cy-q.cy;});
    var last=-1e9;
    set.forEach(function(o){var ly=o.cy;if(ly-last<15)ly=last+15;last=ly;o.ly=ly;});});
  labs.forEach(function(o){
    var lx=o.side==="L"?o.cx-o.r-7:o.cx+o.r+7,anc=o.side==="L"?"end":"start",
        ex=o.side==="L"?o.cx-o.r-2:o.cx+o.r+2;
    svg.appendChild(el("line",{x1:ex,y1:o.cy,x2:lx+(o.side==="L"?2:-2),y2:o.ly,
      "class":"lead","data-lead":o.i}));
    var t=el("text",{x:lx,y:o.ly+4,"text-anchor":anc,"class":"lbl","data-lbl":o.i});
    t.textContent=o.name;svg.appendChild(t);});

  // the receipt
  var receipt=document.getElementById("plate-receipt");
  function esc(s){var d=document.createElement("i");d.textContent=s||"";return d.innerHTML;}
  function hover(i){
    svg.querySelectorAll(".bubble").forEach(function(b){
      var bi=+b.getAttribute("data-i");b.style.opacity=bi===i?"1":"0.3";
      b.querySelector(".ring").setAttribute("stroke-width",bi===i?"2.4":"1.5");});
    svg.querySelectorAll("[data-lbl]").forEach(function(t){
      var ti=+t.getAttribute("data-lbl");t.style.opacity=ti===i?"1":"0.25";
      t.style.fontWeight=ti===i?"600":"400";});
    svg.querySelectorAll("[data-lead]").forEach(function(l){
      l.style.opacity=(+l.getAttribute("data-lead")===i)?"1":"0.25";});
    var a=A[i];
    var rows=[
      ["Weight","commanded-capital",fmt(a.w),a.ccTxt],
      ["Thrust","thrust",(a.t<0?"−":"")+fmt(Math.abs(a.t))+"/yr",a.thrustTxt],
      ["Gravity","gravity","~"+fmt(a.g)+"/yr",a.gravTxt],
      ["Optionality","optionality",a.opt||"—",a.optRaw]
    ];
    var h='<p class="r-eyebrow">The receipt</p>'
      +'<h3 class="r-name"><a href="/map/'+esc(a.slug)+'/">'+esc(a.name)+'</a></h3>'
      +(a.posture?'<p class="r-posture">'+esc(a.posture)+'</p>':"");
    rows.forEach(function(r){
      h+='<div class="r-fig"><div class="r-fig-top">'
        +'<span class="r-k"><a href="/metric/'+r[1]+'/">'+r[0]+'</a></span>'
        +'<span class="r-v">'+esc(r[2])+'</span></div>'
        +(r[3]?'<p class="r-src">'+esc(r[3])+'</p>':"")+'</div>';});
    h+='<p class="r-more"><a href="/map/'+esc(a.slug)+'/">Full receipt — every figure sourced →</a></p>';
    receipt.innerHTML=h;
  }
})();
