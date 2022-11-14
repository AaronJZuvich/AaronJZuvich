var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        var userInput = Number(prompt("How many circles would you prefer? (Max is 1000)"));
        var userInput2 = Number(prompt("How much speed do you want left and right? (Max is 30)"));
        var userInput3 = Number(prompt("How much speed do you want up and down? (Max is 30)"));

        if (userInput > 1000) {
            userInput = Math.floor(Math.random() * 1001)
        }
        
        if (userInput2 === NaN || userInput2 === null || userInput2 > 30) {
            userInput2 = Math.floor(Math.random() * 31);
        }

        if (userInput3 === NaN || userInput3 === null || userInput3 > 30) {
            userInput3 = Math.floor(Math.random() * 31);
        }

        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, false, '#999', 2);
            physikz.addRandomVelocity(circle, canvas, userInput2, userInput3);
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 / 7 : Call the drawCircle() function 
        for (var i1 = 0; i1 < userInput; i1++) {
            drawCircle();
        }
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
           
            

            // TODO 9 : Iterate over the array
           for (var i2 = 0; i2 < circles.length; i2++) {
             var eachCircle = circles[i2];
             physikz.updatePosition(eachCircle);
             game.checkCirclePosition(eachCircle);
           }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            var edgeX = circle.x + circle.radius;
            var edgeX2 = circle.x + -circle.radius;
            var edgeY = circle.y + circle.radius;
            var edgeY2 = circle.y + -circle.radius;

            if ( edgeX2 > canvas.width ) {
                circle.x = 0;
            }

            if (edgeX < 0) {
                circle.x = canvas.width;
            }
            
            if (edgeY2 > canvas.height) {
                circle.y = 0;
            }

            if (edgeY < 0) {
                circle.y = canvas.height;
            }
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            
            
            

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
