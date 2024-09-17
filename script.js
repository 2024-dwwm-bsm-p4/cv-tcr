function opop(){
    const myPopup = new Popup({
        id: "popup",
        title: "Options",
        content: `<input type="button" onclick="mode_nuit()" class="buttoncs" value="Mode sombre" />`,
        font: "Poppins, sans-serif",
        css: `@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');`,
        disableScroll:false,
        fadeTime:"1s"
            
    });
      
      myPopup.show();
}

function mode_nuit(){        
            document.getElementById("bodyhtml");
            bodyhtml.classList.toggle("mnuit");
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
        
  