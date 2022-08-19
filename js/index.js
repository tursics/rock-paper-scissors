window.addEventListener('load', function() {
    console.log('Hello world');

    var game = {};
    var foo = {name:'foo'};
    var bar = {name:'bar'};
    var baz = {name:'baz'};

    Business.reset(game);
    Business.setPlayers(foo, bar, baz);

    Business.raiseHand(baz, 'x');
    Business.raiseHand(bar, 'x');
    Business.raiseHand(bar, 'y');
    Business.raiseHand(bar, 'z');
    Business.raiseHand(foo, 'x');
});
