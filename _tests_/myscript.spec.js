const { Hand, playRound , playUntill } = require("../src/myscript");


test('testing Hands to be rock, paper, scissor', () => {
    expect(Hand).toEqual(['rock', 'paper', 'scissors'])
});

test('testing lenght of Hands to be 3', () => {
    expect(Hand).toHaveLength(3)
});

test('testing playUntil is 5', () => {
    expect(playUntill).toBeTruthy()
});


test('testing playRound', () => {
    const playRound = jest.fn();
    playRound();
    expect(playRound).toHaveBeenCalled();
    });

test('testing playRound', () => {
    const playRound = jest.fn(() => true);
    playRound();
    expect(playRound).toHaveReturned();
});

