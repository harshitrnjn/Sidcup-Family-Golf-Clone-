var crsr= document.querySelector('#cursor');
var crsrblr=document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
crsr.style.left=dets.x +"px" ;
crsr.style.top=dets.y +"px";
crsrblr.style.left=dets.x -200 +"px" ;
crsrblr.style.top=dets.y -200 +"px";
});
var Pall=document.querySelectorAll("#nav p");
Pall.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=2
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })
})
Pall.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1
        crsr.style.border="0px solid white"
        crsr.style.backgroundColor="#ACDD23"
    })
})



gsap.from('#colon1',{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:'#colon1',
        scroller:'body',
        start:'top 55%',
        end:'top 45%',
        scrub:2
    }
})

gsap.from('#colon2',{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:'#colon1',
        scroller:'body',
        start:'top 55%',
        end:'top 45%',
        scrub:2
    }
})



gsap.to('#nav',{
    backgroundColor:'black',
    height:'110px',
    duration:0.4,
    color:'green',
    scrollTrigger:{
        trigger:"#nav",
        scroller: 'body',
        start:'top -35%',
        end: 'top -80%',
        scrub:1
    }
})
gsap.to('#main',{
    backgroundColor:'black',
    scrollTrigger:{
        trigger:"#main",
        scroller: 'body',
        start:'top -30%',
        end: 'top -80%',
        scrub:2
    }
})
gsap.from("#about img,#aboutus", {
    y: 90,
    opacity: 0,
     duration: 1,
    scrollTrigger: {
      trigger: "#about",
      scroller: "body",
      start: "top 70%",
      end: "top 65%",
      scrub: 0.5,
    },
  })
  gsap.from(".card",{
    scale:0.8,
     opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".card",
        scroll:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:2
    }
})
gsap.from("#page5 h1", {
    y:50,
    scrollTrigger:{
        trigger:'#page5 h1',
        scroller:'body',
        start:'top 80%',
        end:'top 75%',
        scrub:1
    }
})