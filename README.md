# Rock Paper Scissors

It's a prototyp of the well known game.
I made it to just play a little around.

Want to play?
[Follow this link](https://tursics.github.io/rock-paper-scissors/)

## What device and browser?

I've tested the game on multiple devices.
It 'should' work on most devices and orientations (the visuals are responsive).
But some old browsers are not supported by default.

Device   |Browser  |Note
---------|---------|-----
Windows  |Chrome   |:heavy_check_mark:
Windows  |Edge     |:heavy_check_mark:
Windows  |FireFox  |:heavy_check_mark:
Windows  |Internet Explorer  |No. By default not!
Mac      |Chrome   |:heavy_check_mark:
Mac      |Safari   |:heavy_check_mark:
Mac      |FireFox  |:heavy_check_mark:
Android Phone  |Chrome   |:heavy_check_mark: best viewed in portrait mode (but is too small already)
Android Tablet |Chrome   |not tested
iPhone   |Safari   |:heavy_check_mark: best viewed in portrait mode (but is too small already)
iPad     |Safari   |tested on a very old safari with a very old browser. Test failed!

## Setup

You want to read the code and learn who to build a simple JavaScript game?
Nice!

This project use Vanilla HTML plus JavaScript plus CSS.
No extras, no extensions, as simple as possible.
There are no build scripts.
No npm modules used.
Just open the source files in your IDE (or any other text editor).

## Run the website

Just open the index.html file in your browser.
That's it.
All dependend files (js, css, images) will be loaded by the browser.

Or you open the [online version](https://tursics.github.io/rock-paper-scissors/) automatically hosted by github.io

## Extendable

The game is designed in modules and has extendable basic functionality.
Some improvements are done yet, others are still written down.

- The number of players is limited to be exactly 2. But the business layer and the game logic supports a minimum of 2 players without a maximum number.

- The player object is extendable. Currently only a computer 'AI' with random choices and a human local player is implemented. But you can write own versions.
  - Add a computer player that act like a human (there are some studies of human psychology playing this game)
  - Add a computer player that act opposite. It analyse last human figures and win every time ;)
  - Add a human remote player
  - Add alternative human interfaces like
    - augmented reality
    - swipe your gesture
    - support game controller
    - XBox gesture support (recocgnize real hand figures)
  - The game logic supports multiple game sets. Current the 3 figure game and a 5 figure game is implemented
    - Is it possible to play other games? The current design shows hand figures on cards. Can you play card games with this engine? Is it possible to change the game logic and play Poker?
  - The game logic defines the number and style of figures, the UI is generic and display the needed elements
    - change the CSS definition to get a different look and feel
    - display of 1 to 5 cards are supported, but it's only a styling issue in the CSS to support more
  - A stub of i18n is implemented. The titels on the cards are translated to German via a dictionary. ToDo: remove all hard coded texts and support multiple languages
  - use the own event system to support more features like sound effects and music

## Event system

The own event system uses a list of named events:

event name          | description
--------------------|------------
vote.openGame       |Start a new game
vote.player         |A player has voted
vote.finish         |All player has voted. It's time for the results
vote.finish.winner  |All player has voted. There are a winner
vote.closeGame      |Finish the current game
ui.show.menu.main   |Show the main menu
ui.show.vote.human  |The local human player should vote

## Compatibility

The used 'rest parameters' syntax is not supported by **Internet Explorer**. More information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

The used JS class syntax is not supported by **Internet Explorer**. More information: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes

## Icons

I use free icons from [fontawesome](https://fontawesome.com/icons/) and a modern color scheme from [hook](https://hookagency.com/blog/website-color-schemes-2020/). 

The **Apricot Avalanche – Web Design Color Schemes** is a fresh and bright website color schemes. It uses the base colors:

- Blueberry: #6B7A8F
- Apricot: #F7882F
- Citrus: #F7C331
- Apple Core: #DCC7AA

## License

The code is licensed under the free MIT license