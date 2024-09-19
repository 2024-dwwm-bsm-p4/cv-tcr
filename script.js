function runScriptIfScreenWidthGreaterThan1290() {
  if (window.matchMedia("(min-width: 1290px)").matches) {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const World = Matter.World;
    const Body = Matter.Body;
    const Events = Matter.Events;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    const world = engine.world;
    const render = Render.create({
      element: document.getElementById("world"),
      engine: engine,
      options: {
        width: 1230,
        height: 600,
        wireframes: false,
        background: "#00000000",
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    const ceiling = Bodies.rectangle(200, 5, 2500, 7, {
      isStatic: true,
      render: { fillStyle: "rgba(0, 0, 0, 0)" },
    });
    const ground = Bodies.rectangle(200, 600, 2500, 7, {
      isStatic: true,
      render: { fillStyle: "rgba(0, 0, 0, 0)" },
    });
    const leftWall = Bodies.rectangle(0, 300, 10, 600, {
      isStatic: true,
      render: { fillStyle: "rgba(0, 0, 0, 0)" },
    });
    const rightWall = Bodies.rectangle(1225, 300, 5, 600, {
      isStatic: true,
      render: { fillStyle: "rgba(0, 0, 0, 0)" },
    });

    World.add(world, [ceiling, ground, leftWall, rightWall]);

    function createImageBody(imgId, x, y, radius) {
      const img = document.getElementById(imgId);
      return Bodies.circle(x, y, radius, {
        restitution: 1,
        render: {
          sprite: {
            texture: img.src,
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    }

    const imageBody1 = createImageBody("minutieux", 200, 150, 70);
    const imageBody2 = createImageBody("patient", 200, 150, 70);
    const imageBody3 = createImageBody("fiable", 200, 150, 70);
    const imageBody4 = createImageBody("auto", 200, 150, 70);

    World.add(world, [imageBody1, imageBody2, imageBody3, imageBody4]);

    // Couleur des balles aléatoires
    function getRandomColor() {
      const r = Math.floor(Math.random() * 156) + 100;
      const g = Math.floor(Math.random() * 156) + 100;
      const b = Math.floor(Math.random() * 156) + 100;
      return `rgb(${r}, ${g}, ${b})`;
    }

    function createColoredBall(x, y, radius) {
      return Bodies.circle(x, y, radius, {
        restitution: 1,
        render: {
          fillStyle: getRandomColor(),
        },
      });
    }

    const balls = [];
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 1000 + 100;
      const y = Math.random() * 400 + 100;
      const radius = Math.random() * 30 + 25;
      const ball = createColoredBall(x, y, radius);
      balls.push(ball);
    }

    World.add(world, balls);

    engine.world.gravity.y = 0.01;

    const canvasMouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: canvasMouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
      collisionFilter: {
        mask:
          imageBody1.collisionFilter.category |
          imageBody2.collisionFilter.category |
          imageBody3.collisionFilter.category |
          imageBody4.collisionFilter.category,
      },
    });
    World.add(world, mouseConstraint);
    Events.on(engine, "beforeUpdate", function () {});

    // Force aléatoire
    function applyRandomForce(body) {
      const forceMagnitude = 0.15 * body.mass;
      const force = Matter.Vector.create(
        (Math.random() - 0.5) * forceMagnitude,
        (Math.random() - 0.5) * forceMagnitude
      );
      Body.applyForce(body, body.position, force);
    }

    setInterval(function () {
      applyRandomForce(imageBody1);
      applyRandomForce(imageBody2);
      applyRandomForce(imageBody3);
      applyRandomForce(imageBody4);
    }, 4000);
  }
}

// Observeur et déclencheur
runScriptIfScreenWidthGreaterThan1290();
window.addEventListener("resize", runScriptIfScreenWidthGreaterThan1290);

function opop() {
  const myPopup = new Popup({
    id: "popup",
    title: "Options",
    content: `<input type="button" onclick="mode_nuit()" class="buttoncs" value="Mode sombre" />`,
    font: "Poppins, sans-serif",
    css: `@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');`,
    disableScroll: false,
    fadeTime: "1s",
  });

  myPopup.show();
}

function mode_nuit() {
  document.getElementById("bodyhtml");
  bodyhtml.classList.toggle("mnuit");
}

$(".owl-carousel").owlCarousel({
  center: true,
  items: 2,
  loop: false,
  margin: 10,
  responsive: {
    600: {
      items: 4,
    },
  },
});
