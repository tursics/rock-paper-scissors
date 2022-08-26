# rock-paper-scissors
Just to play around

## setup

This project use Vanilla HTML + JS + CSS. 
Just open the source file in your IDE.
There are no build scripts.
No npm modules used.

## run website

Just open the HTML file in your browser.
That's it.

## extendable

The number of players is limited to be exact 2. But the business layer and the game logic supports a minimum of 2 players without a maximum number.

The player object is extendable. Currently only a computer "AI" with random choices and a human local player is implemented. But you can write own versions.

The game logic supports multiple game sets.
Current a set of 3 and 5 figures are defined.
But there is no limitaion.
The game logic defines the number and style of figures, the UI is generic and display the needed elements.

## events

The own event system uses a list of named events:

event name   | description
-------------|------------
vote.player  |A player has voted
vote.finish  |All player has voted. It's time for the results
ui.show.menu.main  |Show the main menu
ui.show.vote.human  |The local human player should vote

## compatibility

The used 'rest parameters' syntax is not supported by **Internet Explorer**. More information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

The used JS class syntax is not supported by **Internet Explorer**. More information: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes

## icons

I use free icons from [fontawesome](https://fontawesome.com/icons/) and a modern color scheme from [hook](https://hookagency.com/blog/website-color-schemes-2020/). 

### Apricot Avalanche – Web Design Color Schemes

Fresh and Bright Website Color Schemes

- Blueberry: #6B7A8F
- Apricot: #F7882F
- Citrus: #F7C331
- Apple Core: #DCC7AA
