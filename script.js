
/*let preloader =document.getElementById(preloader)

function loadweb(){
    preloader.style.display="none"
}

*/
const t1=new SplitType(".intro-txt")

gsap.from("#for-fade" ,{
    opacity:0,
    duration:5,
    delay:1
})

gsap.from(".nav" ,{
    y:10,
    delay:1
})

gsap.from(".char", {
    duration:2.5,
    x:-100,
    opacity:0,
    delay:1
    
})

gsap.from("#deadpool" ,{
    y:100,
    duration:2,
    
} )

gsap.from(".circle" ,{
    y:100,
    duration:2,
    delay:1,
    opacity:0
} )

gsap.from("#name", {
    duration:1,
    y:50,
    delay:1,
    opacity:0
})

gsap.from("#preloader" ,{
    opacity:1,
    duration:4
})



const t2=new SplitType(".info-txt")

var t3  = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3-part1",
        markers: false,
        start: "0% 50%",
        end: "0% 50%",
        scrub: 1,
        pin: true,
        duration:5
    }
});

t3.from("#info-txt" , {
    y:200,
    opacity:0
    
})

var t4  = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3-part2",
        markers: false,
        start: "0% 50%",
        end: "0% 50%",
        scrub: 1,
        pin: true,
        duration:5
    }
});

t4.from("#fade" ,{
   opacity:0,
   x:200
})

gsap.to(".background-page2" ,{
    x:"-50%",
    duration:5,
    repeat:-1,
    ease: "none"
    
})

gsap.to(".scroll-background" ,{
    x:"-50%",
    duration:5,
    repeat:-1,
    ease: "none"
    
})







