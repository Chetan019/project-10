var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["307c2a45-5ed1-4231-b0ea-142fbaa636be","ba491881-315e-4c16-bca1-69ba63844005","ab762ba9-9a63-42cb-b9ad-0cec3ec4d124","ad9c70f8-681e-4439-89f4-b58f7578d6fe","890f88a6-5e30-40f6-9056-ba4dcfcc307c"],"propsByKey":{"307c2a45-5ed1-4231-b0ea-142fbaa636be":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF/category_robots/robot_31.png","frameSize":{"x":322,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":322,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cI6imfxnuMCdD.5eCI6xlHBZdgBMxYRF/category_robots/robot_31.png"},"ba491881-315e-4c16-bca1-69ba63844005":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/Jg7eSCK4Sw8y4_lP9B96_mxmmTfjt.Rd/category_faces/gameplayfaces_08.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Jg7eSCK4Sw8y4_lP9B96_mxmmTfjt.Rd","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Jg7eSCK4Sw8y4_lP9B96_mxmmTfjt.Rd/category_faces/gameplayfaces_08.png"},"ab762ba9-9a63-42cb-b9ad-0cec3ec4d124":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/ta1NIPkMvCFS7AFDDpwbOy61h3NStP0J/category_faces/gameplayfaces_04.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"ta1NIPkMvCFS7AFDDpwbOy61h3NStP0J","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ta1NIPkMvCFS7AFDDpwbOy61h3NStP0J/category_faces/gameplayfaces_04.png"},"ad9c70f8-681e-4439-89f4-b58f7578d6fe":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/06wPXKdEQcswfpqQZSlfk0f9AlqkYNH./category_faces/gameplayfaces_07.png","frameSize":{"x":391,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"06wPXKdEQcswfpqQZSlfk0f9AlqkYNH.","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/06wPXKdEQcswfpqQZSlfk0f9AlqkYNH./category_faces/gameplayfaces_07.png"},"890f88a6-5e30-40f6-9056-ba4dcfcc307c":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200, 200);
bg.setAnimation("space")
var player = createSprite(200, 345, 10, 10);
player.shapeColor = "blue"

var enemy1 = createSprite(200, 250, 10, 10);
enemy1.shapeColor = "red";

var enemy2 = createSprite(200, 150, 10, 10);
enemy2.shapeColor = "red";

var enemy3 = createSprite(200, 50, 10, 10);
enemy3.shapeColor = "red";

var exit = createSprite(200, 5, 200, 20);
exit.shapeColor = "yellow";

var goal =0;
var death = 0

player.setAnimation("player");
player.scale=.2;
enemy1.setAnimation("enemy1");
enemy1.scale=.1;
enemy2.setAnimation("enemy2");
enemy2.scale=.1;
enemy3.setAnimation("enemy3");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-20,0);
function draw() {
  
  createEdgeSprites()
  
  enemy1.bounceOff(edges);
  enemy2.bounceOff(edges);
  enemy3.bounceOff(edges);
  player.bounceOff(edges)
  
  if(keyDown(UP_ARROW)){
  player.y=player.y-3
}

if(keyDown(DOWN_ARROW)){
  player.y=player.y+3
}

if(keyDown(LEFT_ARROW)){
  player.x=player.x-3
}

if(keyDown(RIGHT_ARROW)){
  player.x=player.x+3
}
  if(player.isTouching(enemy1)|| player.isTouching(enemy2)|| player.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  player.x=200
  player.y=350
  death = death+1
}
if(player.isTouching(exit)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  player.x=200
  player.y=345
  goal=goal+1
}

  
drawSprites()

textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
