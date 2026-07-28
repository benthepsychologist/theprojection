/* The diagonal plate — reach = spend (thrust × gravity), embedded on the
   circular-financing thread pages (W6: the v1 map view re-homed where the
   diagonal IS the story). Size = weight, fill = burn heat, ring = sector.
   Data injected as window.DIAG_DATA {actors, groups}. Light-only. */
(function(){
  "use strict";
  var D = window.DIAG_DATA; if(!D || !D.actors || !D.actors.length) return;
  var svg = document.querySelector(".diag-plate svg"); if(!svg) return;
  var pk2sec = {};
  (D.groups||[]).forEach(function(g){
    if(g.tier==="G1" && g.member_of && g.member_of.length) pk2sec[g.slug]=g.member_of[0];
  });
  var SECTOR={finance:"#00B8D9",power:"#B44BFF",infra:"#00C853",care:"#2962FF"};
  var A=D.actors.map(function(a){return {slug:a.slug,name:a.name,
    sector:pk2sec[a.pocket]||"",w:+a.num.weight,t:+a.num.thrust,g:+a.num.gravity};});
  var NS="http://www.w3.org/2000/svg";
  var W=1000,H=720,ML=120,MR=170,MT=48,MB=88,L=ML,R=W-MR,T=MT,B=H-MB;
  var XD=[0.3,300],YD=[4,2000],XF=0.3;
  function el(n,at){var e=document.createElementNS(NS,n);for(var k in at)e.setAttribute(k,at[k]);return e;}
  function lg(x){return Math.log(x)/Math.LN10;}
  function sx(v){return L+(lg(Math.max(v,XF))-lg(XD[0]))/(lg(XD[1])-lg(XD[0]))*(R-L);}
  function sy(v){return B-(lg(Math.max(v,YD[0]))-lg(YD[0]))/(lg(YD[1])-lg(YD[0]))*(B-T);}
  var wmin=Math.min.apply(null,A.map(function(a){return a.w;})),
      wmax=Math.max.apply(null,A.map(function(a){return a.w;}));
  function rs(v){var s=Math.sqrt(v),lo=Math.sqrt(wmin),hi=Math.sqrt(wmax);
    return 6+(s-lo)/(hi-lo)*34;}
  var STOPS=[[0,0x3A,0x3A,0x42],[0.30,0xC4,0x0E,0x0E],[0.55,0xFF,0x3D,0x00],
             [0.75,0xFF,0x8F,0x00],[0.90,0xFF,0xC8,0x00],[1,0xFF,0xFB,0xE0]];
  function heat(t){
    if(t==null||t<=0.005) return "#8A97A3";
    var x=(lg(t)-lg(0.005))/(0-lg(0.005)); x=Math.max(0,Math.min(1,x));
    for(var i=1;i<STOPS.length;i++){ if(x<=STOPS[i][0]){
      var a=STOPS[i-1],b=STOPS[i],f=(x-a[0])/(b[0]-a[0]);
      return "rgb("+Math.round(a[1]+(b[1]-a[1])*f)+","+Math.round(a[2]+(b[2]-a[2])*f)+","+Math.round(a[3]+(b[3]-a[3])*f)+")";}}
    return "rgb(255,251,224)";}
  function fmt(v){var n=Math.abs(v);
    if(n>=1000)return "$"+(v/1000).toFixed(n/1000>=10?0:1)+"T";
    if(n>=10)return "$"+Math.round(v)+"B";
    return "$"+v.toFixed(1)+"B";}
  // axes + decade ticks
  svg.appendChild(el("line",{x1:L,y1:B,x2:R,y2:B,"class":"dax"}));
  svg.appendChild(el("line",{x1:L,y1:T,x2:L,y2:B,"class":"dax"}));
  [1,10,100].forEach(function(v){var x=sx(v);
    svg.appendChild(el("line",{x1:x,y1:B,x2:x,y2:B+5,"class":"dax"}));
    var t=el("text",{x:x,y:B+18,"text-anchor":"middle","class":"dtick"});t.textContent=fmt(v);svg.appendChild(t);});
  [10,100,1000].forEach(function(v){var y=sy(v);
    svg.appendChild(el("line",{x1:L-5,y1:y,x2:L,y2:y,"class":"dax"}));
    var t=el("text",{x:L-9,y:y+4,"text-anchor":"end","class":"dtick"});t.textContent=fmt(v);svg.appendChild(t);});
  // the diagonal: reach = spend
  var pts=[];
  for(var lv=lg(XD[0]);lv<=lg(XD[1]);lv+=0.05){var v=Math.pow(10,lv),x=sx(v),y=sy(v);
    if(x>=L&&x<=R&&y>=T&&y<=B)pts.push(x+","+y);}
  svg.appendChild(el("polyline",{points:pts.join(" "),"class":"ddiag"}));
  var dl=el("text",{x:L+10,y:T+16,"class":"dlbl"});dl.textContent="reach = spend — above this line, an actor moves more economy than it commits";svg.appendChild(dl);
  var xt=el("text",{x:(L+R)/2,y:H-16,"text-anchor":"middle","class":"dtitle"});
  xt.textContent="Thrust — committed to new positions ($B/yr, log)";svg.appendChild(xt);
  var yt=el("text",{"text-anchor":"middle","class":"dtitle",
    transform:"translate(24,"+(T+B)/2+") rotate(-90)"});
  yt.textContent="Gravity — breaks if it stops ($B/yr, log)";svg.appendChild(yt);
  // bubbles largest-weight first + side labels
  var order=A.map(function(_,i){return i;}).sort(function(i,j){return A[j].w-A[i].w;});
  var pos=[];
  order.forEach(function(i){var a=A[i],cx=sx(a.t),cy=sy(a.g),r=rs(a.w);
    pos[i]={cx:cx,cy:cy,r:r};
    var g=el("g",{"class":"dbub",tabindex:"0","aria-label":a.name});
    g.appendChild(el("circle",{cx:cx,cy:cy,r:r,fill:heat(a.t>0?a.t/a.w:0),"fill-opacity":"0.9"}));
    g.appendChild(el("circle",{cx:cx,cy:cy,r:r,fill:"none",stroke:SECTOR[a.sector]||"#9aa","stroke-width":"2.5"}));
    g.addEventListener("click",function(){window.location.href="/map/"+a.slug+"/";});
    svg.appendChild(g);});
  var labs=A.map(function(a,i){return{i:i,name:a.name,cx:pos[i].cx,cy:pos[i].cy,r:pos[i].r,
    side:pos[i].cx<(L+R)/2?"L":"R"};});
  ["L","R"].forEach(function(side){
    var set=labs.filter(function(o){return o.side===side;}).sort(function(p,q){return p.cy-q.cy;});
    var last=-1e9;set.forEach(function(o){var ly=o.cy;if(ly-last<14)ly=last+14;last=ly;o.ly=ly;});});
  labs.forEach(function(o){
    var lx=o.side==="L"?o.cx-o.r-6:o.cx+o.r+6,anc=o.side==="L"?"end":"start";
    var t=el("text",{x:lx,y:o.ly+4,"text-anchor":anc,"class":"dname"});
    t.textContent=o.name;svg.appendChild(t);});
})();
