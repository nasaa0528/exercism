export function createScoreBoard() {
  const scoreBoard = {
    'The Best Ever': 1000000
  };
  return scoreBoard;
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
  if (scoreBoard.hasOwnProperty(player)) {
    scoreBoard[player] += points;
  }
  return scoreBoard;
}

export function applyMondayBonus(scoreBoard) {
  for (let k in scoreBoard) {
    scoreBoard[k] += 100;
  }
  return scoreBoard;
}
