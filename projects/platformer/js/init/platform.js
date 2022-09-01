(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE

    // example:
    createPlatform(300, 600, 0.1);
    createPlatform(500, 500, 0.01);
    createPlatform(350, 393, 0.1);
    createPlatform(220, 490, 0.1, 3);
    createPlatform(50, 390, 0.3);
    createPlatform(0, 421, 0.2);
    createPlatform(0, 300, 0.1, 0.2);
    createPlatform(150, 180, 0.1, 0.2);
    createPlatform(0, 90, 0.1, 0.2);
    createPlatform(40, 243, 0.02, 2);
    createPlatform(300, 100, 0.02);
    createPlatform(400, 180, 0.4, 0.2); //Don't forget to change 0.002 in case forgotten where
    createPlatform(740, 220, 0.7, 0.2);
    createPlatform(620, 0, 0.01, 18);
    createPlatform(520, 180, 0.01, 15.5);
    createPlatform(540, 180, 0.01, 15.5);
    createPlatform(560, 180, 0.01, 15.5);
    createPlatform(700, 560, 0.5, 0.1);
    createPlatform(620, 500, 0.5, 0.1);
    createPlatform(700, 400, 0.2, 0.1);
    createPlatform(700, 300, 0.1, 0.1);
    createPlatform(860, 80, 0.1, 0.1);

    createPlatform(100, 500, 0.0002, 9);

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
