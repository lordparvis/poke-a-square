console.log('Welcome to Poke-A-Square...');

// == User Stories/game logic == //
// When the user clicks begin, the timer should start and the squares should populate with a random color

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.

const createSquares = numberOfSquares => {
    const $squares = $(".squares");
    for (let i = 1; i <= numberOfSquares; i++) {
        const $square = $('<div class= "square" />');
        $square.css("background-color", applyRandomColor());
        $squares.append($square);
    }
}
const applyRandomColor = () => {

}
createSquares(25);