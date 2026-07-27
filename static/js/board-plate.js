/* The board plate — the POWER view (Ben, 2026-07-27).
   Columns = optionality (free → locked) · Y = weight ($B, log, kind-labeled)
   Size = GRAVITY (who breaks if they stop) · Fill = THRUST as heat (how hot
   they're burning) · Ring = sector, neon.
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
  var SECTOR = {finance:"var(--ring-finance)",power:"var(--ring-power)",
                infra:"var(--ring-infra)",care:"var(--ring-care)"};
  var BANDS=["free","mixed","constrained","locked"];
  var BANDLABEL={free:"FREE",mixed:"MIXED",constrained:"CONSTRAINED",locked:"LOCKED"};
  var BANDGLOSS={free:"its own, unencumbered",mixed:"partly bound",
                 constrained:"debt / parent",locked:"client · fiduciary · state"};
  var BANDFACTOR={free:1.0,mixed:0.6,constrained:0.3,locked:0.1};

  function band(s){
    // Band off the HEADLINE (before the em-dash qualifier); compounds take
    // the more encumbered word within the headline.
    var head=(s||"").toLowerCase().split("—")[0];
    if(head.indexOf("locked")>=0)return"locked";
    if(head.indexOf("constrained")>=0)return"constrained";
    if(head.indexOf("mixed")>=0)return"mixed";
    if(head.indexOf("free")>=0)return"free";
    return"mixed"; // ungraded actors sit mid-board, fill goes ink — flagged in receipt
  }

  var A = D.actors.map(function(a){
    return {slug:a.slug,name:a.name,posture:a.posture,opt:band(a.optionality),
      graded:!!a.optionality,optRaw:a.optionality,thrustTxt:a.thrust,
      ccTxt:a.cc,gravTxt:a.grav,sector:pk2sec[a.pocket]||"",
      w:+a.num.weight, t:+a.num.thrust, g:+a.num.gravity};
  });

  var NS="http://www.w3.org/2000/svg";
  var W=1000,H=800,ML=96,MR=24,MT=76,MB=64,L=ML,R=W-MR,T=MT,B=H-MB;
  var YD=[8,17000]; // $8B .. $17T, log
  function el(n,at){var e=document.createElementNS(NS,n);for(var k in at)e.setAttribute(k,at[k]);return e;}
  function lg(x){return Math.log(x)/Math.LN10;}
  function sy(v){var y=Math.max(v,YD[0]);
    return B-(lg(y)-lg(YD[0]))/(lg(YD[1])-lg(YD[0]))*(B-T);}
  var colW=(R-L)/BANDS.length;
  function colC(b){return L+colW*(BANDS.indexOf(b)+0.5);}

  // size = gravity (sqrt area)
  var gmin=Math.min.apply(null,A.map(function(a){return a.g;})),
      gmax=Math.max.apply(null,A.map(function(a){return a.g;}));
  function rs(v){var s=Math.sqrt(v),lo=Math.sqrt(gmin),hi=Math.sqrt(gmax);
    return 7+(s-lo)/(hi-lo)*40;}

  // fill = thrust heat. log ramp $0.3B -> $150B/yr; <=0.3 = ash (idle/negative)
  var STOPS=[[0,0x4A,0x4E,0x54],[0.35,0x9E,0x2A,0x18],[0.62,0xE8,0x5D,0x0D],
             [0.85,0xF7,0xB0,0x1B],[1,0xFF,0xF0,0x9E]];
  function heat(t){
    if(t==null) return "#8A97A3";
    if(t<=0.3) return "#8A97A3"; // ash — idle or negative
    var x=(lg(t)-lg(0.3))/(lg(150)-lg(0.3)); x=Math.max(0,Math.min(1,x));
    for(var i=1;i<STOPS.length;i++){
      if(x<=STOPS[i][0]){
        var a=STOPS[i-1],b=STOPS[i],f=(x-a[0])/(b[0]-a[0]);
        var r=Math.round(a[1]+(b[1]-a[1])*f),g=Math.round(a[2]+(b[2]-a[2])*f),
            bl=Math.round(a[3]+(b[3]-a[3])*f);
        return "rgb("+r+","+g+","+bl+")";
      }
    }
    return "rgb(255,240,158)";
  }

  function fmt(v){var n=Math.abs(v);
    if(n>=1000)return "$"+(v/1000).toFixed(n/1000>=10?0:1)+"T";
    if(n>=10)return "$"+Math.round(v)+"B";
    if(n>=1)return "$"+v.toFixed(1).replace(/\.0$/,"")+"B";
    return "$"+v.toFixed(1)+"B";}

  // ---- column furniture ----
  BANDS.forEach(function(b,i){
    var x=L+colW*i;
    if(i%2===1) svg.appendChild(el("rect",{x:x,y:T,width:colW,height:B-T,
      fill:"var(--ink-06)",opacity:".5"}));
    if(i>0) svg.appendChild(el("line",{x1:x,y1:T,x2:x,y2:B,"class":"col-rule"}));
    var h=el("text",{x:x+colW/2,y:T-34,"text-anchor":"middle","class":"col-h"});
    h.textContent=BANDLABEL[b];svg.appendChild(h);
    var gl=el("text",{x:x+colW/2,y:T-16,"text-anchor":"middle","class":"col-gloss"});
    gl.textContent=BANDGLOSS[b];svg.appendChild(gl);
  });
  svg.appendChild(el("line",{x1:L,y1:B,x2:R,y2:B,"class":"axis-line"}));
  svg.appendChild(el("line",{x1:L,y1:T,x2:L,y2:B,"class":"axis-line"}));
  [10,100,1000,10000].forEach(function(v){
    var y=sy(v),g=el("g",{"class":"tick"});
    g.appendChild(el("line",{x1:L-6,y1:y,x2:L,y2:y}));
    var t=el("text",{x:L-10,y:y+4,"text-anchor":"end"});t.textContent=fmt(v);
    g.appendChild(t);svg.appendChild(g);});
  var yt=el("text",{"text-anchor":"middle","class":"axis-title",
    transform:"translate(26,"+(T+B)/2+") rotate(-90)"});
  yt.textContent="Weight — capital commanded ($B, log · AUM for managers, total assets for corps)";
  svg.appendChild(yt);
  var xt=el("text",{x:(L+R)/2,y:H-18,"text-anchor":"middle","class":"axis-title"});
  xt.textContent="Optionality — how free the commanded capital is";
  svg.appendChild(xt);

  // ---- beeswarm placement: y fixed by weight, x relaxed within the column ----
  var placed=[];
  var order=A.map(function(_,i){return i;})
    .sort(function(i,j){return rs(A[j].g)-rs(A[i].g);}); // big gravity first
  order.forEach(function(i){
    var a=A[i],cy=sy(a.w),r=rs(a.g),cx0=colC(a.opt);
    var half=colW/2-r-6, cx=cx0, best=null;
    for(var s=0;s<=half;s+=4){
      var cands = s===0?[cx0]:[cx0+s,cx0-s], ok=false;
      for(var c=0;c<cands.length;c++){
        var x=cands[c], clear=true;
        for(var p=0;p<placed.length;p++){
          var q=placed[p];
          var dx=x-q.cx,dy=cy-q.cy,min=r+q.r+3;
          if(dx*dx+dy*dy<min*min){clear=false;break;}
        }
        if(clear){best=x;ok=true;break;}
      }
      if(ok)break;
    }
    cx=(best==null)?cx0:best;
    placed.push({i:i,cx:cx,cy:cy,r:r});
  });
  var pos=[]; placed.forEach(function(p){pos[p.i]=p;});

  // ---- draw bubbles ----
  placed.forEach(function(p){
    var a=A[p.i];
    var g=el("g",{"class":"bubble",tabindex:"0",role:"link","aria-label":a.name,"data-i":p.i});
    g.appendChild(el("circle",{cx:p.cx,cy:p.cy,r:p.r,
      fill:a.graded?heat(a.t):"var(--ink-45)","fill-opacity":"0.92"}));
    g.appendChild(el("circle",{cx:p.cx,cy:p.cy,r:p.r,"class":"ring",
      stroke:SECTOR[a.sector]||"var(--ink-24)"}));
    g.addEventListener("mouseenter",function(){hover(p.i);});
    g.addEventListener("focus",function(){hover(p.i);});
    g.addEventListener("click",function(){window.location.href="/map/"+a.slug+"/";});
    g.addEventListener("keydown",function(e){if(e.key==="Enter"){window.location.href="/map/"+a.slug+"/";}});
    svg.appendChild(g);
  });

  // ---- labels: under each mark, per-column de-clutter, leader if displaced ----
  BANDS.forEach(function(b){
    var set=placed.filter(function(p){return A[p.i].opt===b;})
      .map(function(p){return {p:p,ty:p.cy+p.r+15};})
      .sort(function(u,v){return u.ty-v.ty;});
    var last=-1e9;
    set.forEach(function(o){
      var y=Math.max(o.ty,last+16); last=y; o.ly=Math.min(y,B+14);
      var t=el("text",{x:o.p.cx,y:o.ly,"text-anchor":"middle","class":"lbl",
        "data-lbl":o.p.i});
      t.textContent=A[o.p.i].name; svg.appendChild(t);
      if(o.ly-(o.p.cy+o.p.r)>22)
        svg.appendChild(el("line",{x1:o.p.cx,y1:o.p.cy+o.p.r+2,x2:o.p.cx,
          y2:o.ly-11,"class":"lead","data-lead":o.p.i}));
    });
  });

  // ---- the receipt ----
  var receipt=document.getElementById("plate-receipt");
  function esc(s){var d=document.createElement("i");d.textContent=s||"";return d.innerHTML;}
  function hover(i){
    svg.querySelectorAll(".bubble").forEach(function(bb){
      var bi=+bb.getAttribute("data-i");bb.style.opacity=bi===i?"1":"0.35";
      bb.querySelector(".ring").setAttribute("stroke-width",bi===i?"4.5":"3");});
    svg.querySelectorAll("[data-lbl]").forEach(function(t){
      var ti=+t.getAttribute("data-lbl");t.style.opacity=ti===i?"1":"0.3";});
    svg.querySelectorAll("[data-lead]").forEach(function(l){
      l.style.opacity=(+l.getAttribute("data-lead")===i)?"1":"0.3";});
    var a=A[i];
    var nd=a.w*(BANDFACTOR[a.opt]||0.6);
    var rows=[
      ["Gravity","gravity","~"+fmt(a.g)+"/yr",a.gravTxt],
      ["Thrust","thrust",(a.t<0?"−":"")+fmt(Math.abs(a.t))+"/yr",a.thrustTxt],
      ["Weight","commanded-capital",fmt(a.w),a.ccTxt],
      ["Net deployable","optionality","≈ "+fmt(nd),
        "weight × "+(a.graded?a.opt:"ungraded")+" band ("+(BANDFACTOR[a.opt]||0.6)+")"],
      ["Optionality","optionality",a.graded?a.opt:"ungraded",a.optRaw]
    ];
    var h='<p class="r-eyebrow">The receipt</p>'
      +'<h3 class="r-name"><a href="/map/'+esc(a.slug)+'/">'+esc(a.name)+'</a></h3>'
      +(a.posture?'<p class="r-posture">'+esc(a.posture)+'</p>':"");
    rows.forEach(function(r){
      var neg=(r[0]==="Thrust"&&a.t<0);
      h+='<div class="r-fig"><div class="r-fig-top">'
        +'<span class="r-k"><a href="/metric/'+r[1]+'/">'+r[0]+'</a></span>'
        +'<span class="r-v'+(neg?" neg":"")+'">'+esc(r[2])+'</span></div>'
        +(r[3]?'<p class="r-src">'+esc(r[3])+'</p>':"")+'</div>';});
    h+='<p class="r-more"><a href="/map/'+esc(a.slug)+'/">Full receipt — every figure sourced →</a></p>';
    receipt.innerHTML=h;
  }
})();
