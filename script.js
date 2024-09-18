// Création d'un moteur de physique
const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Events = Matter.Events;

// Création du moteur et du rendu
const engine = Engine.create();
const world = engine.world;
const render = Render.create({
  element: document.getElementById('world'),
  engine: engine,
  options: {
    width: 1230,
    height: 600,
    wireframes: false, // Désactiver les cadres filaires pour voir les vraies images
    background: '#00000000'
  }
});

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);

// Création des limites du cadre
const ground = Bodies.rectangle(200, 600, 2500, 7, { isStatic: true, render:{
fillStyle: 'rgba(0, 0, 0, 0)'
}});
const leftWall = Bodies.rectangle(0, 300, 10, 600, { isStatic: true, render:{
    fillStyle: 'rgba(0, 0, 0, 0)'
    }});
const rightWall = Bodies.rectangle(1225, 300, 5, 600, { isStatic: true, render:{
    fillStyle: 'rgba(0, 0, 0, 0)'
    }});

World.add(world, [ground, leftWall, rightWall]);

var img = document.getElementById('minutieux');
const imageBody = Bodies.circle(200, 150, 70, {
  restitution: 1,
  render: {
    sprite: {
      texture: img.src,
      xScale: 0.5,
      yScale: 0.5
    }
  }
});
World.add(world, imageBody);

var img = document.getElementById('patient');
const imageBody2 = Bodies.circle(200, 150, 70, {
  restitution: 1,
  render: {
    sprite: {
      texture: img.src,
      xScale: 0.5,
      yScale: 0.5
    }
  }
});


World.add(world,imageBody2);

var img = document.getElementById('fiable');
const imageBody3 = Bodies.circle(200, 150, 70, {
  restitution: 1,
  render: {
    sprite: {
      texture: img.src,
      xScale: 0.5,
      yScale: 0.5
    }
  }
});


World.add(world,imageBody3);


var img = document.getElementById('auto');
const imageBody4 = Bodies.circle(200, 150, 70, {
  restitution: 1,
  render: {
    sprite: {
      texture: img.src,
      xScale: 0.5,
      yScale: 0.5
    }
  }
});


World.add(world,imageBody4);


// Ajouter une légère gravité pour faire tomber l'image
engine.world.gravity.y = 0.1;

// --- Ajouter la souris physique ---
let mouseBody = Bodies.circle(20, 20, 70, {
  isStatic: false,
  render: {
    fillStyle: 'transparent'
  }
});

// Ajoute la souris au monde
World.add(world, mouseBody);

// Événement pour suivre la position de la souris
render.canvas.addEventListener('mousemove', function(event) {
  const mouseX = event.clientX - render.canvas.getBoundingClientRect().left;
  const mouseY = event.clientY - render.canvas.getBoundingClientRect().top;
  
  // Met à jour la position du corps de la souris
  Body.setPosition(mouseBody, { x: mouseX, y: mouseY });
});

// Permet de cliquer et déplacer la balle
render.canvas.addEventListener('mousedown', function(event) {
  // Ici tu peux ajouter des interactions pour cliquer sur les objets
});

// Mettre à jour la position de la souris physique à chaque tick
Events.on(engine, 'beforeUpdate', function() {
  // Ici, tu pourrais ajouter des forces ou interactions pour rendre la souris plus complexe
});



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
    center: true,
    items:2,
    loop:false,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});
        
  