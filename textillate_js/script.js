var textAnimation = document.querySelector("h1")
textAnimation.addEventListener("mouseenter", function(){
    gsap.to("h1", {
        onStart:function(){
            $('h1').textillate({ in: { effect: 'fadeIn' } });
        }
    })
})
textAnimation.addEventListener("mouseleave", function(){
    gsap.to("h1", {
        onStart:function(){
            $('h1').textillate({ in: { effect: 'fadeOut' } });
        }
    })
})