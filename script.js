let game = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  let currentPlayer = "X";

  
  
  function handleClick(row, col) {
    if (game[row][col] === "") {
      game[row][col] = currentPlayer;
  
      let cell = document.querySelector(`#cell-${row}-${col}`);
      cell.textContent = currentPlayer;
  
      currentPlayer = currentPlayer === "X" ? "O" : "X";
  
      checkWinner();
    }
  }
  
  function checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (game[i][0] !== "" && game[i][0] === game[i][1] && game[i][1] === game[i][2]) {
        alert(game[i][0] + " gana!");
        return;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (game[0][i] !== "" && game[0][i] === game[1][i] && game[1][i] === game[2][i]) {
        alert(game[0][i] + " gana!");
        return;
      }
    }
  
    if (game[0][0] !== "" && game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
      alert(game[0][0] + " gana!");
      return;
    }
    if (game[0][2] !== "" && game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
      alert(game[0][2] + " gana!");
      return;
    }
  

    let isTie = true;
    for (let row of game) {
      for (let cell of row) {
        if (cell === "") {
          isTie = false;
          break;
        }
      }
    }
    if (isTie) {
      alert("Empate!");
    }
    let messageElement = document.querySelector("#message");
  messageElement.textContent = "Empate!";
  messageElement.style.display = "flex";
  }
  
  function resetGame() {
    game = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
  
    let cells = document.querySelectorAll("td");
    for (let cell of cells) {
      cell.textContent = "";
    }
  }
