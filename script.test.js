const TicTacToe = require('./script'); // Importar la clase TicTacToe

describe('TicTacToe', () => {
  let game;

  beforeEach(() => {
    game = new TicTacToe();
  });

  test('El tablero inicial debe estar vacío', () => {
    const expectedBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    expect(game.getBoard()).toEqual(expectedBoard);
  });

  test('Se debe poder realizar movimientos', () => {
    game.makeMove(0, 0); // X realiza un movimiento
    expect(game.getBoard()[0][0]).toBe('X');

    game.makeMove(1, 1); // O realiza un movimiento
    expect(game.getBoard()[1][1]).toBe('O');
  });

  test('No se debe poder realizar un movimiento inválido', () => {
    game.makeMove(0, 0);
    expect(game.makeMove(0, 0)).toBe(false); // Intentar hacer un movimiento en una celda ocupada debe devolver false
  });

  test('Se debe poder verificar el ganador', () => {
    game.makeMove(0, 0);
    game.makeMove(0, 1);
    game.makeMove(1, 1);
    game.makeMove(0, 2);
    game.makeMove(2, 2);
    expect(game.checkWinner()).toBe(true); // X gana diagonalmente

    game.makeMove(1, 0);
    game.makeMove(1, 2);
    game.makeMove(2, 0);
    game.makeMove(2, 1);
    expect(game.checkWinner()).toBe(true); // O gana horizontalmente

    game.makeMove(1, 1);
    game.makeMove(2, 2);
    game.makeMove(0, 1);
    game.makeMove(2, 1);
    game.makeMove(0, 2);
    expect(game.checkWinner()).toBe(false); // Todavía no hay ganador
  });

  test('Se debe poder reiniciar el juego', () => {
    game.makeMove(0, 0);
    game.makeMove(1, 1);
    game.resetGame();
    const expectedBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    expect(game.getBoard()).toEqual(expectedBoard);
  });
});